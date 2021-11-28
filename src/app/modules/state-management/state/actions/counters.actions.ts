import { createAction } from "@ngrx/store";
import { COUNTER_ACTIONS } from "src/app/core/services/utils/constants.actions";

export const incrementCounterOne = createAction(COUNTER_ACTIONS.INCREMENT_COUNTER_ONE);
export const incrementCounterTwo = createAction(COUNTER_ACTIONS.INCREMENT_COUNTER_TWO);
export const incrementCounterThree = createAction(COUNTER_ACTIONS.INCREMENT_COUNTER_THREE);