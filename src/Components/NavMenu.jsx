import React from "react";
import { NavLink } from "react-router";

const NavMenu = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div>
          <NavLink className={"btn-primary font-bold"} to={"/"}>
            LOGO
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-2 col-span-7">
          <NavLink className={"btn-primary"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"btn-primary"} to={"/room"}>
            Rooms
          </NavLink>
          <NavLink className={"btn-primary"} to={"/my-bookings"}>
            My Bookings
          </NavLink>
        </div>
        <div className="col-span-3">
          <img src="" alt="" />
          <NavLink className={"btn-primary"} to={"/login"}>
            login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
