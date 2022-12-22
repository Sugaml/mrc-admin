import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  userDetail: null,
  isUserDetail:false
};

function UserDetail(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USER_DETAIL:
      return {
        ...state,
        isUserDetail: true,
      };
    case types.GET_USER_DETAIL_SUCCESS:
        console.log('testing === ', payload)
      return {
        ...state,
        userDetail:payload,
        isUserDetail: true,
      }
    default:
      return UserDetail;
  }
}

export default UserDetail;