import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as WidgetActions from './widget.actions';
import { Widget } from '../shared/types/widget.type';

export const widgetsFeatureKey = 'widgets';

export interface State extends EntityState<Widget> {
  // additional entities state properties
  loaded: boolean;
}

export const adapter: EntityAdapter<Widget> = createEntityAdapter<Widget>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loaded: false
});

export const reducer = createReducer(
  initialState,
  on(WidgetActions.addWidgetSuccess,
    (state, action) => adapter.addOne(action.widget, state)
  ),
  on(WidgetActions.upsertWidget,
    (state, action) => adapter.upsertOne(action.widget, state)
  ),
  on(WidgetActions.addWidgets,
    (state, action) => adapter.addMany(action.widgets, state)
  ),
  on(WidgetActions.upsertWidgets,
    (state, action) => adapter.upsertMany(action.widgets, state)
  ),
  on(WidgetActions.updateWidget,
    (state, action) => adapter.updateOne(action.widget, state)
  ),
  on(WidgetActions.updateWidgets,
    (state, action) => adapter.updateMany(action.widgets, state)
  ),
  on(WidgetActions.deleteWidgetSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(WidgetActions.deleteWidgets,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(WidgetActions.loadWidgetsSuccess,
    // (state, action) => adapter.setAll(action.widgets, state)
    (state, action) => adapter.setAll(action.widgets, {...state, loaded: true})
  ),
  on(WidgetActions.clearWidgets,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
