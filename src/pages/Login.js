import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import image from "../images/login-animation.gif";

import { Link } from "react-router-dom";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  //handle Show:
  const handleShow = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="pt-40 bg-slate-200 min-h-[calc(100vh)]">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded shadow-lg">
        <div className="w-16 overflow-hidden rounded-full drop-shadow-lg shadow-lg">
          <img src={image} alt="" className="w-full" />
        </div>
        <div>
          <h1 className="text-center text-xl font-bold p-3 md:p-4">Sign in</h1>
        </div>
        <form>
          <input
            className="w-full bg-slate-200 px-2 py-1 mb-2 rounded focus-within:outline-blue-200"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />

          <div className="flex bg-slate-200 px-2 py-1 mb-2 rounded focus-within:outline focus-within:outline-blue-200">
            <input
              className="w-full bg-slate-200 border-none outline-none "
              type={showPass ? "text" : "password"}
              required
              name="password"
              placeholder="Enter your password"
            />
            <span className="flex text-2xl" onClick={handleShow}>
              {showPass ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button
            className="w-full mt-5 p-2 rounded bg-blue-400 hover:bg-green-300"
            type="submit">
            Submit
          </button>
          <Link className="text-sm" to="/sign-up">
            New here? <span className="underline text-blue">sign up</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
