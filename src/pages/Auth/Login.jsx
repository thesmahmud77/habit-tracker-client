import React from "react";
import MainContainer from "../../Container/MainContainer";
import NavMenu from "../../Components/NavMenu";
import Footer from "../../Components/Footer";
import { Link } from "react-router";

const Login = () => {
  return (
    <MainContainer>
      <NavMenu></NavMenu>
      <div className=" bg-amber-400 flex items-center justify-center min-h-screen flex-col">
        <form action="">
          <fieldset className="fieldset">
            <div className="email">
              <label className="email">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
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
            <div className="forget password">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-1">Login</button>
          </fieldset>
        </form>
        {/* <!-- Google --> */}
        <button class="btn mt-5 bg-white text-black border-[#e5e5e5] w-[260px]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="mt-5">
          if you dont have account!!
          <span>
            <Link className="text-primary" to={"/signup"}>
              Please Register
            </Link>
          </span>
        </p>
      </div>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Login;
