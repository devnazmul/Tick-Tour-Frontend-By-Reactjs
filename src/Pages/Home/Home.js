import React from 'react';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Offers from './Components/Offers/Offers';

import Destinations from './Components/Services/Destinations';


const Home = () => {
    return (
        <div>
            <Hero />
            <Offers />
            <Destinations />
            <Contact />
        </div>
    );
};

export default Home;