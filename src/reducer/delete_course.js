import * as types from "../constant/actionTypes";

const INITIAL_DELETE_COURSE_INFO_STATE = {
  isCourseDeleted: false,
};

function DeleteCourse(state = INITIAL_DELETE_COURSE_INFO_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.DELETE_COURSE_INFO:
      console.log("data",payload)
      return {
        ...state,
        isCourseCreated: true
      };
      case types.DELETE_COURSE_SUCCESS:
        return {
          ...state,
         isCourseDeleted: false
        };
      case types.DELETE_COURSE_FAILURE:
        return {
          ...state,
          isCourseDeleted: false,
        };
    default:
      return state;
  }
}

export default DeleteCourse;