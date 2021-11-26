import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="text-gray-600 body-font relative pt-12">
      <div className="absolute inset-0 bg-gray-800">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1) opacity(.6)" }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="text-left lg:w-1/3 md:w-1/2 text-white  bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-textPrimary text-3xl mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 ">
            We will answer your any question.
          </p>
          <div className='flex justify-between'>
          <div className="relative mb-4 mr-1 w-1/2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-100">
              First Name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="ml-1 relative mb-4 w-1/2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-100">
              Last Name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-100"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
