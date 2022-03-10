import { CalendarAction, CalendarActionEnum, CalendarState } from "./types";

const initialState: CalendarState = {
  guests: [],
  events: [],
};

export const calendarReducer = (
  state = initialState,
  action: CalendarAction
): CalendarState => {
  switch (action.type) {
    case CalendarActionEnum.SET_GUESTS:
      return { ...state, guests: action.payload };

    case CalendarActionEnum.SET_EVENTS:
      return { ...state, events: action.payload };

    default:
      return state;
  }
};
