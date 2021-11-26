import React, { useState } from "react";
import { NavLink,useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { user, signinWithGoogle, signInWithEmail } = useAuth();
  const history = useHistory();
  const location = useLocation();
  
  const url = location.state?.from || '/home';


  if (user.email) {
      history.push(url);
  }
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveEmail = (e) => {
    setEmail(e.target.value);
    history.push(url);
  };
  const savePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    signInWithEmail(email, password);
    e.preventDefault();
  };
  

  return (
    <div className="bg-gray-700 Login pt-32 flex justify-center items-center h-screen px-5">
      <div className="w-full md:w-1/2 flex mb-10">
        <div
          onSubmit={handleLogin}
          className="bg-gray-800 text-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <form>
            <h2 className="text-textPrimary text-5xl mb-1 font-medium title-font">
              Log In
            </h2>
            <div className="relative mb-4 text-left">
              <label
                htmlFor="email"
                className="leading-7 text-sm "
              >
                Email
              </label>
              <input
                required
                onChange={saveEmail}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 text-left">
              <label
                htmlFor="email"
                className="leading-7 text-sm "
              >
                Password
              </label>
              <input
                required
                onChange={savePassword}
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <p className="text-left">
              Haven't An Account?{" "}
              <NavLink to="/signup" className="text-textPrimary">
                Sign Up.
              </NavLink>
            </p>
            <input
              type="submit"
              value="Log In"
              className="mt-8 text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-textPrimary rounded text-lg w-full"
            />
          </form>
          <button
            onClick={signinWithGoogle}
            className="flex lg:flex-row md:flex-col mx-auto justify-center items-center w-full md:w-3/7 bg-white mt-8 text-black border-0 py-1 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg"
          >
            <img className='h-10 mr-5' src="https://i.ibb.co/mTfYM0Y/search.png" alt="" /> Login with Google.
          </button>
        </div>
      </div>
    </div>
  );
};

export  default Login;