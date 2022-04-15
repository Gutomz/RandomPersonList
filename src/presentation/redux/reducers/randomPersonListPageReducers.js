import { RandomPersonListPageActions } from '../actions';

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RandomPersonListPageActions.ACTION_SAVE_RANDOM_PERSON_LIST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export const getRandomPersonsList = (state) => state.randomPersonListPageState 
  && state.randomPersonListPageState.data;
