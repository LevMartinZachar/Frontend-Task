import * as fromPosition from '../actions/position.action';
import * as jsondata from '../../../db.json';

import { PositionModel } from '../../models/position.model';

const jsonPositionsStringifyed = (<any>jsondata).positions.map(JSON.stringify);
const jsonPositionsParsed = jsonPositionsStringifyed.map(JSON.parse);

export interface PositionState {
  data: PositionModel[];
}

export const initialState: PositionState = {
  data: jsonPositionsParsed,
};

export function reducer(state: PositionState = initialState, action: fromPosition.PositionsAction): PositionState {
  switch (action.type) {
    case fromPosition.LOAD_POSITIONS: {
      return {
        ...state
      };
    }
  }

  return state;
}

export const getPositions = (state: PositionState) => state.data;
