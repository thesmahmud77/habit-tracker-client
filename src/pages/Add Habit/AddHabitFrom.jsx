import React, { useContext } from "react";
import MainContainer from "../../Container/MainContainer";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

export default function AddHabitFrom() {
  const { user } = useContext(AuthContext);
  const handleSaveHabit = async (e) => {
    e.preventDefault();
    const habitName = e.target.habitName.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const remainderTime = e.target.remainderTime.value;
    // console.log(habitName, category, description);

    const newHabitData = {
      habitTitle: habitName,
      category: category,
      description: description,
      reminderTime: remainderTime,
      userEmail: user.email,
      userName: user.UserName,
      userPhoto: user.photoURL,
      postCreateTime: new Date().toISOString(),
    };
    // console.log(newHabitData);
    const response = await fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newHabitData),
    });

    const data = await response.json();
    if (data.insertedId) {
      Swal.fire({
        title: "Habit Added to your Profile",
        icon: "success", // ← সবুজ success
      });
    } else {
      Swal.fire({
        title: "Oops...",
        icon: "error", // ← লাল error
      });
    }
  };

  return (
    <MainContainer>
      <div className="flex items-center justify-center bg-amber-600 p-50">
        <form onSubmit={handleSaveHabit} className="space-y-2 w-100">
          {/* Habit Name */}
          <div className="flex flex-col items-start justify-center">
            <label className="block font-medium mb-1">Habit Name</label>
            <input
              name="habitName"
              type="text"
              placeholder="e.g., Read 20 pages, Drink 2L water"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col items-start justify-center">
            <label className="block font-medium mb-1">Category</label>
            <select name="category" className="select select-bordered w-full">
              <option>Mindfulness</option>
              <option>Fitness</option>
              <option>Learning</option>
              <option>Health</option>
            </select>
          </div>

          {/* Description */}
          <div className="flex flex-col items-start justify-center">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full h-24"
              placeholder="Add some details about why you want to build this habit..."
            ></textarea>
          </div>
          {/* Remainder time */}
          <div className="flex flex-col items-start justify-center">
            <label className="block font-medium mb-1">Remainder Time</label>
            <input
              name="remainderTime"
              type="text"
              placeholder="e.g., Morning 7PM"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center">
            <button type="submit" className="btn btn-primary w-100">
              Save Habit
            </button>
          </div>
        </form>
      </div>
    </MainContainer>
  );
}
