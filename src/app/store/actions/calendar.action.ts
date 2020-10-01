import { Action } from '@ngrx/store';

export enum calendarActionsType{
  saveSelectedDate = '[calendar] save selected date'
}
export class SaveSelectedDateAction implements Action {
  readonly type = calendarActionsType.saveSelectedDate;
  constructor(public payload: {
          month: string,
          day: string
        }) {}

}

export type CalendarActions = SaveSelectedDateAction;
