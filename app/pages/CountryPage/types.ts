import { ActionType } from 'typesafe-actions';
import { ApplicationRootState } from 'types';

import * as actions from './actions';
/* --- STATE --- */
interface CountryPageState {
  readonly loading: boolean;
  readonly data: ICountry[];
  readonly error: string;
}

export interface ICountry {
  name: { common: string };
  cca3: string;
  region: string;
  flags: { png: string; alt?: string };
  capital: string[];
  population: number;
  languages: { [key: string]: string };
  currencies: { [key: string]: { name: string; symbol: string } };
  continents: string[];
  maps: { googleMaps: string };
}

/* --- ACTIONS --- */
type CountryPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type CountryPageManagementState = CountryPageState;
type CountryPageManagementActions = CountryPageActions;

export { RootState, CountryPageManagementState, CountryPageManagementActions };
