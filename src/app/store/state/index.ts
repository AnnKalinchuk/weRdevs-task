import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { calendarNode, CalendarState, calendarReducer} from '../reducers/calendar.reducer';


export interface State {
    [calendarNode]: CalendarState;
}

export const reducers: ActionReducerMap<State> = {
    [calendarNode]: calendarReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
