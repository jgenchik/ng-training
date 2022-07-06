import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewWidget, Widget } from './types/widget.type';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  private widgets: Widget[] = [];

  private widgetsSubject = new BehaviorSubject<Widget[]>(this.widgets);
  widgets$ = this.widgetsSubject.asObservable();

  constructor() { }

  addOne(widget: NewWidget) {

    if(! widget.id) {
      widget.id = (new Date()).getTime();
    }

    console.log('addin widget ', widget);

    this.widgets.push(widget as Widget);

    this.widgetsSubject.next(this.widgets);

  }


  getAll() {
    return this.widgets;
  }

  async getAllAsPromise() {
    return this.widgets;
  }


}
