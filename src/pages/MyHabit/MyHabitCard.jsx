import React, { useState } from "react";
import Swal from "sweetalert2";

const MyHabitCard = ({
  tableHabitData,
  index,
  handleDeleteFromUI,
  handleStatusUpdateUI,
}) => {
  // console.log(tableHabitData);
  const [completeHabit, setCompleteHabit] = useState(tableHabitData);
  const { _id, habitTitle, reminderTime, currentStatus } = completeHabit;
  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:3000/my-habits/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentStatus: "Complete" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setCompleteHabit({ ...completeHabit, currentStatus: "Complete" });
          handleStatusUpdateUI(id);

          Swal.fire({
            title: "Status updated to Complete!!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  const handleDeleteMyHabit = (id) => {
    fetch(`http://localhost:3000/my-habits/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted!");
          // setCompleteHabit(...completeHabit);
          // window.location.reload();
          handleDeleteFromUI(id);
        }
      });
  };
  return (
    <div>
      <tbody className="overflow-x-auto  border border-gray-500 shadow-sm ">
        <tr className="grid grid-cols-12 gap-10 items-center justify-center">
          <th className="col-span-2  text-center">{index}</th>
          <td className="col-span-3  text-center">{habitTitle}</td>
          <td className="col-span-2  text-center">{reminderTime}</td>
          <td className="col-span-2  text-center">
            <p>{currentStatus ? currentStatus : "Panding"}</p>
          </td>
          <td className="col-span-2  text-center">
            <div className="flex items-center justify-between gap-10">
              <button
                onClick={() => handleStatusUpdate(_id)}
                disabled={currentStatus === "Complete"}
                className="btn btn-outline"
              >
                Complete
              </button>

              <button
                onClick={() => handleDeleteMyHabit(_id)}
                className="btn btn-outline"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default MyHabitCard;
