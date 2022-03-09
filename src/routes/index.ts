import { ComponentType } from "react";
import { Calendar, Login } from "../pages";

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
    component: Login,
  },
];

export const privateRoutes: Route[] = [
  {
    path: RouteNames.CALENDAR,
    component: Calendar,
  },
];
