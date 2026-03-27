import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import AddHabiit from "../pages/AddHabiit";
import MyHabit from "../pages/MyHabit";
import PublicHabits from "../pages/PublicHabits";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/addhabit",
    element: <AddHabiit></AddHabiit>,
  },
  {
    path: "/myhabbit",
    element: <MyHabit></MyHabit>,
  },
  {
    path: "/publichabits",
    element: <PublicHabits></PublicHabits>,
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
