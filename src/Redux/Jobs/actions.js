import * as types from "./types";
import axios from "axios";

export const getJobs = () => (dispatch) => {
  dispatch({ type: types.GET_JOBS_REQUEST });
  axios
    .get("https://639eacf53542a261305f79e4.mockapi.io/jobs")
    .then((r) => dispatch({ type: types.GET_JOBS_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_JOBS_FAILURE }));
};

export const getSingleJobs = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_JOBS_REQUEST });
  axios
    .get(`https://639eacf53542a261305f79e4.mockapi.io/jobs/${id}`)
    .then((r) =>
      dispatch({ type: types.GET_SINGLE_JOBS_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_SINGLE_JOBS_FAILURE }));
};
