import React, { useState } from "react";
import image from "../images/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");

  //handle Show:
  const handleShow = () => {
    setShowPass(!showPass);
  };
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    if (pass !== conPass) {
      toast("Password and confirm password are not matching");
    }
    if (pass === conPass) {
      toast("Successfully Registered");
      navigate("/login");
    }
    resetForm();
  };
  //reset form:
  const resetForm = () => {
    setName("");
    setEmail("");
    setPass("");
    setConPass("");
  };
  return (
    <div className="pt-40 bg-slate-200 min-h-[calc(100vh)]">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded shadow-lg">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-lg shadow-lg relative ">
          <img src={image} alt="" className="w-full" />
          <label htmlFor="">
            <div className="h-1/3 bottom-0 text-center bg-slate-400 absolute w-full cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
              <input type={"file"}  />

            </div>
          </label>
        </div>
        <div>
          <h1 className="text-center text-xl font-bold p-3 md:p-4">Sign Up</h1>
        </div>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <input
            className="w-full bg-slate-200 px-2 py-1 mb-2 rounded focus-within:outline-blue-200"
            type="text"
            required
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="Enter your name"
          />
          <input
            className="w-full bg-slate-200 px-2 py-1 mb-2 rounded focus-within:outline-blue-200"
            type="email"
            name="email"
            required
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />

          <div className="flex bg-slate-200 px-2 py-1 mb-2 rounded focus-within:outline focus-within:outline-blue-200">
            <input
              className="w-full bg-slate-200 border-none outline-none "
              type={showPass ? "text" : "password"}
              required
              name="password"
              value={pass}
              onChange={e => {
                setPass(e.target.value);
              }}
              placeholder="Enter your password"
            />
            <span className="flex text-2xl" onClick={handleShow}>
              {showPass ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <div className="flex bg-slate-200 px-2 py-1 mb-2 rounded focus-within:outline  focus-within:outline-blue-200">
            <input
              className="w-full bg-slate-200 border-none outline-none "
              type={showPass ? "text" : "password"}
              required
              name="password"
              value={conPass}
              onChange={e => {
                setConPass(e.target.value);
              }}
              placeholder="Confirm your password"
            />
            <span className="flex text-2xl" onClick={handleShow}>
              {showPass ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button
            className="w-full mt-5 p-2 rounded bg-blue-400 hover:bg-green-300"
            type="submit"
          >
            Submit
          </button>
          <Link className="text-sm" to="/login">
            Already registered?
            <span className="underline text-blue">sign in</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
