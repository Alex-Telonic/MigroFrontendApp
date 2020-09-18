import { userModel } from '@/_services';

export function authHeader() {
  // return authorization header with jwt token
  const currentUser = userModel.currentUserValue;
  if (currentUser && currentUser.token) {
    return { Authorization: `Bearer ${currentUser.token}` };
  }
  return {};
}
