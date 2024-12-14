
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: 'DATA_LOADING' });
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
      const data = await response.json();
      dispatch({ type: 'DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'DATA_ERROR', payload: error.message });
    }
  };
};
