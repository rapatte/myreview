import { UseUser } from 'infrastructure/view/hooks/UseUsers';
import { notifyError } from './toastify';

const userContext = UseUser();
export function hasJWT() {
  let flag = false;
  const isLogged = userContext.state.isLogged;
  isLogged ? (flag = true) : (flag = false);
  if (flag === false) notifyError('You must be logged in');
  return flag;
}
