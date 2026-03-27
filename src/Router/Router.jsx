import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import MyBookings from "../pages/MyBookings";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/room",
    element: <Rooms></Rooms>,
  },
  {
    path: "/my-bookings",
    element: <MyBookings></MyBookings>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);
