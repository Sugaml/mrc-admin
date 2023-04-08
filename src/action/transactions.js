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
      if (response.data || response.status === 200){
        console.log("transactions response :: ",response)
        await dispatch(listTransactionSuccess(response.data));
        ToastConfig.success("Successfully list transactions")
      }
      else{
        dispatch(listTransactionFailure());
        ToastConfig.error("Failed to load transactions")
      }
    } catch (error) {
      await dispatch(listTransactionFailure());
      ToastConfig.error(error.response.data.error)
    }
  };