import React from "react";

const MyHabitCard = ({ tableHabitData }) => {
  console.log(tableHabitData);
  const { habitTitle, reminderTime } = tableHabitData;
  return (
    <div>
      <tbody className="overflow-x-auto  border border-gray-500 shadow-sm ">
        <tr className="grid grid-cols-12 gap-10 items-center justify-center">
          <th className="col-span-2  text-center">1</th>
          <td className="col-span-3  text-center">{habitTitle}</td>
          <td className="col-span-2  text-center">{reminderTime}</td>
          <td className="col-span-2  text-center">
            <p>Incomplete</p>
          </td>
          <td className="col-span-2  text-center">
            <div className="flex items-center justify-between gap-3">
              <button className="btn btn-outline">Complete</button>
              <button className="btn btn-outline">Edit</button>
              <button className="btn btn-outline">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default MyHabitCard;
