import { useAsyncReducer } from 'infrastructure/view/hooks';
import * as React from 'react';
import { userReducer } from './userReducer';
import { Dispatch, ProviderProps, State } from '../types/storeTypes';

export const UserStateContext = React.createContext<
  { state: State<any>; dispatch: Dispatch } | undefined
>(undefined);

const initialState: State<any> = {
  catalog: [],
};

function UserProvider({ children }: ProviderProps) {
  const [state, dispatch] = useAsyncReducer(userReducer, initialState);
  const value = { state, dispatch };
  return (
    <UserStateContext.Provider value={value}>
      {children}
    </UserStateContext.Provider>
  );
}

export { UserProvider };
