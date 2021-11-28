import { incrementCounterTwo } from './../../state/actions/counters.actions';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Counters } from '../../interfaces/counter.model';

@Component({
  selector: 'app-state-two',
  templateUrl: './state-two.component.html',
  styleUrls: ['./state-two.component.scss']
})
export class StateTwoComponent implements OnInit {

  counters$: Counters;

  constructor(
    private _store: Store<Counters>
  ) {}

  ngOnInit(): void {
    this._store.pipe(select((state: any) => state.counters))
      .subscribe(counters => this.counters$ = counters);
  }

  increment(): void {
    this._store.dispatch(incrementCounterTwo());
  }
}
