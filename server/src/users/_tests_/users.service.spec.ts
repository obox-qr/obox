import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { AppLogger } from '@/common/utils/logger/logger';
import { getEmailAlreadyTakenError } from '@/common/errors/error.factory';
import { CreateUserRequestDto } from '@/common/dto/auth';

import { UsersService } from '../users.service';
import { UsersRepository } from '../users.repository';
import { User } from '../users.entity';

jest.mock('bcryptjs');

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: UsersRepository;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: {
            findOneByCriteria: jest.fn(),
            createUser: jest.fn(),
          },
        },
        {
          provide: AppLogger,
          useValue: {
            log: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    usersRepository = module.get<UsersRepository>(UsersRepository);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('issueJwtToken', () => {
    it('should return a JWT token', async () => {
      const userId = 'test-id';
      const token = 'test-token';
      jest.spyOn(jwtService, 'sign').mockReturnValue(token);

      const result = await service.issueJwtToken(userId);

      expect(result).toBe(token);
      expect(jwtService.sign).toHaveBeenCalledWith(
        { userId },
        { expiresIn: '1h' },
      );
    });
  });

  describe('createUser', () => {
    it('should create a user and return an access token', async () => {
      const createUserDto: CreateUserRequestDto = {
        email: 'test@example.com',
        password: 'password',
      };
      const hashedPassword = 'hashedPassword';
      const user: User = {
        id: 'user-id',
        email: 'test@example.com',
        password: hashedPassword,
      } as User;
      const token = 'test-token';

      jest.spyOn(usersRepository, 'findOneByCriteria').mockResolvedValue(null);
      (bcrypt.hash as jest.Mock).mockResolvedValue(hashedPassword);
      jest.spyOn(usersRepository, 'createUser').mockResolvedValue(user);
      jest.spyOn(service, 'issueJwtToken').mockResolvedValue(token);

      const result = await service.createUser(createUserDto);

      expect(usersRepository.findOneByCriteria).toHaveBeenCalledWith({
        email: createUserDto.email,
      });
      expect(bcrypt.hash).toHaveBeenCalledWith(createUserDto.password, 10);
      expect(usersRepository.createUser).toHaveBeenCalledWith({
        email: createUserDto.email,
        password: hashedPassword,
      });
      expect(service.issueJwtToken).toHaveBeenCalledWith(user.id);
      expect(result).toEqual({ accessToken: token });
    });

    it('should throw an error if email is already taken', async () => {
      const createUserDto: CreateUserRequestDto = {
        email: 'test@example.com',
        password: 'password',
      };

      jest
        .spyOn(usersRepository, 'findOneByCriteria')
        .mockResolvedValue({ id: 'existing-id' } as User);

      jest.spyOn(service, 'issueJwtToken').mockResolvedValue('token');

      await expect(service.createUser(createUserDto)).rejects.toThrow(
        getEmailAlreadyTakenError()
      );

      expect(usersRepository.findOneByCriteria).toHaveBeenCalledWith({
        email: createUserDto.email,
      });
      expect(usersRepository.createUser).not.toHaveBeenCalled();
      expect(service.issueJwtToken).not.toHaveBeenCalled();
    });
  });
});
