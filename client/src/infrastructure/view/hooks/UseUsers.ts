import { useContext } from 'react';
import { UserStateContext } from '../store/user/userContext';

export const UseUser = () => {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('NONE');
  }
  return context;
};
