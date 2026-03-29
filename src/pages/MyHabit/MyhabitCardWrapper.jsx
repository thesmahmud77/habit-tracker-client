import React from "react";
import MyHabitCard from "./MyHabitCard";

const MyhabitCardWrapper = ({ myhabitdata }) => {
  return (
    <div className="grid grid-cols-3 gap-5 my-20">
      {myhabitdata.map((myHabitCard) => (
        <MyHabitCard myHabitCard={myHabitCard}></MyHabitCard>
      ))}
    </div>
  );
};

export default MyhabitCardWrapper;
