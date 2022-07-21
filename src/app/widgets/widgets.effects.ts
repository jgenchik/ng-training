import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, exhaustMap, filter, map, mergeMap } from 'rxjs';
import { selectWidgetsLoaded, State } from '../reducers';
import { Widget } from '../shared/types/widget.type';
import { WidgetsService } from '../shared/widgets.service';

import { addWidget, addWidgetSuccess, loadWidgets, loadWidgetsLazy, loadWidgetsSuccess } from './widget.actions';



@Injectable()
export class WidgetsEffects {


  loadWidgets$ = createEffect(() => this.actions$.pipe(
    ofType(loadWidgets),
    mergeMap(() => this.widgetsService.getAll().pipe(
      map(widgets => loadWidgetsSuccess({widgets})),
      catchError(() => EMPTY)
    ))
  ));

  loadWidgetsLazy$ = createEffect(() => this.actions$.pipe(
    ofType(loadWidgetsLazy),
    concatLatestFrom(action => this.store.select(selectWidgetsLoaded)),
    filter(([action, loaded]) => !loaded),
    mergeMap(() => this.widgetsService.getAll().pipe(
      map(widgets => loadWidgetsSuccess({widgets})),
      catchError(() => EMPTY)
    ))
  ));


  addWidget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addWidget),
      mergeMap(action => this.widgetsService.addOne(action.widget).pipe(
        map(widget => addWidgetSuccess({widget})),
        catchError(() => EMPTY)
      ))
    )
  );


  constructor(private actions$: Actions, private store: Store<State>, private widgetsService: WidgetsService) {}

}
