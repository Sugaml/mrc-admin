import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getStudents, postStuInfo, updateStudentStatus } from "../services/student";


const stuInfo = () => ({
  type: types.STUDENT_INFO,
});

const stuInfoSuccess = (response) => ({
  type: types.STUDENT_INFO_SUCCESS,
  payload: response,
});

const stuInfoFailure = () => ({
  type: types.STUDENT_INFO_FAILURE,
});


export const studentInfoAction= (token,studentInfoData) => async (dispatch) => {
  try{
    dispatch(stuInfo());
    const response = await postStuInfo(token,studentInfoData, "student_info");
    if (response){
      dispatch(stuInfoSuccess(response));
      ToastConfig.success("Successfully added student information.")
    }else{
      dispatch(stuInfoFailure());
      ToastConfig.error("Filed to load student information.")
    }
  }
  catch (error) {
      console.log("error in sign up",error);
      dispatch(stuInfoFailure());
      ToastConfig.error(error.error)
    }
};

const listStudent = () => ({
  type: types.LIST_STUDENT,
});

const listtStudentSuccess = (response) => ({
    type: types.LIST_STUDENT_SUCCESS,
    payload: response
  });

  const listStudentFailure = () => ({
    type: types.LIST_STUDENT_FAILURE,
  });

export const listStudentAction= (token) => async (dispatch) => {
  try {
    dispatch(listStudent());
    const response = await getStudents(token, "students");
    if (response){
      console.log("users",response.data)
      await dispatch(listtStudentSuccess(response.data));
      ToastConfig.success("Successfully list user")
    }else{
      dispatch(listStudentFailure());
      ToastConfig.error("Filed to load user")
    }
    
  } catch (error) {
    console.log("error in fetch user",error);
    dispatch(listStudentFailure());
    ToastConfig.error(error.message)
  }
};


const studentStatus = () => ({
  type: types.STATUS_STUDENT,
});

const studentStatusSuccess = (response) => ({
  type: types.STATUS_STUDENT_SUCCESS,
  payload: response,
});

const studentStatusFailure = () => ({
  type: types.STATUS_STUDENT_FAILURE,
});


export const studentStatusAction= (token,sid,statusData) => async (dispatch) => {
  try{
    dispatch(studentStatus());
    const response = await updateStudentStatus(token, "student/"+sid+"/status",statusData);
    if (response){
      dispatch(studentStatusSuccess(response));
      ToastConfig.success("Successfully added student information.")
    }else{
      dispatch(studentStatusFailure());
      ToastConfig.error("Filed to load student information.")
    }
  }
  catch (error) {
      console.log("error in sign up",error);
      dispatch(stuInfoFailure());
      ToastConfig.error(error.error)
    }
};