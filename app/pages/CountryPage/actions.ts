import { action } from 'typesafe-actions';

import ActionTypes from './constants';
import { ICountry } from './types';

export const getSingleData = (query: string) => action(ActionTypes.GET_SINGLE_DATA, query);
export const getCountryDataSuccess = (response: ICountry[]) => action(ActionTypes.GET_SINGLE_DATA_SUCCESS, response);
export const getCountryDataFailed = (error: object) => action(ActionTypes.GET_SINGLE_DATA_FAILED, error);
