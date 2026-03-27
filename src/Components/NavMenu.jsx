import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const NavMenu = () => {
  const { user, SignOut } = use(AuthContext);
  const handleSignOut = () => {
    SignOut();
  };
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 flex items-center justify-start ">
          <NavLink className={"font-bold "} to={"/"}>
            LOGO
          </NavLink>
        </div>
        <div className="col-span-8 flex items-center justify-center gap-2  gap-8">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/addhabit"}>Add Habit</NavLink>
          <NavLink to={"/myhabbit"}>My Habbit</NavLink>
          <NavLink to={"/publichabits"}>Public Habits</NavLink>
        </div>
        <div className="col-span-2 flex items-center justify-end gap-5 ">
          <div>
            <img
              src={
                user
                  ? user.photoURL
                  : "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              }
              alt="user"
              className="w-[50px] h-[50px] object-cover rounded-full border-3"
            />
          </div>
          <div>
            {user ? (
              <button onClick={handleSignOut}>SignOut</button>
            ) : (
              <NavLink className={"/login"}>Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
