import RandomPersonApi from '../../../api/randomPersonAPI';
import { RandomPersonListPageSelectors } from '../reducers';
import { addLoading, removeLoading } from './loading';

export const ACTION_SAVE_RANDOM_PERSON_LIST = 
  'randomPersonListPage:ACTION_SAVE_RANDOM_PERSON_LIST';

export const saveRandomPersonData = (data) => ({
  type: ACTION_SAVE_RANDOM_PERSON_LIST,
  payload: data,
});

export const loadRandomPersonList = (params) => 
      async (dispatch, getState) => {
  dispatch(addLoading());
  try {
    const queryParams = { results: params.results };
    const { results } = await RandomPersonApi.getRandomPerson(queryParams);
    await new Promise(resolve => setTimeout(resolve, 2000));
    let data = RandomPersonListPageSelectors.getRandomPersonsList(getState());
    dispatch(saveRandomPersonData([...data, ...results]));
  } catch (e) {
    throw new Error(e.message);
  } finally {
    dispatch(removeLoading());
  }
};
