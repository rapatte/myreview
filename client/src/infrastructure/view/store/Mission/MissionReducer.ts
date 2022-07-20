import { Mission } from 'domain/mission/mission';
import { Action, State } from '../types/storeTypes';

export async function missionReducer(state: State<Mission>, action: Action) {
  switch (action.type) {
    case 'display-list-missions': {
      return { catalog: action.payload };
    }
    // case 'update-status-mission': {
    //   const indexOfUpdatedMission = state.catalog.findIndex(
    //     mission => mission.id !== action.payload.id,
    //   );
    //   const updatedArrayOfMissions = [...state.catalog];
    //   updatedArrayOfMissions[indexOfUpdatedMission] = action.payload;
    //   return { catalog: updatedArrayOfMissions };
    // }

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
