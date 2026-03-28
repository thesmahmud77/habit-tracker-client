import React from "react";
import MainContainer from "../Container/MainContainer";
import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";
import { useLoaderData } from "react-router";
import PublicHabitwrapper from "./PublicHabits/PublicHabitwrapper";

const PublicHabits = () => {
  const PublichabitsData = useLoaderData();
  // console.log(PublichabitsData);
  return (
    <MainContainer>
      <NavMenu></NavMenu>
      <PublicHabitwrapper
        PublichabitsData={PublichabitsData}
      ></PublicHabitwrapper>
      <Footer></Footer>
    </MainContainer>
  );
};

export default PublicHabits;
