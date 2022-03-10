import { AuthActionCreator } from "./reducers/authReducer/action-creators";
import { CalendarActionCreator } from "./reducers/calendarReducer/action-creators";

/**
 * Общий action creator, в который разворачиваются все action creators проекта
 */
export const allActionCreators = {
  ...AuthActionCreator,
  ...CalendarActionCreator,
};
