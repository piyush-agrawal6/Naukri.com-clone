import * as types from "./actionTypesRegister";
const initialState = {
  users: [],
  loading: false,
  error: false,
  isReg: false,
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
  userRole: JSON.parse(localStorage.getItem("userRole")) || false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
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
    case types.LOGIN_USER_SUCCESS: {
      localStorage.setItem("isLogin", true);
      return {
        ...state,
        loading: false,
        isLogin: true,
      };
    }
    case types.LOGOUT_USER_SUCCESS: {
      localStorage.setItem("isLogin", false);
      localStorage.setItem("userRole", false);
      localStorage.setItem("User", JSON.stringify({}));
      return {
        ...state,
        loading: false,
        isLogin: false,
      };
    }
    case types.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: payload,
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
