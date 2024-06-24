import { sign, verify } from 'jsonwebtoken';
import { Config } from '../config';

export type JWTData = {
  userId: string;
}

export const createJwt = (data: JWTData) => {
  return sign(data, Config.jwtSecret);
}