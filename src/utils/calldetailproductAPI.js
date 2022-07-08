import API from "./callAPI";

const productApi = {
  get(id) {
    const url = `/books/v1/volumes?q=reactjs/${id}`;
    return API.get(url);
  },
};
export default productApi;
