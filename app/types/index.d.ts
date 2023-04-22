import { Reducer, Store } from 'redux';
import { Saga } from '@redux-saga/types';
import { RouterState } from 'connected-react-router';
import { HomeManagementState as HomeState } from 'pages/HomeManagement/types';
import { CountryPageManagementState as CountryState } from 'pages/CountryPage/types';

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: Saga | (() => IterableIterator<any>) | undefined, args: any | undefined): any;
}
export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: () => IterableIterator<any>;
  mode?: string | undefined;
}

export interface RequestSagaParams {
  type: string;
  payload: any;
  meta?: any;
  error?: any;
}

export interface DropdownOption {
  label: string;
  value: string;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  readonly home: HomeState;
  readonly country: CountryState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly

  // for testing purposes
  readonly test: any;
}

export declare interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

export { InteractiveElementProps, NavigationElementProps, AnchorElementProps } from './interactive-element';
export { Omit } from './omit';
