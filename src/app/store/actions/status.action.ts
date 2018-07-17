import { Action } from '@ngrx/store';

// load statuses
export const LOAD_STATUSES = 'Load Statuses';

export class LoadStatuses implements Action {
  readonly type = LOAD_STATUSES;
}

// exporting action types
export type StatusesAction = LoadStatuses;
