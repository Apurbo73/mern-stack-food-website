import React, { useState } from "react";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
const Header = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  //handle Profile Menu:
  const handleProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };
  return (
    <header className="fixed mb-5 shadow-md w-full h-16 px-2 md:px-4">
      {/* desktop screen */}
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="h-16" src={logo} alt="" />
        </Link>
        <div className="flex gap-4 md:gap-7">
          <nav className="gap-4 md:gap-7 flex text-base md:text-lg">
            <Link to="/">Mithila Foods</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
          </nav>

          <div className="text-2xl text-orange-600 relative">
            <BsFillCartPlusFill />
            <div className="absolute -top-1 -right-1 text-white
             bg-blue-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div
            className="text-2xl text-orange-600 cursor-pointer"
            onClick={handleProfileMenu}
          >
            <BiUserCircle />
          </div>
          {profileMenu &&
            <div>
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md top-14">
                <p className="whitespace-nowrap cursor-pointer">New Arrival</p>
                <p className="whitespace-nowrap cursor-pointer">Login </p>
              </div>
              <div />
            </div>}
        </div>
      </div>

      {/* mobile screen */}
    </header>
  );
};

export default Header;
