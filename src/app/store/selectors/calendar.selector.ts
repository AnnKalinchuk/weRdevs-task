import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CalendarState, calendarNode } from '../reducers/calendar.reducer';

export const calendarFeatureSelector = createFeatureSelector<CalendarState>(calendarNode);

export const selectDate = createSelector(
    calendarFeatureSelector,
    (state: CalendarState) => state.selectedDate
);
