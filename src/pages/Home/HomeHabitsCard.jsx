import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const HomeHabitsCard = ({ homeHabitsCard }) => {
  // console.log(homeHabitsCard);
  const { user } = use(AuthContext);
  const { _id, title, category, reminderTime, userName, userPhoto } =
    homeHabitsCard;

  const handleAddCard = async (homeHabitsCard) => {
    // console.log({ user });

    const newData = {
      habitTitle: homeHabitsCard.habitTitle,
      description: homeHabitsCard.description,
      reminderTime: homeHabitsCard.reminderTime,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      id: homeHabitsCard._id,
    };
    // console.log(newData);
    const response = await fetch("http://localhost:3000/my-habits", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    });

    const data = await response.json();
    // Alert 1 — ⚠️ Warning
    if (data.message === "Already added!") {
      Swal.fire({
        title: "Already Exist in your Profile!",
        icon: "warning", // ← হলুদ warning
      });
    }

    // Alert 2 — ✅ Success
    else if (data.insertedId) {
      Swal.fire({
        title: "Habit Added to your Profile",
        icon: "success", // ← সবুজ success
      });
    }

    // Alert 3 — ❌ Error
    else {
      Swal.fire({
        title: "Oops...",
        icon: "error", // ← লাল error
      });
    }
  };

  return (
    <div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-300 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-[18px] font-bold text-[#0f172a]">{title}</h2>
            <div className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>

          <div className="bg-[#f1f5f9] text-[#64748b] text-[16px] px-3 py-1 rounded-md font-medium text-start">
            {category}
          </div>
          <div className="flex items-center gap-2 text-[#64748b] mt-4 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium">Daily • {reminderTime}</span>
          </div>
        </div>
        <hr className="border-gray-100 mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={userPhoto} alt={userName} />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-[#0f172a]">{userName}</p>
              <p className="text-[10px] text-gray-400">Added recently</p>
            </div>
          </div>

          <button
            onClick={() => handleAddCard(homeHabitsCard)}
            className="btn btn-outline"
          >
            Add To My Habit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHabitsCard;
