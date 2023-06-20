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
    <header className="fixed mb-5 shadow-md w-full h-16 px-2 md:px-4 bg-white">
      {/* desktop screen */}
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="h-16" src={logo} alt="" />
        </Link>
        <div className="flex gap-4 md:gap-7">
          <nav className="gap-4 md:gap-7 flex text-base md:text-lg">
            <Link className="hover:bg-blue-200 p-1 rounded" to="/">
              Mithila Foods
            </Link>
            <Link className="hover:bg-blue-200 p-1 rounded" to="/menu">
              Menu
            </Link>
            <Link className="hover:bg-blue-200 p-1 rounded" to="/about">
              About
            </Link>
          </nav>

          <div className="text-2xl text-orange-600 relative p-1">
            <BsFillCartPlusFill />
            <div className="absolute -top-2 -right-1 text-white
             bg-blue-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div onClick={handleProfileMenu}>
            <div className="text-3xl text-orange-600 cursor-pointer p-1">
              <BiUserCircle />
            </div>
            {profileMenu &&
              <div>
                <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md top-14">
                  <Link
                    to="/new-product"
                    className="whitespace-nowrap cursor-pointer"
                  >
                    New Arrival
                  </Link>
                  <br />
                  <Link
                    to="/login"
                    className="whitespace-nowrap cursor-pointer"
                  >
                    Login
                  </Link>
                </div>
                <div />
              </div>}
          </div>
        </div>
      </div>

      {/* mobile screen */}
    </header>
  );
};

export default Header;
