// A reducer ow we specify the application's state changes in response to certain actions to our context

export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    default:
      return state;
  }
}