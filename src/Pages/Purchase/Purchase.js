import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiLocationPlus } from "react-icons/bi";
import { MdLocationCity, MdLocationOn, MdMyLocation, MdOutlineLocalActivity } from "react-icons/md";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Purchase = () => {
  const { user } = useAuth();
  const { _id } = useParams();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const [destination, setDestination] = useState([]);
  useEffect(() => {
    axios.get(`https://stark-basin-94310.herokuapp.com/travel_destination/${_id}`).then((res) => {
      setDestination(res.data);
    });
  }, []);

  const onSubmit = (data) => {
    axios.post("https://stark-basin-94310.herokuapp.com/users_orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("Order Placed Successfully.");
        history.push("/done_purchase");
      }
    });
  };
  console.log(typeof destination.destinationName);
  return (
    <div className="bg-gray-700 py-32 px-5 md:px-10 h-auto">
      {destination.length !== 0 ? (
        <div className='lg:flex'>

<div className="text-gray-400 bg-gray-800 w-full body-font overflow-hidden rounded-lg">
  <div className="container p-5 mx-auto">
    <div className="mx-auto flex flex-col">
      <img alt="ecommerce" className="w-full lg:h-auto h-64 object-cover object-center rounded" src={destination.imageUrl}/>
      <div className=" w-full p-5 text-left">
        <h2 className="text-sm title-font text-gray-500 tracking-widest flex items-center"><MdLocationOn className='mr-1' /> {destination.country}</h2>
        <h1 className="text-white text-5xl title-font font-medium mb-1 flex items-center justify-between">
          {destination.destinationName}
          <span className="title-font font-medium text-2xl text-white"><span className='text-textPrimary'>$</span> {destination.price}</span>
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mb-1 w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="ml-1">{destination.rating} Rating</span>
          </span>
          
        </div>
        <p className="leading-relaxed">{destination.description}</p>
      </div>
    </div>
  </div>
</div>


          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10 lg:mt-0  flex justify-center items-start" >
          <div className="text-left md:w-2/3 text-white bg-gray-800 rounded-lg p-8 flex flex-col relative z-10 shadow-md">
            <h2 className="text-textPrimary text-3xl mb-12 text-center font-medium title-font">
              Place Order
            </h2>
            <div className="flex justify-between">
              <div className="relative mb-4 mr-1 w-1/2">
                <input
                  {...register("imgUrl", { required: true })}
                  className="hidden"
                  value={`${user.photoURL}`}
                  type="text"
                />

                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-100"
                >
                  Your Name
                </label>
                <input
                  {...register("name", { required: true })}
                  value={`${user.displayName}`}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="ml-1 relative mb-4 w-1/2">
                <label
                  htmlFor="destination"
                  className="leading-7 text-sm text-gray-100"
                >
                  Destination
                </label>
                <input
                  {...register("destinationName", { required: true })}
                  value={`${destination.destinationName}`}
                  type="text"
                  id="destination"
                  name="destination"
                  className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-100"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                value={user.email}
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-100"
              >
                Address
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Your Address"
                id="address"
                name="address"
                className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="price"
                className="leading-7 text-sm text-gray-100"
              >
                Price
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                value={`${destination.price}`}
                id="price"
                name="price"
                className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <input
                {...register("status", { required: true })}
                type="text"
                value='pending'
                id="status"
                name="status"
                className="hidden"
              />
            <input
              type="submit"
              value="Place Order"
              className="text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg"
            />
          </div>
        </form>
        </div>
        
      ):(
        <div className="flex items-center justify-center h-screen w-full ">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-borderPrimary  h-64 w-64"></div>
        </div>
      )}
    </div>
  );
};
export default Purchase;
