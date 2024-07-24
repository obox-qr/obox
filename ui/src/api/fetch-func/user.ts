import ApiService, { ServicesNames } from '../index';
import { AuthApiInterface } from '../services/auth-api';

export async function getUser() {
  const res = await ApiService.getService<AuthApiInterface>(
    ServicesNames.AUTH
  ).fetchUser();
  return res.data;
}
