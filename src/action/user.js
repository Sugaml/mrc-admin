import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getStudentGeneral,getUser, getUsers,getUserByID} from "../services/user";


const getStudentGeneralInfo = () => ({
  type: types.GET_STUDENT_GENERAL,
});

const getStudentInfoSuccess = (response) => ({
    type: types.GET_STUDENT_GENERAL_SUCCESS,
    payload: response
  });

  const getStudentInfoFailure = () => ({
    type: types.GET_STUDENT_GENERAL_FAILURE,
  });

export const getStudentGeneralAction= (token) => async (dispatch) => {
  try {
    dispatch(getStudentGeneralInfo());
    const response = await getStudentGeneral(token, "student/general-info");
    if (response){
      console.log("general info",response.data)
      await dispatch(getStudentInfoSuccess(response.data));
      ToastConfig.success("Successfully get student general.")
    }else{
      dispatch(getStudentInfoFailure());
      ToastConfig.error("Filed to load student general.")
    }
    
  } catch (error) {
    console.log("error in fetch student info",error);
    dispatch(getStudentInfoFailure());
    ToastConfig.error(error.message)
  }
};

const getUserInfo = () => ({
  type: types.GETUSER,
});

const getUserSuccess = (response) => ({
    type: types.GETUSERSUCCESS,
    payload: response
  });

  const getUserFailure = () => ({
    type: types.GETUSERFAILURE,
  });

export const getUserAction= (token) => async (dispatch) => {
  try {
    dispatch(getUserInfo());
    const response = await getUser(token, "user");
    if (response){
      console.log("general info",response.data)
      await dispatch(getUserSuccess(response.data));
      ToastConfig.success("Successfully get user")
    }else{
      dispatch(getUserFailure());
      ToastConfig.error("Filed to load user")
    }
    
  } catch (error) {
    console.log("error in fetch user",error);
    dispatch(getUserFailure());
    ToastConfig.error(error.message)
  }
};

const listUser = () => ({
  type: types.LIST_USER,
});

const listtUserSuccess = (response) => ({
    type: types.LIST_USER_SUCCESS,
    payload: response
  });

  const listUserFailure = () => ({
    type: types.LIST_USER_FAILURE,
  });

export const listUserAction= (token) => async (dispatch) => {
  try {
    dispatch(listUser());
    const response = await getUsers(token, "users");
    if (response){
      console.log("users",response.data)
      await dispatch(listtUserSuccess(response.data));
      ToastConfig.success("Successfully list user")
    }else{
      dispatch(listUserFailure());
      ToastConfig.error("Filed to load user")
    }
    
  } catch (error) {
    console.log("error in fetch user",error);
    dispatch(listUserFailure());
    ToastConfig.error(error.message)
  }
};

const getUserById = () => ({
  type: types.GET_USER_DETAIL,
});

const getUserByIduccess = (response) => ({
    type: types.GET_USER_DETAIL_SUCCESS,
    payload: response
  });

  const getUserByIdFailure = () => ({
    type: types.GET_USER_DETAIL_FAILURE,
  });

export const getUserByIDAction= (token,id) => async (dispatch) => {
  try {
    dispatch(getUserById());
    const response = await getUserByID(token, "user",id);
    if (response){
      console.log("user details info",response.data)
      await dispatch(getUserByIduccess(response.data));
      ToastConfig.success("Successfully get user")
    }else{
      dispatch(getUserByIdFailure());
      ToastConfig.error("Filed to load user")
    }
    
  } catch (error) {
    console.log("error in fetch user",error);
    dispatch(getUserByIdFailure());
    ToastConfig.error(error.message)
  }
};
