export enum ErrorType {
  BAD_REQUEST = 'BAD_REQUEST',
  EMAIL_TAKEN = 'EMAIL_TAKEN',
  WEAK_PASSWORD = 'WEAK_PASSWORD',
}

const errorMessages = {
  [ErrorType.EMAIL_TAKEN]: 'Email already taken',
  [ErrorType.BAD_REQUEST]: 'Validation failed. Please check your credentials',
};

const computedErrorMessages = {
  [ErrorType.WEAK_PASSWORD]: (params: {
    minLength;
    minUppercase;
    minNumbers;
    minSymbols;
  }) =>
    `Password must be at least ${params.minLength} characters long, contain at least ${params.minUppercase} uppercase letters, ${params.minNumbers} numbers, and ${params.minSymbols} symbols`,
};

export const getErrorMessageByType = (
  type: keyof typeof errorMessages,
): string => {
  return errorMessages[type];
};

export const getComputedErrorMessageByType = (type: keyof typeof computedErrorMessages): (params) => string => {
  return computedErrorMessages[type];
};
