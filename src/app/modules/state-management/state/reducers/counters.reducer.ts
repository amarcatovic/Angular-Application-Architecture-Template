import { Counters } from './../../interfaces/counter.model';
import { Action, createReducer, on } from "@ngrx/store";
import * as CounterActions from '../actions/counters.actions';

const initialState: Counters = {
    counterOne: 0,
    counterTwo: 0,
    counterThree: 0
};

export const countersReducer = createReducer(
    initialState,
    on(CounterActions.incrementCounterOne, (state) => {
        return {
            ...state,
            counterOne: state.counterOne + 1
        }
    }),
    on(CounterActions.incrementCounterTwo, (state) => {
        return {
            ...state,
            counterTwo: state.counterTwo + 1
        }
    }),
    on(CounterActions.incrementCounterThree, (state) => {
        return {
            ...state,
            counterThree: state.counterThree + 1
        }
    })
);