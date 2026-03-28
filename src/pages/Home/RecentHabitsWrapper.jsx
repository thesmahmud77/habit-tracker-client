import React from "react";
import HomeHabitsCard from "./HomeHabitsCard";
import MainContainer from "../../Container/MainContainer";

const RecentHabitsWrapper = ({ homeHabits }) => {
  // console.log(homeHabits);
  return (
    <MainContainer>
      <h1 className="text-4xl font-bold mt-10">Recently Added Public Habits</h1>
      <p className="mt-5">
        Discover what others are working on right now and find inspiration for
        your own routine. Join these public habits today.
      </p>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {homeHabits.map((homeHabitsCard) => (
          <HomeHabitsCard
            key={homeHabitsCard._id}
            homeHabitsCard={homeHabitsCard}
          ></HomeHabitsCard>
        ))}
      </div>
    </MainContainer>
  );
};

export default RecentHabitsWrapper;
