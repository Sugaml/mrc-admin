import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  students: null,
  isStudents: false
};

export const ListStudent = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LIST_STUDENT:
      return {
        ...state,
        isStudents: true,
      };
    case types.LIST_STUDENT_SUCCESS:
      return {
        ...state,
        students: payload,
        isStudents: false,
      }
    case types.LIST_STUDENT_FAILURE:
      return {
        ...state,
        isStudents: false,
      };
    default:
      return state;
  }
}

export default ListStudent;