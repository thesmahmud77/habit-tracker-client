import React, { use } from "react";
import MainContainer from "../Container/MainContainer";
import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";

const Myprofile = () => {
  const { user } = use(AuthContext);

  return (
    <MainContainer>
      <NavMenu></NavMenu>
      <section className="min-h-screen">
        <div className="flex flex-col items-center justify-center mt-5">
          <h1>{user.displayName}</h1>
          <h1>{user.email}</h1>
        </div>
      </section>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Myprofile;
