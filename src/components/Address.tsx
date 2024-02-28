import { useEffect, useState } from "react";
import UserServiceInstance from "../Services/User";
import { useLocation } from "react-router-dom";

const Address = () => {
  const [address, setAddress] = useState({
    name: "",
    pin: "",
    country: "",
  });
  const { state } = useLocation();
  const id = state.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserServiceInstance.getUserById(id);
        if (response.status === 200) {
          const name = response.data.firstName + " " + response.data.lastName;
          const pin = response.data.pin;
          const country = response.data.country;
          setAddress({ name, pin, country });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="mx-auto my-1">
      <div className="max-w-md p-3 bg-indigo-700 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
          Address Details
        </h2>
        <div className="mb-2">
          <p className="text-sm sm:text-base font-medium text-gray-300">
            Name: {address.name}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-sm sm:text-base font-medium text-gray-300">
            PIN Code: {address.pin}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-sm sm:text-base font-medium text-gray-300">
            Country: {address.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
