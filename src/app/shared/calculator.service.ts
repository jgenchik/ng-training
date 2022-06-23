import { Injectable } from '@angular/core';
import { distinctUntilChanged, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private _lastSum: number | undefined;

  private lastSumSubject = new Subject<number>();
  lastSum$ = this.lastSumSubject.asObservable().pipe(
    distinctUntilChanged()
  );

  constructor() { }


  add(p1: number, p2: number) {

    const sum = p1 + p2;

    this._lastSum = sum;

    this.lastSumSubject.next(sum);

    return sum;

  }

  get lastSum() {
    return this._lastSum;
  }

}
