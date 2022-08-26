import { User } from 'domain/user/user';
import { Action, State } from '../types/storeTypes';

export async function userReducer(state: State<User>, action: Action) {
  switch (action.type) {
    case 'display-list-users': {
      return { catalog: action.payload };
    }
    case 'update-user': {
      const user = state.catalog.find(data => data.id === action.payload.id);
      const indexOfUser = state.catalog.indexOf(user!);
      state.catalog.splice(indexOfUser, 1, action.payload);
      return { catalog: [state.catalog] };
    }
    case 'getOneUser': {
      const user = state.catalog.find(data => data.id === action.payload.id);
      return user;
    }
    case 'delete-user': {
      const newCatalog = state.catalog.pop();
      return { catalog: newCatalog };
    }
    case 'login': {
      return { user: action.payload, isLogged: true };
    }
    case 'logout': {
      return { user: null, isLogged: false };
    }
    case 'filtre-user': {
      return { catalog: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}
