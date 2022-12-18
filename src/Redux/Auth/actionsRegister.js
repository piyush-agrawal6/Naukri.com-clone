import * as types from "./actionTypesRegister";
import axios from "axios";

export const registerAPI = (creds) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  localStorage.setItem("User", JSON.stringify(creds));
  axios
    .post("https://639c349842e3ad69272a42e5.mockapi.io/Users", creds)
    .then((r) => dispatch({ type: types.REGISTER_SUCCESS }))
    .catch((e) => dispatch({ type: types.REGISTER_FAILURE }));
};
