import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewWidget } from '../shared/types/widget.type';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  widgetForm = this.makeForm();

  newWidget: NewWidget | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addWidget() {

    const newWidget: NewWidget = this.widgetForm.value as NewWidget;

    console.log('New widget', newWidget);

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
