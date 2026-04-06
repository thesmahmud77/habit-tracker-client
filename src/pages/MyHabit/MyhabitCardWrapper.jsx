import React, { useEffect, useState } from "react";
import MyHabitCard from "./MyHabitCard";

const MyhabitCardWrapper = ({ myhabitdata, handleCompletedHabits }) => {
  // ১. প্রপস থেকে আসা ডাটাকে একটি লোকাল স্টেটে রাখুন
  const [habits, setHabits] = useState(myhabitdata);

  // যদি প্রপস কোনো কারণে পরে আপডেট হয়, তার জন্য এই useEffect (নিরাপত্তার জন্য)
  useEffect(() => {
    setHabits(myhabitdata);
  }, [myhabitdata]);

  // ২. রিয়েল-টাইমে UI থেকে ডিলিট করার ফাংশন
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
          <button className="btn btn-primary">Add New habit</button>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-green-500 py-20">Total Habit:{habits.length}</div>
        <div className="bg-blue-500 py-20">
          Total Completed {completedCount}
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
