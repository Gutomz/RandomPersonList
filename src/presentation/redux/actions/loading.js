export const ACTION_ADD_LOADING = 'loading:ACTION_ADD_LOADING';
export const ACTION_REMOVE_LOADING = 'loading:ACTION_REMOVE_LOADING';

export const addLoading = () => ({
  type: ACTION_ADD_LOADING,
});

export const removeLoading = () => ({
  type: ACTION_REMOVE_LOADING,
});
