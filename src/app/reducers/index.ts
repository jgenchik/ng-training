import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Widget } from '../shared/types/widget.type';
import * as fromWidget from '../widgets/widget.reducer';


export interface State {

  [fromWidget.widgetsFeatureKey]: fromWidget.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromWidget.widgetsFeatureKey]: fromWidget.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectWidgetsState = createFeatureSelector<fromWidget.State>(fromWidget.widgetsFeatureKey);

export const selectWidgetEntities = createSelector(
  selectWidgetsState,
  fromWidget.selectEntities
);

export const selectWidgetsAll = createSelector(
  selectWidgetsState,
  fromWidget.selectAll
);

export const selectWidgetsByColor = (color: string) => createSelector(
  selectWidgetsAll,
  (widgets: Widget[]) => {
    return widgets.filter(widget => widget.color == color);
  }
);

export const selectWidgetsLoaded = createSelector(
  selectWidgetsState,
  widgetsState => widgetsState.loaded
);

