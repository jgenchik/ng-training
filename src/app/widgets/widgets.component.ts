import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import { State } from '../reducers';
import { NewWidget, Widget } from '../shared/types/widget.type';
import { WidgetsService } from '../shared/widgets.service';
import { addWidget, deleteWidget, loadWidgets, loadWidgetsLazy } from './widget.actions';

import { selectWidgetEntities, selectWidgetsAll, selectWidgetsByColor } from '../reducers';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  widgetForm = this.makeForm();

  widgets$: Observable<Widget[]> = of([]);

  newWidget: NewWidget | undefined;

  showForm = true;

  selectWidgetEntities$: Observable<any> | undefined;
  selectWidgetsAll$: Observable<any> | undefined;
  selectBlueWidgets$: Observable<any> | undefined;

  constructor(private fb: FormBuilder, private store: Store<State>) { }

  ngOnInit(): void {

    // this.widgets$ = this.widgetsService.widgets$;

    this.store.dispatch(loadWidgets());
    // this.store.dispatch(loadWidgetsLazy());

    this.selectWidgetEntities$ = this.store.pipe(select(selectWidgetEntities));
    this.selectWidgetsAll$ = this.store.pipe(select(selectWidgetsAll));
    this.selectBlueWidgets$ = this.store.pipe(select(selectWidgetsByColor('BLUE')));



    // this.widgets$.pipe(
    //   tap(widgets => console.log('widgets changed ', widgets))
    // ).subscribe();

  }

  addWidget() {

    const newWidget: NewWidget = this.widgetForm.value as NewWidget;

    console.log('New widget', newWidget);

    // const widget = this.widgetsService.addOne(newWidget);
    const id = (new Date()).getTime();
    const widget: Widget = {...newWidget, id}

    this.store.dispatch(addWidget({widget}));

    // this.widgetForm.reset();
    this.resetForm();

  }

  deleteWidget(id: number) {
    this.store.dispatch(deleteWidget({id}));
  }

  resetForm() {
    this.widgetForm.reset();

    this.showForm = false;
    setTimeout(() => this.showForm = true);
  }

  private makeForm() {
    return this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      description: '',
      price: [0, [Validators.required, Validators.min(0)]],
      color: ['', Validators.required]
    });
  }

  get nameFc(): FormControl {
    return this.widgetForm.get('name') as FormControl;
  }
  get descriptionFc(): FormControl {
    return this.widgetForm.get('description') as FormControl;
  }
  get priceFc(): FormControl {
    return this.widgetForm.get('price') as FormControl;
  }
  get colorFc(): FormControl {
    return this.widgetForm.get('color') as FormControl;
  }

}

