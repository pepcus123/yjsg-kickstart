const testReducer = (state = {
  showTestButton: false,
}, action) => {
  switch (action.type) {
    case 'SHOW_TEST_BUTTON':
      return {
        ...state,
        showTestButton: true,
      };
    case 'HIDE_TEST_BUTTON':
      return {
        ...state,
        showTestButton: false,
      };
    case 'SET_TEST_API_RESPONSE':
      return {
        ...state,
        testAPIResponse: action.respData,
      };
    default:
      return state;
  }
};

export default testReducer;

const getShowTestButton = (state) => state.testReducer.showTestButton;
const getTestAPIResponse = (state) => state.testReducer.testAPIResponse;

export const selectors = {
  getShowTestButton,
  getTestAPIResponse,
};
