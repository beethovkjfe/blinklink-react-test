import { call, all, takeLatest, put } from 'redux-saga/effects';

import { apiRequestHelper, errorHandlerSaga } from 'utils';

import ActionTypes from './constants';
import * as Actions from './actions';
import * as Endpoints from './endpoints';

export function* getSearchData(data) {
  try {
    const response = yield apiRequestHelper(Endpoints.getSingleData, data.payload);
    yield put(Actions.getCountryDataSuccess(response));
  } catch (err) {
    yield call(errorHandlerSaga, { message: 'Failed to fetch data' }, Actions.getCountryDataFailed);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* callAppSaga() {
  // Watches for corresponding actions and calls the second argument function when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([yield takeLatest(ActionTypes.GET_SINGLE_DATA, getSearchData)]);
}
