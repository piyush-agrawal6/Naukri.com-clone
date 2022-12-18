import * as types from "./actionTypesRegister";
const initialState = {
  loading: false,
  error: false,
  isReg: false,
};

export const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.REGISTER_REQUEST: {
      return { ...state, loading: true };
    }
    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        isReg: true,
      };
    }
    case types.REGISTER_FAILURE: {
      return { ...state, loading: false, error: true, isReg: false };
    }
    default: {
      return state;
    }
  }
};
