import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios.post('https://stark-basin-94310.herokuapp.com/travel_destination', data)
          .then((res)=>{
              if (res.data.insertedId) {
                alert('Destination Added Successfully.')
                reset();
              }
            
          });
    };
   
  return (
    <div className="bg-gray-700 py-32 px-5 min-h-screen ">
     
      <h1 className='text-textPrimary text-center text-4xl font-medium'>Add New Destination</h1>
          <br />
          <br />
      <div className="bg-white py-10 px-2 md:px-10 md:w-3/4 lg:w-1/2 mx-auto rounded-lg overflow-hidden">
          
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center mb-5">
            <label
              htmlFor="destinationName"
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Destination
            </label>
            <input
            {...register("destinationName", { required: true })}
              type="text"
              id="destinationName"
              name="destinationName"
              placeholder="destination"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-borderPrimary
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label
              htmlFor="imageUrl"
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Image Url
            </label>
            <input
            {...register("imageUrl", { required: true })}
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="imageUrl"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-borderPrimary
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
              htmlFor="description"
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Description
            </label>
            <input
            {...register("description", { required: true })}
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-borderPrimary
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            
            <label
              htmlFor="country"
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Country
            </label>
            <input
            {...register("country", { required: true })}
              type="text"
              id="country"
              name="country"
              placeholder="country"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-borderPrimary
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            
            <label
              htmlFor="rating"
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Rating
            </label>
            <input
            {...register("rating", {required: true })}
              type="number"
              id="rating"
              name="rating"
              placeholder="rating"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-borderPrimary
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>


          <div className="flex items-center mb-5">
           
            <label
              htmlFor="date"
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Date
            </label>
            <input
            {...register("date", { required: true })}
              type="date"
              id="date"
              name="date"
              placeholder="date"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-borderPrimary
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label
              htmlFor="price"
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Price
            </label>
            <input
            {...register("price", { required: true })}
              type="number"
              id="price"
              name="price"
              placeholder="price"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-borderPrimary
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>

          <div className="text-right">
            <input className="py-3 px-8 bg-bgPrimary text-white font-bold" type="submit" value='Add'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDestination;
