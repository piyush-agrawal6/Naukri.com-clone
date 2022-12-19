import * as types from "./actionTypesRegister";
import axios from "axios";

export const registerAPI = (creds) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  axios
    .post("https://639c349842e3ad69272a42e5.mockapi.io/Users", creds)
    .then((r) => {
      dispatch({ type: types.REGISTER_SUCCESS });
    })
    .catch((e) => dispatch({ type: types.REGISTER_FAILURE }));
};

export const editUser = (creds) => (dispatch) => {
  dispatch({ type: types.EDIT_REQUEST });
  axios
    .put(`https://639c349842e3ad69272a42e5.mockapi.io/Users/${creds.id}`, creds)
    .then((r) => {
      dispatch({ type: types.EDIT_SUCCESS });
      localStorage.setItem("User", JSON.stringify(r.data));
    })
    .catch((e) => dispatch({ type: types.EDIT_FAILURE }));
};
export const editRole = (creds) => (dispatch) => {
  axios
    .put(`https://639c349842e3ad69272a42e5.mockapi.io/Users/${creds.id}`, creds)
    .then((r) => {
      dispatch({ type: types.EDIT_ROLE_SUCCESS });
      console.log(r.data);
      localStorage.setItem("User", JSON.stringify(r.data));
    })
    .catch((e) => console.log(e));
};
export const deleteUsers = (id) => (dispatch) => {
  axios
    .delete(`https://639c349842e3ad69272a42e5.mockapi.io/Users/${id}`)
    .then((r) => console.log("user deleted"))
    .catch((e) => console.log(e));
};

export const getUsers = () => (dispatch) => {
  axios
    .get("https://639c349842e3ad69272a42e5.mockapi.io/Users")
    .then((r) => dispatch({ type: types.GET_USER_SUCCESS, payload: r.data }))
    .catch((e) => console.log(e));
};
export const loginUser = () => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_SUCCESS });
};
export const logoutUser = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_USER_SUCCESS });
};
