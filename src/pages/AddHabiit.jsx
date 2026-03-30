import React from "react";
import MainContainer from "../Container/MainContainer";
import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";
import AddHabitFrom from "./Add Habit/AddHabitFrom";

const AddHabiit = () => {
  return (
    <MainContainer>
      <NavMenu></NavMenu>
      <section>
        <AddHabitFrom></AddHabitFrom>
      </section>
      <Footer></Footer>
    </MainContainer>
  );
};

export default AddHabiit;
