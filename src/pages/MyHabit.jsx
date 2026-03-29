import React from "react";
import MainContainer from "../Container/MainContainer";
import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";
import { useLoaderData } from "react-router";
import MyHabitPage from "./MyHabit/MyHabitPage";

const MyHabit = () => {
  const myhabitdata = useLoaderData();
  // console.log(myhabitdata);
  return (
    <MainContainer>
      <NavMenu></NavMenu>
      <section>
        <MyHabitPage myhabitdata={myhabitdata}></MyHabitPage>
      </section>
      <Footer></Footer>
    </MainContainer>
  );
};

export default MyHabit;
