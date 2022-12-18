import * as types from "./types";
const initialState = {
  loading: false,
  error: false,
  jobs: [],
  singleJob: {},
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
    case types.GET_SINGLE_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        singleJob: payload,
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
