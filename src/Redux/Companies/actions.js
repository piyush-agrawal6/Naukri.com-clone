import * as types from "./types";
import axios from "axios";

export const getCompany = (filter, params) => (dispatch) => {
  dispatch({ type: types.GET_COMPANY_REQUEST });
  axios
    .get(
      `https://639eacf53542a261305f79e4.mockapi.io/companies?${filter}=${params}`
    )
    .then((r) => dispatch({ type: types.GET_COMPANY_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_COMPANY_FAILURE }));
};

export const getSingleCompany = (id) => (dispatch) => {
  console.log(id);
  dispatch({ type: types.GET_SINGLE_COMPANY_REQUEST });
  axios
    .get(`https://639eacf53542a261305f79e4.mockapi.io/companies/${id}`)
    .then((r) =>
      dispatch({ type: types.GET_SINGLE_COMPANY_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_SINGLE_COMPANY_FAILURE }));
};
