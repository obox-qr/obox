import ApiService from '../index';
import Paths from '../paths';

export async function getUser() {
  const res = await ApiService.getAuthApi().fetchUser(Paths.USER);
  return res.data;
}
