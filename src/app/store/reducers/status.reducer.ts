import * as fromStatus from '../actions/status.action';
import * as jsondata from '../../../db.json';

import { StatusModel } from '../../models/status.model';

const jsonStatusesStringifyed = (<any>jsondata).statuses.map(JSON.stringify);
const jsonStatusesParsed = jsonStatusesStringifyed.map(JSON.parse);

export interface StatusState {
  data: StatusModel[];
}

export const initialState: StatusState = {
  data: jsonStatusesParsed,
};

export function reducer(state: StatusState = initialState, action: fromStatus.StatusesAction): StatusState {
  switch (action.type) {
    case fromStatus.LOAD_STATUSES: {
      return {
        ...state,
      };
    }
  }

  return state;
}

export const getStatuses = (state: StatusState) => state.data;
