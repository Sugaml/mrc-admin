import * as types from "../constant/actionTypes";

const INITIAL_CREATE_COURSE_INFO_STATE = {
  createCourse: null,
  isCourseCreated: false,
};

function CreateCourse(state = INITIAL_CREATE_COURSE_INFO_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_COURSE_INFO:
      console.log("data",payload)
      return {
        ...state,
        isCourseCreated: true
      };
      case types.CREATE_COURSE_SUCCESS:
        return {
          ...state,
          createCourse: payload,
          isCourseCreated: false
        };
      case types.CREATE_COURSE_FAILURE:
        return {
          ...state,
          isCourseCreated: false,
        };
    default:
      return state;
  }
}

export default CreateCourse;