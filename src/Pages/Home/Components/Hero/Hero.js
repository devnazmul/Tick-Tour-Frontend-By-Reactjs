import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div id="home" className="Hero pt-40 pb-20 lg:pt-20 block md:flex justify-between items-center md:px-20 px-5">
            <div className="w-full text-center md:px-48">
                <h1 className="hero-text text-4xl md:text-4xl lg:text-5xl xl:text-8xl font-bold text-black">LIVE YOUR <span className=" text-textPrimary">ADVENTURE</span></h1>
                <p className="mt-10">Dont wit for tomorrow. Discover your adventure now and feel the sensation of closeness to nature around you.</p>
                <div className="mt-10">
                    <NavLink to="/destinations" className="mx-auto text-center block w-full lg:w-1/3 rounded-md  hover:text-textPrimary hover:bg-white hover:border-2 hover:border-primary bg-bgPrimary font-medium text-white border-2 border-borderPrimary py-2 px-5">Make A Trip With Us !</NavLink>
                
                </div>
            </div>
        </div>
    );
};

export default Hero;