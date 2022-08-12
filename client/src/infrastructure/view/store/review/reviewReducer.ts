import { Review } from 'domain/review/review';
import { Action, State } from '../types/storeTypes';

export async function reviewReducer(state: State<Review>, action: Action) {
  switch (action.type) {
    case 'display-list-review': {
      return { catalog: action.payload };
    }
    case 'update-review': {
      const review = state.catalog.find(data => data.id === action.payload.id);
      const indexOfReview = state.catalog.indexOf(review!);
      state.catalog.splice(indexOfReview, 1, action.payload);

      return { catalog: [state.catalog] };
    }
    case 'delete-review': {
      const newCatalog = state.catalog.filter(catalog => {
        return catalog.id !== action.payload;
      });

      return { catalog: newCatalog };
    }
    case 'add-review': {
      state.catalog.push(action.payload);
      return { catalog: state.catalog };
    }
    case 'filtre-review': {
      return { catalog: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}
