import axios from "axios";
import { AppDispatch } from "../..";
import { Calendar, User } from "../../../models";
import { CalendarActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const CalendarActionCreator = {
  setGuests: (payload: User[]): SetGuestsAction => ({
    type: CalendarActionEnum.SET_GUESTS,
    payload,
  }),

  setEvents: (payload: Calendar[]): SetEventsAction => ({
    type: CalendarActionEnum.SET_EVENTS,
    payload,
  }),

  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const guests = await axios.get("./users.json");
      dispatch(CalendarActionCreator.setGuests(guests.data));
    } catch (error) {
      console.error(error);
    }
  },

  createEvent: (calendar: Calendar) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as Calendar[];
      json.push(calendar);
      dispatch(CalendarActionCreator.setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
  },

  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as Calendar[];
      const currentEvents = json.filter(
        ({ author, guest }) => author === username || guest === username
      );
      dispatch(CalendarActionCreator.setEvents(currentEvents));
    } catch (error) {
      console.error(error);
    }
  },
};
