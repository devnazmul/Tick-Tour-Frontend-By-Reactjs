import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const { logOut, user } = useAuth();
  const [bgClass, setBgClass] = useState("bg-transparent");

  let location = useLocation();

  const toggleNav = () => {
    const resNav = document.getElementById("res_nav");
    if (resNav.classList.contains("hidden")) {
      resNav.classList.replace("hidden", "flex");
    } else {
      resNav.classList.replace("flex", "hidden");
    }
  };

  useEffect(() => {
    const resNav = document.getElementById("res_nav");
    if (resNav.classList.contains("hidden")) {
      resNav.classList.replace("hidden", "hidden");
    } else {
      resNav.classList.replace("flex", "hidden");
    }
  }, [location.pathname]);

  window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    if (scroll <= 50) {
      setBgClass("bg-transparent");
    } else {
      setBgClass("bg-black shadow-lg");
    }
  });

  return (
    <div
      className={`Header z-40 text-white body-font h-auto fixed w-full ${bgClass}`}
    >
      <div className="container mx-auto block md:flex flex-wrap p-5 flex-row items-center">
        <div className='flex justify-between items-center'>
          <div className="flex items-center font-semibold text-xl mb-4 md:mb-0">
            <NavLink to='/' className='cursor-pointer flex justify-center items-center'>
              <img
              className="h-12 mr-3"
              src="https://i.ibb.co/2SHSFyP/airplane.png"
              alt=""
            />{" "}
            TickTour
            </NavLink>
            
          </div>

        <div>
          <button onClick={toggleNav}>
            <BiMenu className="block md:hidden text-3xl" />
          </button>
        </div>
        </div>
        
        
        <nav id="res_nav" className="bg-bgPrimary py-5 flex md:hidden flex-col">
          <NavLink
            to="/home"
            activeClassName="font-semibold text-white"
            className="text-black hover:bg-gray-100 py-2 mx-5 rounded-full"
          >
            Home
          </NavLink>
          <NavLink
            to="/destinations"
            activeClassName="font-semibold text-white"
            className="text-black hover:bg-gray-100 py-2 mx-5 rounded-full"
          >
            Destinations
          </NavLink>
          

          <NavLink
            to="/contact"
            activeClassName="font-semibold text-white"
            className="text-black hover:bg-gray-100 py-2 mx-5 rounded-full"
          >
            Contact Us
          </NavLink>

          {user.email ? (
            <span className="flex-col flex">
              
              <NavLink
                to="/my_orders"
                activeClassName="font-semibold text-white"
                className="text-black hover:bg-gray-100 py-2 mx-5 rounded-full"
              >
                My Orders
              </NavLink>
              <NavLink
                to="/all_orders"
                activeClassName="font-semibold text-white"
                className="text-black hover:bg-gray-100 py-2 mx-5 rounded-full"
              >
                All Orders
              </NavLink>
              <NavLink
                to="/admin/add_destinations"
                activeClassName="font-semibold text-white"
                className="text-black hover:bg-gray-100 py-2 mx-5 rounded-full"
              >
                Add Destination
              </NavLink>
              <button
                onClick={logOut}
                className="text-black hover:bg-gray-100 py-2 mx-5 rounded-full"
              >
                Log Out
              </button>
            </span>
          ) : (
            <NavLink
              to="/login"
              activeClassName="font-semibold text-white"
              className="text-black hover:bg-gray-100 py-2 mx-5 rounded-full"
            >
              Log In
            </NavLink>
          )}

          {user.email && (
            <div
              to="/"
              className="hover:bg-gray-200 mt-5 bg-gray-100 mx-auto rounded-full px-1 py-1 flex justify-between items-center"
            >
              <span className="text-textPrimary ml-2 block">
                {user.displayName || user.email}
              </span>
              <img
                className="h-10 w-10 rounded-full ml-3 block"
                src={
                  user.photoURL ||
                  "https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
                }
                alt=""
              />
            </div>
          )}
        </nav>

        <nav className="h-full  md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/home"
            activeClassName="font-semibold text-textPrimary"
            className={`mr-5 text-white hover:text-textPrimary`}
          >
            Home
          </NavLink>
          <NavLink
            to="/destinations"
            activeClassName="font-semibold text-textPrimary"
            className={`mr-5 text-white hover:text-gray-300`}
          >
            Destinations
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="font-semibold text-textPrimary"
            className={`mr-5 text-white hover:text-gray-300`}
          >
            Contact Us
          </NavLink>

          {user.email ? (
            <span>
              <NavLink
                to="/my_orders"
                activeClassName="font-semibold text-textPrimary"
                className={`mr-5 text-white hover:text-gray-300`}
              >
                My Orders
              </NavLink>
              <NavLink
                to="/all_orders"
                activeClassName="font-semibold text-textPrimary"
                className={`mr-5 text-white hover:text-gray-300`}
              >
                All Orders
              </NavLink>
              <NavLink
                to="/admin/add_destinations"
                activeClassName="font-semibold text-textPrimary"
                className={`mr-5 text-white hover:text-gray-300`}
              >
                Add Destination
              </NavLink>
              <button
                onClick={logOut}
                className={`mr-5 text-white hover:text-gray-300`}
              >
                Log Out
              </button>
            </span>
          ) : (
            <NavLink
              to="/login"
              activeClassName="font-semibold text-textPrimary"
              className={`mr-5 text-white hover:text-gray-300`}
            >
              Log In
            </NavLink>
          )}
        </nav>
        {user.email && (
          <div
            to="/"
            className="hover:bg-gray-100 rounded-full px-1 py-1 flex justify-between items-center"
          >
            <span className="text-textPrimary ml-2 hidden lg:block">
              {user.displayName || user.email}
            </span>
            <img
              className="h-10 w-10 rounded-full ml-3 hidden md:block"
              src={
                user.photoURL || "https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
              }
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
