import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import AddHabiit from "../pages/AddHabiit";
import MyHabit from "../pages/MyHabit";
import PublicHabits from "../pages/PublicHabits";
import Myprofile from "../pages/Myprofile";
import PrivateRoutes from "./Private-Routes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:3000/recent-habits"),
  },
  {
    path: "/addhabit",
    element: (
      <PrivateRoutes>
        <AddHabiit></AddHabiit>
      </PrivateRoutes>
    ),
  },
  {
    path: "/myhabbit",
    element: (
      <PrivateRoutes>
        <MyHabit></MyHabit>
      </PrivateRoutes>
    ),
  },
  {
    path: "/publichabits",
    element: <PublicHabits></PublicHabits>,
    loader: () => fetch("http://localhost:3000/habits"),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoutes>
        <Myprofile></Myprofile>
      </PrivateRoutes>
    ),
  },
]);
