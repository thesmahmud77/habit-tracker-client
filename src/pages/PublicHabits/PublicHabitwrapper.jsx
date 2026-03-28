import React from "react";
import HomeHabitsCard from "../Home/HomeHabitsCard";
import PublicHabitCards from "./PublicHabitCards";

const PublicHabitwrapper = ({ PublichabitsData }) => {
  // console.log(PublichabitsData);
  return (
    <div>
      <h1 className="text-4xl font-bold mt-10">Browse All Public Habits</h1>
      <p className="mt-5">
        Discover what others are working on right now and find inspiration for
        your own routine. Join these public habits today.
      </p>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {PublichabitsData.map((publicHabitCard) => (
          <PublicHabitCards
            publicHabitCard={publicHabitCard}
          ></PublicHabitCards>
        ))}
      </div>
    </div>
  );
};

export default PublicHabitwrapper;
