import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  studentStatus: null,
  isStatus:false
};

export const UpdateStudentStatus=(state = INITIAL_STATE, action)=> {
  const { type, payload } = action;
  switch (type) {
    case types.STATUS_STUDENT:
      return {
        ...state,
        isStatus: true,
      };
    case types.STATUS_STUDENT_SUCCESS:
        console.log('testing === ', payload)
      return {
        ...state,
        studentStatus:payload,
        isStatus: true,
      }
    default:
      return state;
  }
}

export default UpdateStudentStatus;