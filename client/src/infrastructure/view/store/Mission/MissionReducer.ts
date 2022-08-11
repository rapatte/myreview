import { Review } from 'domain/mission/mission';
import { Action, State } from '../types/storeTypes';

export async function missionReducer(state: State<Review>, action: Action) {
  switch (action.type) {
    case 'display-list-missions': {
      return { catalog: action.payload };
    }
    case 'update-mission': {
      const mission = state.catalog.find(data => data.id === action.payload.id);
      const indexOfMission = state.catalog.indexOf(mission!);
      state.catalog.splice(indexOfMission, 1, action.payload);

      return { catalog: [state.catalog] };
    }
    case 'delete-mission': {
      const newCatalog = state.catalog.filter(catalog => {
        return catalog.id !== action.payload;
      });

      return { catalog: newCatalog };
    }
    case 'add-mission': {
      state.catalog.push(action.payload);
      return { catalog: state.catalog };
    }
    case 'filtre-mission': {
      return { catalog: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}
