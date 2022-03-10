import { ComponentType } from "react";
import { CalendarPage, LoginPage } from "../pages";

export interface Route {
  path: string;
  component: ComponentType;
}

export enum RouteNames {
  LOGIN = "login",
  CALENDAR = "/",
}

export const publicRoutes: Route[] = [
  {
    path: RouteNames.LOGIN,
    component: LoginPage,
  },
];

export const privateRoutes: Route[] = [
  {
    path: RouteNames.CALENDAR,
    component: CalendarPage,
  },
];
