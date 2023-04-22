import { ActionType } from 'typesafe-actions';
import { ApplicationRootState } from 'types';

import * as actions from './actions';
/* --- STATE --- */
interface HomeState {
  readonly loading: boolean;
  readonly data: ICountry[];
  readonly error: string;
}

interface ICountry {
  name: { common: string };
  cca3: string;
  region: string;
  flags: { png: string; alt: string };
}

/* --- ACTIONS --- */
type HomeActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type HomeManagementState = HomeState;
type HomeManagementActions = HomeActions;

export { RootState, HomeManagementState, HomeManagementActions };
