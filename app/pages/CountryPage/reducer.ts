import { CountryPageManagementState, CountryPageManagementActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: CountryPageManagementState = {
  loading: false,
  data: [],
  error: ''
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(
  state: CountryPageManagementState = initialState,
  action: CountryPageManagementActions
): CountryPageManagementState {
  switch (action.type) {
    case ActionTypes.GET_SINGLE_DATA:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.GET_SINGLE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case ActionTypes.GET_SINGLE_DATA_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export default appReducer;
