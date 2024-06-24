import { ErrorTypes, ResponseStatus } from "../libs/error-codes";

export class NotFoundError extends Error {
  constructor(message: string, cause: ErrorTypes) {
    super(message, { cause });
  }

  status = ResponseStatus.NOT_FOUND;
}

export class AuthError extends Error {
  constructor(message: string, cause: ErrorTypes) {
    super(message, { cause });
  }

  status = ResponseStatus.AUTH_ERROR;
}

export const TenantNotFoundError = () => {
  return new NotFoundError('Tenant not found', ErrorTypes.TENANT_NOT_FOUND);
};

export const UserNotFoundError = () => {
  return new AuthError('User not found', ErrorTypes.USER_NOT_FOUND);
};

export const InvalidCredentialsError = () => {
  return new AuthError('Invalid credentials', ErrorTypes.INVALID_CREDENTIALS);
};