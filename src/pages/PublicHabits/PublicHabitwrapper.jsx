import React from "react";
import HomeHabitsCard from "../Home/HomeHabitsCard";

const PublicHabitwrapper = ({ PublichabitsData }) => {
  //   console.log(PublichabitsData);
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      {PublichabitsData.map((publicHabitCard) => (
        <publicHabitCard publicHabitCard={publicHabitCard}></publicHabitCard>
      ))}
    </div>
  );
};

export default PublicHabitwrapper;
