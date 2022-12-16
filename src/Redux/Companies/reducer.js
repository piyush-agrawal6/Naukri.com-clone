const initialState = {
  companies:[]
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPANY_LIST":
      return {
        companies:action.payload
      };
    default:
      return state;
  }
};
