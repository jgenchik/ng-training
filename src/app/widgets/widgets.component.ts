import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  widgetForm = this.makeForm();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  makeForm() {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      description: '',
      price: [0, [Validators.required, Validators.min(0)]],
      color: ['', Validators.required]
    });
  }

}
