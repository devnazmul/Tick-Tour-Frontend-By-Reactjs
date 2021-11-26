import axios from "axios";
import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://stark-basin-94310.herokuapp.com/users_orders").then((res) => {
      setOrders(res.data.usersOrders);
      setIsLoading(false)
    });
  }, []);

  return (
    <div className=" py-32 px-4 bg-gray-700">
      <div className="w-full mb-8 overflow-hidden rounded-lg">
      {!isLoading ? ( orders.length === 0 ? <div className='flex justify-center items-center text-gray-800 text-5xl'>No Data Found</div> :
          <div className="w-full overflow-x-auto  shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Destination</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
              {orders.map((orders) => (
                <TableRow key={orders._id} orders={orders} />
              ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen w-full ">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-borderPrimary  h-64 w-64"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllOrders;
