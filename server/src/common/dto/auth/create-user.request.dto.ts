import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

import { getWeakPasswordError } from '@/common/errors/error.factory';

export const passwordRequirements = {
  minLength: 8,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
};

const weakPasswordError = getWeakPasswordError(passwordRequirements).message;

export class CreateUserRequestDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsStrongPassword(passwordRequirements, { message: weakPasswordError })
  password: string;
}
