import { Action, State } from '../types/storeTypes';
import { Cooperator } from '../../../../domain/cooperator/cooperator';

export async function cooperatorReducer(
  state: State<Cooperator>,
  action: Action,
) {
  switch (action.type) {
    case 'display-list-cooperators': {
      return { catalog: action.payload };
    }
    case 'update-cooperator': {
      const cooperator = state.catalog.find(
        data => data.id === action.payload.id,
      );
      const indexOfCooperator = state.catalog.indexOf(cooperator!);
      state.catalog.splice(indexOfCooperator, 1, action.payload);

      return { catalog: [state.catalog] };
    }
    case 'add-cooperator': {
      state.catalog.push(action.payload);
      return { catalog: [state.catalog] };
    }
    case 'delete-cooperator': {
      const newCatalog = state.catalog.filter(catalog => {
        return catalog.id !== action.payload;
      });

      return { catalog: newCatalog };
    }
    case 'filtre-cooperator': {
      return { catalog: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}
