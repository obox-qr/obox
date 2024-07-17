import * as bcrypt from 'bcryptjs';

import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppLogger } from '@/common/utils/logger/logger.service';

import { UsersRepository } from './users.repository';
import { User } from './users.entity';

import { CreateUserRequestDto, CreateUserResponseDto } from '@/common/dto/auth';
import { getEmailAlreadyTakenError } from '@/common/errors/error.factory';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UsersRepository) private readonly usersRepository: UsersRepository,
    private readonly logger: AppLogger,
    private readonly jwtService: JwtService,
  ) {
    this.logger.log('Users Service initialized', User.name);
  }

  async issueJwtToken(userId: string): Promise<string> {
    const accessToken = this.jwtService.sign({ userId }, { expiresIn: '1h' });
    return accessToken;
  }

  async createUser(
    createUserDto: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    const { email, password } = createUserDto;
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    const existing = await this.usersRepository.findOneByCriteria({ email });

    if (existing) {
      throw getEmailAlreadyTakenError();
    }

    const user = await this.usersRepository.createUser({
      email,
      password: hashedPassword,
    });

    const accessToken = await this.issueJwtToken(user.id);

    return { accessToken };
  }

  // async login(loginUserDto: LoginRequestDto): Promise<string> {
  //   const { email, password } = loginUserDto;
  //   console.log(this.usersRepository.findOneBy);

  //   const user = await this.usersRepository.findOneBy({ email });

  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }

  //   const passwordMatch = await bcrypt.compare(password, user.password);

  //   if (!passwordMatch) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }

  //   return this.issueJwtToken(user.id);
  // }
}
