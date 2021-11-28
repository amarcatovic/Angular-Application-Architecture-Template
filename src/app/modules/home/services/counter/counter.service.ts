import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _counter: number

  constructor() {
    this._counter = 0;
  }

  get counter(): number {
    return this._counter;
  }

  incrementCounter(): number {
    return ++this._counter;
  }
}
