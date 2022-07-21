import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NewWidget, Widget } from './types/widget.type';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  private initialState: Widget =  {
      id: 123,
      color: 'BLUE',
      name: 'Test',
      price: 10
    };

  // widgets: Widget[] = [];
  widgets= [] = new Set<Widget>();

  // private widgetsSubject = new BehaviorSubject<Widget[]>(this.widgets);
  // widgets$ = this.widgetsSubject.asObservable();

  constructor() {
    console.log(' *** WidgetsService created');
    // this.widgets.push(this.initialState);
    this.widgets.add(this.initialState);
  }

  // addOne(widget: NewWidget): Widget {

  //   if(! widget.id) {
  //     widget.id = (new Date()).getTime();
  //   }

  //   console.log('addin widget ', widget);

  //   this.widgets.push(widget as Widget);

  //   this.widgetsSubject.next(this.widgets);

  //   return widget as Widget;

  // }

  addOne(widget: NewWidget): Observable<Widget> {

    if(! widget.id) {
      widget.id = (new Date()).getTime();
    }

    const widgetWithId: Widget = widget as Widget;

    // this.widgets.push(widgetWithId);
    console.log('this.widgets', this.widgets);
    console.log('widgetWithId', widgetWithId);
    // this.widgets.push(widgetWithId);
    this.widgets.add(widgetWithId);

    return of(widgetWithId);

  }


  // getAll() {
  //   return this.widgets;
  // }
  getAll(): Observable<Widget[]> {
    // return of(this.widgets);
    return of([...this.widgets]);
  }


}
