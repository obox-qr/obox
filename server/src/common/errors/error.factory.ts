import { BadRequestException, ConflictException } from '@nestjs/common';

import {
  ErrorType,
  getComputedErrorMessageByType,
  getErrorMessageByType,
} from './error.types';

export const getEmailAlreadyTakenError = () => {
  return new ConflictException(getErrorMessageByType(ErrorType.EMAIL_TAKEN));
};

export const getWeakPasswordError = (params) => {
  return new BadRequestException(getComputedErrorMessageByType(ErrorType.WEAK_PASSWORD)(params));
};
