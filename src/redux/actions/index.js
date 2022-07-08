import API from "../../utils/callAPI";

const FETCH_LIST_BOOK_LINK = "/books/v1/volumes?q=reactjs";
export const fetchListRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};
export const fetchListSuccess = (data) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: data,
  };
};
export const fetchListError = (error) => {
  return {
    type: "FETCH_USER_ERROR",
    payload: error,
  };
};
export const searchFilter = (text) => {
  return {
    type: "SEARCH_BOOK",
    payload: text,
  };
};

export const fetchListAPI = () => {
  return async function (dispatch) {
    dispatch(fetchListRequest());
    try {
      const response = await API.get(FETCH_LIST_BOOK_LINK);
      const data = response && response.data ? response.data.items : [];
      dispatch(fetchListSuccess(data));
    } catch (error) {
      dispatch(fetchListError(error));
    }
  };
};
