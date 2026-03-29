import React from "react";
import MyhabitCardWrapper from "./MyhabitCardWrapper";

const MyHabitPage = ({ myhabitdata }) => {
  return (
    <div>
      <MyhabitCardWrapper myhabitdata={myhabitdata}></MyhabitCardWrapper>
    </div>
  );
};

export default MyHabitPage;
