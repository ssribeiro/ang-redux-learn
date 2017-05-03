import { Action } from '@ngrx/store';
import { Place } from '../models/place';

export const EDIT_PLACE = '[Places] Edit Place';
export const STOP_EDITING_PLACE = '[Places] Stop Editing Place';
export const PLACE_CHANGE = '[Places] Place Change';
export const REMOVE_PLACE = '[Places] Remove Place';
export const ADD_PLACE = '[Places] Add Place';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class EditPlaceAction implements Action {
  readonly type = EDIT_PLACE;
  constructor(public payload: number) { }
}

export class StopEditingAction implements Action {
  readonly type = STOP_EDITING_PLACE;
}

export class PlaceChangeAction implements Action {
  readonly type = PLACE_CHANGE;
  constructor(public payload: Place) { }
}

export class RemovePlaceAction implements Action {
  readonly type = REMOVE_PLACE;
  constructor(public payload: number) { }
}

export class AddPlaceAction implements Action {
  readonly type = ADD_PLACE;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = EditPlaceAction
  | PlaceChangeAction
  | RemovePlaceAction
  | AddPlaceAction
  | StopEditingAction;