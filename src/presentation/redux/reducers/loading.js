import { LoadingActions } from '../actions';

const initialState = 0;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LoadingActions.ACTION_ADD_LOADING:
      return state + 1;
    case LoadingActions.ACTION_REMOVE_LOADING:
      return state - 1 < 0 ? 0 : state - 1;
    default:
      return state;
  }
};

export const isLoading = (state) => state.loadingState && state.loadingState > 0;
