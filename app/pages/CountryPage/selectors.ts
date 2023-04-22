/**
 * The app state selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

import { initialState } from './reducer';

const selectApp = (state: ApplicationRootState) => state.country || initialState;

const makeSelectLoading = () => createSelector(selectApp, substate => substate.loading);
const makeSelectData = () => createSelector(selectApp, substate => substate.data);

export { makeSelectLoading, makeSelectData };
