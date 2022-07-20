import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromWidget from '../widgets/widget.reducer';


export interface State {

  [fromWidget.widgetsFeatureKey]: fromWidget.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromWidget.widgetsFeatureKey]: fromWidget.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
