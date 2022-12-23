import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  users: null,
  isUsers:false
};

function GetUsers(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.LIST_USER:
      return {
        ...state,
        isUsers: true,
      };
    case types.LIST_USER_SUCCESS:
      return {
        ...state,
        users:payload,
        isUsers: false,
      }
      case types.LIST_USER_FAILURE:
        return {
          ...state,
          isUsers: false,
        };
    default:
      return state;
  }
}

export default GetUsers;