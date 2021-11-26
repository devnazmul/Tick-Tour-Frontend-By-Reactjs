import React from "react";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  const { _id, destinationName, imageUrl, country, description, price, rating } =
    props.destination;
  return (
    <div className="p-4 md:w-1/2 lg:w-1/4">
      <div className="Card h-full transition duration-500 ease-in-out hover:shadow-xl rounded-xl overflow-hidden">
        <div className="relative">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg shadow-xl"
            src={imageUrl}
            alt="blog"
          />
          <span className="absolute text-xl top-0 right-0 flex p-3 font-semibold text-gray-100 items-center justify-center">
            <MdOutlineStar className="text-yellow-600" /> {rating}
          </span>
        </div>
        <div className="p-6  text-left">
          <div className='flex justify-between flex-col'>
            <div>
              <h1 className="title-font text-2xl font-medium text-gray-400">
                {destinationName}
              </h1>
              <p className="leading-relaxed mb-3 font-light text-sm flex items-center">
                <FiMapPin className="mr-2" /> {country}
              </p>
            </div>

            <p className="flex items-center pb-7 text-sm">
              {description.slice(0,90)}... ...
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className=" text-2xl font-medium">
              <span className="text-textPrimary">$ </span>
              {price}
              <span className="font-normal text-xs">/person</span>
            </p>

            <NavLink
              to={`/purchase/${_id}`}
              className="px-5 hover:bg-white hover:text-textPrimary py-1 rounded-full bg-bgPrimary text-white inline-flex items-center md:mb-2 lg:mb-0"
            >
              Book
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
