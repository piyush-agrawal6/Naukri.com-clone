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

export const savedJobs = (payload) => (dispatch) => {
  dispatch({ type: types.SAVE_JOBS_REQUEST });
  axios
    .post("https://639c349842e3ad69272a42e5.mockapi.io/savedJobs", payload)
    .then((r) => dispatch({ type: types.SAVE_JOBS_SUCCESS, payload }))
    .catch((e) => dispatch({ type: types.SAVE_JOBS_FAILURE }));
};
export const allSavedJobs = () => (dispatch) => {
  axios
    .get("https://639c349842e3ad69272a42e5.mockapi.io/savedJobs")
    .then((r) =>
      dispatch({ type: types.GET_SAVE_JOBS_SUCCESS, payload: r.data })
    )
    .catch((e) => console.log(e));
};
export const allApplyJobs = () => (dispatch) => {
  axios
    .get("https://639c349842e3ad69272a42e5.mockapi.io/applications")
    .then((r) =>
      dispatch({ type: types.GET_APPLY_JOBS_SUCCESS, payload: r.data })
    )
    .catch((e) => console.log(e));
};
export const applyJob = (payload) => (dispatch) => {
  dispatch({ type: types.APPLY_JOBS_REQUEST });
  axios
    .post("https://639c349842e3ad69272a42e5.mockapi.io/applications", payload)
    .then((r) => dispatch({ type: types.APPLY_JOBS_SUCCESS, payload }))
    .catch((e) => dispatch({ type: types.APPLY_JOBS_FAILURE }));
};
