import React, { lazy, FC } from "react";

import Dashboard from "@/pages/dashboard";
import LoginPage from "@/pages/login";
import LayoutPage from "@/pages/layout";
import WrapperRouteComponent from "./config";
import { useRoutes, RouteObject } from "react-router-dom";

const NotFound = lazy(() => import('@/pages/NotFound'));
const Project = lazy(() => import('@/pages/project'));
const SignIn = lazy(() => import('@/pages/SignIn'));
const SignInSuccess = lazy(() => import('@/pages/SignInSuccess'));
const Record = lazy(() => import('@/pages/Record'));

const routeList: RouteObject[] = [

  {
    path: "/",
    element: <WrapperRouteComponent auth={true} ><LayoutPage /></WrapperRouteComponent>,
    children: [
      {
        path: "/dashboard",
        element: <WrapperRouteComponent><Dashboard /></WrapperRouteComponent>,
      },
      {
        path: "/project/list",
        element: <WrapperRouteComponent><Project /></WrapperRouteComponent>,
      },
      {
        path: "/SignIn",
        element: <WrapperRouteComponent><SignIn /></WrapperRouteComponent>,
      },
      {
        path: "/record",
        element: <WrapperRouteComponent><Record /></WrapperRouteComponent>,
      },
      {
        path: "/SignInSuccess",
        element: <WrapperRouteComponent><SignInSuccess /></WrapperRouteComponent>,
      },
      {
        path: "*",
        element: <WrapperRouteComponent><NotFound /></WrapperRouteComponent>,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
