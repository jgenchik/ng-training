import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { Widget } from '../shared/types/widget.type';
import { WidgetsService } from '../shared/widgets.service';

import { addWidget, addWidgetSuccess } from './widget.actions';



@Injectable()
export class WidgetsEffects {


  addWidget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addWidget),
      exhaustMap(action => this.widgetsService.addOne(action.widget).pipe(
        map(widget => addWidgetSuccess({widget}))
      ))
    )
  );


  constructor(private actions$: Actions, private widgetsService: WidgetsService) {}

}
