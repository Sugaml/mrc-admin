import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  users: "",
  isUsers:false
};

function GetUsers(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.LIST_USER:
      return {
        ...state,
        isUser: true,
      };
    case types.LIST_USER_SUCCESS:
        console.log('users reducer === ', payload)
      return {
        ...state,
        users:payload,
        isUsers: true,
      }
    default:
      return state;
  }
}

export default GetUsers;