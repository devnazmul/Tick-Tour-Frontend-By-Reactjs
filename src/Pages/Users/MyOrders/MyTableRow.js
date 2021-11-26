import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useHistory } from "react-router";

const MyTableRow = (props) => {
  const { _id, imgUrl, name, email, destinationName, status, price } =
    props.order;
  const history = useHistory();

  const handleDeleteData = (e) => {
    axios.delete(`https://stark-basin-94310.herokuapp.com/users_orders/${e}`).then((res) => {
      history.go();
    });
  };

  return (
    <>
      <tr className="text-gray-700">
        <td className="px-4 py-3 border">
          <div
            id="popup"
            className="hidden popup absolute mx-auto py-14 rounded-xl w-full md:w-1/3 bg-gray-800 text-gray-500 z-10"
          >
            <h1 className="w-full text-2xl">
              Are You Sure To Delete This Order?
            </h1>
            <div className="flex justify-around items-center mt-20">
              <button
                onClick={() => handleDeleteData(_id)}
                className="py-2 px-10 rounded-md bg-red-500 text-white"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("popup")
                    .classList.replace("block", "hidden");
                }}
                className="py-2 px-10 rounded-md bg-green-500 text-white"
              >
                No
              </button>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
              <img
                className="object-cover w-full h-full rounded-full"
                src={imgUrl}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-black">{name}</p>
              <p className="text-xs text-gray-600">{email}</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-ms font-semibold border">
          {destinationName}
        </td>
        <td className="px-4 py-3 text-xs border">
          {status === "pending" ? (
            <span className="px-2 py-1 font-semibold leading-tight text-yellow-600 bg-yellow-100 rounded-sm">
              {status}
            </span>
          ) : (
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
              {status}
            </span>
          )}
        </td>
        <td className="px-4 py-3 text-sm border">$ {price}</td>
        <td className="lg:px-4 lg:py-3 border text-xl">
          <button
            onClick={() => {
              document
                .getElementById("popup")
                .classList.replace("hidden", "block");
            }}
            className="ml-5 text-red-500"
            title='delete'
          >
            <MdDelete />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyTableRow;
