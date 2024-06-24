import { injectable, inject } from 'tsyringe';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { UserRepository } from './User.repository';

import { InvalidCredentialsError, UserNotFoundError } from '../../utils/error-builder';
import { JWTData } from '../../utils/auth';
import { Config } from '../../config';

@injectable()
export class UserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository
  ) { }

  async issueJwtToken(jwtDTO: JWTData) {
    const { userId } = jwtDTO;

    const accessExpiresIn = Config.accessExpiryHours * 60 * 60 * 1000; // 1 hour
    const refreshExpiresIn = Config.refreshExpiryHours * 60 * 60 * 1000; // 24 hours

    const accessToken = jwt.sign(jwtDTO, Config.jwtSecret, { expiresIn: accessExpiresIn });
    const refreshToken = jwt.sign(jwtDTO, Config.refreshSecret, { expiresIn: refreshExpiresIn });

    const refreshExpiresAt = new Date(Date.now() + refreshExpiresIn);

    await this.userRepository.update(userId, { refreshToken, refreshExpiresAt });

    return accessToken;
  }

  async createUser(email: string, password: string): Promise<string> {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.userRepository.create({ email, password: hashedPassword });

    return this.issueJwtToken({ userId: user.id });
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw UserNotFoundError();
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw InvalidCredentialsError();
    }

    return this.issueJwtToken({ userId: user.id });
  }
}
