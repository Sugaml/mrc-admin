import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  courses:[],
  fetchingCourse:false,
  createCourse: null,
  isCourseCreated: false,
  isCourseDeleted: false,
};

function Courses(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GETCOURSES:
      return {
        ...state,
        fetchingCourse: true,
      };
    case types.GETCOURSESSUCCESS:
      console.log("success course :: ",payload)
      return {
        ...state,
        courses:payload,
        fetchingCourse: false,
      }
      case types.GETCOURSESFAILURE:
        return {
          ...state,
          courses:null,
          fetchingCourse: false,
        }
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

export default Courses;