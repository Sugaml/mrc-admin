import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  transactions: null,
  isTransactions:false
};

function GetTransactions(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.LIST_TRANSACTION:
      return {
        ...state,
        isTransactions: true,
      };
    case types.LIST_TRANSACTION_SUCCESS:
        console.log('transactions reducer === ', payload)
      return {
        ...state,
        transactions:payload,
        isTransactions: true,
      }
    default:
      return state;
  }
}

export default GetTransactions;