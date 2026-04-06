import React, { use } from "react";
import MainContainer from "../Container/MainContainer";
import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";

const Myprofile = () => {
  const { user } = use(AuthContext);
  // console.log(user);

  return (
    <MainContainer>
      <NavMenu></NavMenu>
      <section className="min-h-screen">
        <div className="flex items-center justify-center mt-5 gap-10">
          <div>
            <figure>
              <img
                width={"300px"}
                height={"300px"}
                src={user.photoURL}
                alt=""
              />
            </figure>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user.displayName}</h1>
            <h1>{user.email}</h1>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Myprofile;
