import { HomeManagementState, HomeManagementActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: HomeManagementState = {
  loading: false,
  data: [],
  error: ''
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(state: HomeManagementState = initialState, action: HomeManagementActions): HomeManagementState {
  switch (action.type) {
    case ActionTypes.GET_COUNTRY_DATA:
    case ActionTypes.GET_SEARCH_DATA:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.GET_COUNTRY_DATA_SUCCESS:
    case ActionTypes.GET_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case ActionTypes.GET_COUNTRY_DATA_FAILED:
    case ActionTypes.GET_SEARCH_DATA_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export default appReducer;
