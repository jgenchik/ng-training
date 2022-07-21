import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { NewWidget, Widget } from '../shared/types/widget.type';


export const loadWidgets = createAction(
  '[Widget/API] Load Widgets', 
  // props<{ widgets: Widget[] }>()
);
export const loadWidgetsLazy = createAction(
  '[Widget/API] Load Widgets Lazy'
);
export const loadWidgetsSuccess = createAction(
  '[Widget/API] Load Widgets Success', 
  props<{ widgets: Widget[] }>()
);

export const addWidget = createAction(
  '[Widget/API] Add Widget',
  props<{ widget: NewWidget }>()
);
export const addWidgetSuccess = createAction(
  '[Widget/API] Add Widget Success',
  props<{ widget: Widget }>()
);

export const upsertWidget = createAction(
  '[Widget/API] Upsert Widget',
  props<{ widget: Widget }>()
);

export const addWidgets = createAction(
  '[Widget/API] Add Widgets',
  props<{ widgets: Widget[] }>()
);

export const upsertWidgets = createAction(
  '[Widget/API] Upsert Widgets',
  props<{ widgets: Widget[] }>()
);

export const updateWidget = createAction(
  '[Widget/API] Update Widget',
  props<{ widget: Update<Widget> }>()
);

export const updateWidgets = createAction(
  '[Widget/API] Update Widgets',
  props<{ widgets: Update<Widget>[] }>()
);

export const deleteWidget = createAction(
  '[Widget/API] Delete Widget',
  props<{ id: string }>()
);

export const deleteWidgets = createAction(
  '[Widget/API] Delete Widgets',
  props<{ ids: string[] }>()
);

export const clearWidgets = createAction(
  '[Widget/API] Clear Widgets'
);
