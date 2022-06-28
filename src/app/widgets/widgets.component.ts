import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of, tap } from 'rxjs';
import { NewWidget, Widget } from '../shared/types/widget.type';
import { WidgetsService } from '../shared/widgets.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  widgetForm = this.makeForm();

  widgets$: Observable<Widget[]> = of([]);

  newWidget: NewWidget | undefined;

  constructor(private fb: FormBuilder, private widgetsService: WidgetsService) { }

  ngOnInit(): void {

    this.widgets$ = this.widgetsService.widgets$;

    // this.widgets$.pipe(
    //   tap(widgets => console.log('widgets changed ', widgets))
    // ).subscribe();

  }

  addWidget() {

    const newWidget: NewWidget = this.widgetForm.value as NewWidget;

    console.log('New widget', newWidget);

    this.widgetsService.addOne(newWidget);

    this.widgetForm.reset();

  }

  private makeForm() {
    return this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      description: '',
      price: [0, [Validators.required, Validators.min(0)]],
      color: ['', Validators.required]
    });
  }

}
