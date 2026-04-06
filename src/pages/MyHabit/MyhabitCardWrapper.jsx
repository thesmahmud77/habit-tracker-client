import React, { useEffect, useState } from "react";
import MyHabitCard from "./MyHabitCard";
import { Link } from "react-router";

const MyhabitCardWrapper = ({ myhabitdata }) => {
  const [habits, setHabits] = useState(myhabitdata);

  useEffect(() => {
    setHabits(myhabitdata);
  }, [myhabitdata]);

  const handleDeleteFromUI = (id) => {
    const remaining = habits.filter((habit) => habit._id !== id);
    setHabits(remaining);
  };

  const handleStatusUpdateUI = (id) => {
    const updated = habits.map((habit) =>
      habit._id === id ? { ...habit, currentStatus: "Complete" } : habit,
    );
    setHabits(updated);
  };

  const completedCount = habits.filter(
    (h) => h.currentStatus === "Complete",
  ).length;

  return (
    <div>
      <div className="flex items-center justify-between my-30">
        <div className="text-start">
          <h1 className="h1 text-3xl font-bold">My Habits</h1>
          <p>Track your progress and stay consistent with your routines.</p>
        </div>
        <div>
          <Link to={"/addhabit"} className="btn btn-primary">
            Add New habit
          </Link>
          {/* <button className="btn btn-primary">Add New habit</button> */}
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-primary py-20 font-bold text-xl">
          Panding Habit: <span className="text-red-500"> {habits.length}</span>
        </div>
        <div className="bg-secondary py-20 font-bold text-xl">
          Completed Habit:
          <span className="text-red-500"> {completedCount}</span>
        </div>
        <div></div>
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
            {habits.map((tableHabitData, index) => (
              <MyHabitCard
                key={tableHabitData._id}
                tableHabitData={tableHabitData}
                index={index}
                handleDeleteFromUI={handleDeleteFromUI}
                handleStatusUpdateUI={handleStatusUpdateUI}
              ></MyHabitCard>
            ))}
          </div>
        </table>
      </div>
    </div>
  );
};

export default MyhabitCardWrapper;
