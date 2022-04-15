import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import LoadingReducers from './reducers/loading';
import RandomPersonListPageReducers from './reducers/randomPersonListPageReducers';

export default () => {
  const store = createStore(
    combineReducers({
      randomPersonListPageState: RandomPersonListPageReducers,
      loadingState: LoadingReducers,
    }),

    compose(applyMiddleware(thunk))
  );

  return store;
};
