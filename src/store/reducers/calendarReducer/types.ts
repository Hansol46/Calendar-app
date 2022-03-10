import { Calendar, User } from "../../../models";

export interface CalendarState {
  guests: User[];
  events: Calendar[];
}

export enum CalendarActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface SetGuestsAction {
  type: CalendarActionEnum.SET_GUESTS;
  payload: User[];
}

export interface SetEventsAction {
  type: CalendarActionEnum.SET_EVENTS;
  payload: Calendar[];
}

export type CalendarAction = SetGuestsAction | SetEventsAction;
