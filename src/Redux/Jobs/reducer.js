import * as types from "./types";
const initialState = {
  loading: false,
  error: false,
  jobs: [],
  singleJob: {},
  savedJobs: [],
  allSavedJobs: [],
  allApplyJobs: [],
  applyJobs: [],
};

export const jobReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_JOBS_REQUEST: {
      return { ...state, loading: true };
    }
    case types.GET_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        jobs: payload,
      };
    }
    case types.GET_SAVE_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        allSavedJobs: payload,
      };
    }
    case types.GET_APPLY_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        allApplyJobs: payload,
      };
    }
    case types.GET_SINGLE_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        singleJob: payload,
      };
    }
    case types.SAVE_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        savedJobs: [...state.savedJobs, payload],
      };
    }
    case types.APPLY_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        savedJobs: [...state.applyJobs, payload],
      };
    }
    case types.GET_JOBS_FAILURE: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};
