const initalState = {
  list: [],
  loadingList: false,
  filter: {
    search: "",
  },
};
const BookReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        loadingList: true,
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        list: action.payload,
        loadingList: false,
      };
    case "FETCH_USER_ERROR":
      return {
        ...state,
        loadingList: false,
      };
    case "SEARCH_BOOK":
      // console.log(">>check search: ", action);
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};
export default BookReducer;
