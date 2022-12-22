import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getTransactions } from "../services/payment";

const listTransaction = () => ({
    type: types.LIST_TRANSACTION,
  });
  
  const listTransactionSuccess = (response) => ({
      type: types.LIST_TRANSACTION_SUCCESS,
      payload: response
    });
  
    const listTransactionFailure = () => ({
      type: types.LIST_TRANSACTION_FAILURE,
    });
  
  export const listTransactionAction= (token) => async (dispatch) => {
    try {
      dispatch(listTransaction());
      const response = await getTransactions(token, "payment/transactions");
      if (response){
        console.log("transactions :: ",response.data)
        await dispatch(listTransactionSuccess(response));
        ToastConfig.success("Successfully list transactions")
      }else{
        dispatch(listTransactionFailure());
        ToastConfig.error("Failed to load transactions")
      }
    } catch (error) {
      console.log("error in fetch teansactions",error);
      dispatch(listTransactionFailure());
      ToastConfig.error(error.message)
    }
  };