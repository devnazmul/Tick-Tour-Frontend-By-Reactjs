import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://stark-basin-94310.herokuapp.com/travel_destination").then((res) => {
      setDestinations(res.data.destination);
      setIsLoading(false)
    });
  }, []);

  return (
    <div id="services" className="Services bg-gray-900 pt-32 pb-20">
      <h2 className="text-3xl text-center text-gray-100 md:text-4xl font-bold mb-5 px-10">
        Our Wide Collection Of{" "}
        <span className="text-textPrimary"> Destinations</span>
      </h2>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {!isLoading ? ( destinations.length === 0 ? <div className='flex justify-center items-center text-gray-800 text-5xl'>No Data Found</div> :
              destinations.map((destination) => (
                <Card key={destination._id} destination={destination} />
              ))
            ) : (
              <div className="flex items-center justify-center h-screen w-full ">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-borderPrimary  h-64 w-64"></div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
