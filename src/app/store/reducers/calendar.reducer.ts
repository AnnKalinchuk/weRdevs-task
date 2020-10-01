import { Day } from 'src/app/shared/models/day.model';
import { CalendarActions, calendarActionsType } from '../actions/calendar.action';


export const calendarNode = 'calendar';

export interface CalendarState {
  selectedDate: {
    month: string,
    day: string
  };
}

const InitialState: CalendarState = {
  selectedDate: {
    month: 'September',
    day: '15th Mondey'
  }
};

export const calendarReducer = (state = InitialState, action: CalendarActions) => {
  switch (action.type) {
      case calendarActionsType.saveSelectedDate:
          return {
            ...state,
            selectedDate: {
              ...state.selectedDate,
              month: action.payload.month,
              day: action.payload.day
            }
          };
      default:
          return state;
  }
};
