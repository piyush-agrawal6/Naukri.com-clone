import * as types from "./types";
const initialState = {
  loading: false,
  error: false,
  companies: [],
  singleCompany: {},
};

export const companyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_COMPANY_SUCCESS: {
      return {
        ...state,
        loading: false,
        companies: payload,
      };
    }
    case types.GET_SINGLE_COMPANY_SUCCESS: {
      return {
        ...state,
        loading: false,
        singleCompany: payload,
      };
    }

    case types.GET_COMPANY_FAILURE: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};
