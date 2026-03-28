import React, { use } from "react";
import MainContainer from "../../Container/MainContainer";
import NavMenu from "../../Components/NavMenu";
import Footer from "../../Components/Footer";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const SignUp = () => {
  const { registerWithEP } = use(AuthContext);

  const hangleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // console.log(name, email, photo, password);
    registerWithEP(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainContainer>
      <NavMenu></NavMenu>
      <div className=" bg-amber-400 flex items-center justify-center min-h-screen flex-col">
        <form onSubmit={hangleRegister}>
          <fieldset className="fieldset">
            <div className="Name">
              <label className="name">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
            </div>
            <div className="email">
              <label className="email">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="photo-url">
              <label className="label">Photo Url</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo-Url"
              />
            </div>
            <div className="password">
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-1">Register</button>
          </fieldset>
        </form>
        <p>
          if you dont have account!!{" "}
          <span>
            <Link className="text-primary" to={"/login"}>
              Please Login
            </Link>
          </span>
        </p>
      </div>

      <Footer></Footer>
    </MainContainer>
  );
};

export default SignUp;
