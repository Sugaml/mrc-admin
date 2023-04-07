import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getListCourses,getCourse, postCourse, deleteCourseByID } from "../services/course";


const getCourses = () => ({
  type: types.GETCOURSES,
});

const getCoursesSuccess = (data) => ({
    type: types.GETCOURSESSUCCESS,
    payload: data
  });

  const getCoursesFailure = () => ({
    type: types.GETCOURSESFAILURE,
  });

export const getAllCourses= () => async (dispatch) => {
  try {
    dispatch(getCourses());
    const response = await getListCourses("", "courses");
    if (response){
      console.log("respone course ::",response.data)
    await dispatch(getCoursesSuccess(response.data));
    ToastConfig.success("Successfully get courses.")
    }else{
      dispatch(getCoursesFailure());
      ToastConfig.error("Filed to load courses")
    }
  } catch (error) {
    console.log("error in fetch all courses",error);
    dispatch(getCoursesFailure());
    ToastConfig.error(error.message)
  }
};

const getCurrentCourses = () => ({
  type: types.GET_CURRENT_COURSE,
});

const getCurrentCoursesSuccess = (data) => ({
    type: types.GET_CURRENT_COURSE_SUCCESS,
    payload: data
  });

  const getCurrentCoursesFailure = () => ({
    type: types.GET_CURRENT_COURSE_FAILURE,
  });

export const getCurrentCourse= (token,id) => async (dispatch) => {
  try {
    dispatch(getCurrentCourses());
    const response = await getCourse(token,"course/"+id);
    if (response){
      console.log("respone course ::",response.data)
    await dispatch(getCurrentCoursesSuccess(response.data));
    ToastConfig.success("Successfully select "+response.data.name +" course")
    }else{
      dispatch(getCurrentCoursesFailure());
      ToastConfig.error("Filed to load course")
    }
  } catch (error) {
    console.log("error in fetch all course",error);
    dispatch(getCurrentCoursesFailure());
    ToastConfig.error(error.message)
  }
};

const createCourseInfo = () => ({
  type: types.CREATE_COURSE_INFO,
});

const createCourseSuccess = (response) => ({
  type: types.CREATE_COURSE_SUCCESS,
  payload: response,
});

const createCourseFailure = () => ({
  type: types.CREATE_COURSE_FAILURE,
});

export const creatCourse= (token,courseData) => async (dispatch) => {
  try{
    dispatch(createCourseInfo);
    const response = await postCourse(token,courseData, "course");
    if (response){
      dispatch(createCourseSuccess(response));
      ToastConfig.success("Successfully added course.")
      dispatch(getAllCourses())
    }else{
      dispatch(createCourseFailure());
      ToastConfig.error("Filed to add course.")
    }
  }
  catch (error) {
      console.log("error add course",error);
      dispatch(createCourseFailure());
      ToastConfig.error(error.error)
    }
};

const deleteCourseInfo = () => ({
  type: types.DELETE_COURSE_INFO,
});

const deleteCourseSuccess = (response) => ({
  type: types.DELETE_COURSE_SUCCESS,
  payload: response,
});

const deleteCourseFailure = () => ({
  type: types.DELETE_COURSE_FAILURE,
});

export const deleteCourse= (token,cid) => async (dispatch) => {
  try{
    dispatch(deleteCourseInfo);
    const response = await deleteCourseByID(token, "course/"+cid.toString());
    if (response){
      dispatch(deleteCourseSuccess(response));
      dispatch(getAllCourses())
      ToastConfig.success("Successfully deleted course.")
    }else{
      dispatch(deleteCourseFailure());
      ToastConfig.error("Delete to add course.")
    }
  }
  catch (error) {
      console.log("error delete course",error);
      dispatch(deleteCourseFailure());
      ToastConfig.error(error.response.error)
    }
};


