import React from "react";

const Offers = () => {
  return (
    <div className="w-full px-5 bg-gray-900 pt-20">
      <h1 className="text-3xl text-center text-gray-100 md:text-4xl font-bold mb-20 px-10">
        Hot <span className='text-textPrimary'>Offers</span>
      </h1>

      <div className="block md:flex justify-around items-center">
        <img className='cursor-pointer rounded-xl md:w-1/3 py-1' src="https://i.ibb.co/VTrTV1W/img-1517310246-1.png" alt="" />
        <img className='cursor-pointer rounded-xl md:w-1/3 py-1' src="https://i.ibb.co/Bj3pM53/img-1517310246.png" alt="" />
      </div>
    </div>
  );
};

export default Offers;
