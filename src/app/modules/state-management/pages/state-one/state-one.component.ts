import { incrementCounterOne } from './../../state/actions/counters.actions';
import { Counters } from './../../interfaces/counter.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-state-one',
  templateUrl: './state-one.component.html',
  styleUrls: ['./state-one.component.scss']
})
export class StateOneComponent implements OnInit {

  counters$: Counters;

  constructor(
    private _store: Store<Counters>
  ) {}

  ngOnInit(): void {
    this._store.pipe(select((state: any) => state.counters))
      .subscribe(counters => this.counters$ = counters);
  }

  increment(): void {
    this._store.dispatch(incrementCounterOne());
  }
}
