import { combineReducers } from "redux";
import Auth from "./reducer/auth";
import Signup from "./reducer/signup";
import StudentInfo from "./reducer/student_info";
import PaymentInitiateInfo from "./reducer/payment_initiate";
import PaymentVerifyInfo from "./reducer/payment_verify";
import StudentAddressInfo from "./reducer/student_address";
import StudentEducationInfo from "./reducer/student_education";
import StudentFileInfo from "./reducer/student_file";
import Courses from "./reducer/courses";
import StudentGeneral from "./reducer/student_general";
import UserInfo from "./reducer/user";
import CurrentCourse from "./reducer/current_course";
import CurrentAddress from "./reducer/current_address";
import GetUsers from "./reducer/list_user";
import GetTransactions from "./reducer/transaction"
import UserDetail from "./reducer/user_details"

const rootReducer = combineReducers({
  auth: Auth,
  signup: Signup,
  StudentInfo: StudentInfo,
  StudentAddressInfo:StudentAddressInfo,
  StudentEducationInfo:StudentEducationInfo,
  StudentFileInfo:StudentFileInfo,
  PaymentInitiateInfo:PaymentInitiateInfo,
  PaymentVerifyInfo:PaymentVerifyInfo,
  Courses:Courses,
  CurrentCourse:CurrentCourse,
  CurrentAddress:CurrentAddress,
  StudentGeneral:StudentGeneral,
  UserInfo:UserInfo,
  Users:GetUsers,
  UserDetail:UserDetail,
  Transactions:GetTransactions,
});

export default rootReducer;