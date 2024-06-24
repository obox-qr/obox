export enum ResponseStatus {
  NOT_FOUND = 404,
  AUTH_ERROR = 401,
}

export enum ErrorTypes {
  TENANT_NOT_FOUND = 'tenant_not_found',
  USER_NOT_FOUND = 'user_not_found',
  INVALID_CREDENTIALS = 'invalid_credentials',
}