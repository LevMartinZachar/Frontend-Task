import { Action } from '@ngrx/store';

// load positions
export const LOAD_POSITIONS = 'Load Positions';

export class LoadPositions implements Action {
  readonly type = LOAD_POSITIONS;
}

// exporting action types
export type PositionsAction =
  | LoadPositions;
