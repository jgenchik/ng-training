import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NewWidget, Widget } from './types/widget.type';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  private widgets: Widget[] = [];

  private widgetsSubject = new BehaviorSubject<Widget[]>(this.widgets);
  widgets$ = this.widgetsSubject.asObservable();

  constructor() { }

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

    this.widgets.push(widget as Widget);

    return of(widget) as Observable<Widget>;

  }


  // getAll() {
  //   return this.widgets;
  // }
  getAll(): Observable<Widget[]> {
    return of(this.widgets);
  }


}
