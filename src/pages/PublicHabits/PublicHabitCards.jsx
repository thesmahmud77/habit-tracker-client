import React from "react";

const PublicHabitCards = ({ publicHabit }) => {
  const { title, category, reminderTime, userName, userPhoto } = publicHabit;
  return (
    <div>
      <h1>Public Habit</h1>
    </div>
  );
};

export default PublicHabitCards;
