import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const getCountryData = () => action(ActionTypes.GET_COUNTRY_DATA);
export const getCountryDataSuccess = (response: any) => action(ActionTypes.GET_COUNTRY_DATA_SUCCESS, response);
export const getCountryDataFailed = (error: object) => action(ActionTypes.GET_COUNTRY_DATA_FAILED, error);

export const getSearchData = (query: string) => action(ActionTypes.GET_SEARCH_DATA, query);
export const getSearchDataSuccess = (response: any) => action(ActionTypes.GET_SEARCH_DATA_SUCCESS, response);
export const getSearchDataFailed = (error: object) => action(ActionTypes.GET_SEARCH_DATA_FAILED, error);
