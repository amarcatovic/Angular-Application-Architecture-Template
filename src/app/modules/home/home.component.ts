import { CounterService } from './services/counter/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counter: number;

  constructor(
    private _counter: CounterService
  ) { }

  ngOnInit(): void {
    this.counter = this._counter.counter;
  }

  increment() {
    this.counter = this._counter.incrementCounter();
  }
}
