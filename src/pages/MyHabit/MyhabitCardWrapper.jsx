import React from "react";
import MyHabitCard from "./MyHabitCard";

const MyhabitCardWrapper = ({ myhabitdata }) => {
  return (
    <div>
      <div className="flex items-center justify-between my-30">
        <div className="text-start">
          <h1 className="h1 text-3xl font-bold">My Habits</h1>
          <p>Track your progress and stay consistent with your routines.</p>
        </div>
        <div>
          <button className="btn btn-primary">Add New habit</button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-5">
        <button className="btn btn-primary">All Habit</button>
        <button className="btn btn-primary">private</button>
        <button className="btn btn-primary">public</button>
        <button className="btn btn-primary">Completed Today</button>
      </div>
      <div>
        <table className="table">
          {/* head */}
          <thead className="flex items-center justify-between bg-amber-100 mt-10">
            <tr className="grid grid-cols-12 gap-20">
              <th className="col-span-2  text-center">Se No</th>
              <th className="col-span-3  text-center">Habit Name</th>
              <th className="col-span-2  text-center">reminder Time</th>
              <th className="col-span-2  text-center">Status</th>
              <th className="col-span-3  text-center">Action</th>
            </tr>
          </thead>
          <div>
            {myhabitdata.map((tableHabitData) => (
              <MyHabitCard tableHabitData={tableHabitData}></MyHabitCard>
            ))}
          </div>
        </table>
      </div>
    </div>
  );
};

export default MyhabitCardWrapper;
