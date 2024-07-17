import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserRequestDto, CreateUserResponseDto } from '@/common/dto/auth';
import { ErrorType, getErrorMessageByType } from '@/common/errors/error.types';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBody({ type: CreateUserRequestDto })
  @ApiOkResponse({
    type: CreateUserResponseDto,
    status: 201,
    description: 'User created successfully',
  })
  @ApiConflictResponse({
    description: getErrorMessageByType(ErrorType.EMAIL_TAKEN),
  })
  @ApiBadRequestResponse({
    description: getErrorMessageByType(ErrorType.BAD_REQUEST),
  })
  @Post('register')
  async register(
    @Body() createUserDto: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    return this.usersService.createUser(createUserDto);
  }
}
