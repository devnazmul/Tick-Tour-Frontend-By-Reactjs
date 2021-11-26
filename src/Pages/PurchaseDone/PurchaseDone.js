import React from 'react';
import { NavLink } from 'react-router-dom';

const PurchaseDone = () => {
    return (
        <div className='h-full w-full bg-gray-700 flex flex-col justify-center items-center pt-36 md:pt-24'>
            <h1 className='text-5xl font-semibold text-textPrimary'>Your Order Has Taken</h1>
            <p className='text-gray-300 mt-5'>Have a relax we will contact you as soon as possible!</p>
            <img className='w-1/4 my-10' src="https://i.ibb.co/PYxy51z/thank-you.png" alt="" />
            <NavLink to='/my_orders' className='rounded-md transition duration-500 ease-in-out hover:text-textPrimary hover:bg-white hover:border-2 hover:border-primary bg-bgPrimary font-medium text-white border-2 border-borderPrimary py-2 px-5 w-52 mb-20'>
                My Orders
            </NavLink>
        </div>
    );
};

export default PurchaseDone;