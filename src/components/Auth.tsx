import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import UserServiceInstance from "../Services/User";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    password: "",
    country: "",
    pin: "",
  });
  const handleRegister = () => {
    setIsRegister(true);
  };

  const handleRegisterSubmit = async () => {
    try {
      const response = await UserServiceInstance.saveUser(user);
      if (response.status === 201) {
        setIsRegister(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      {isRegister ? (
        <Register
          handleRegisterSubmit={handleRegisterSubmit}
          setUser={setUser}
        />
      ) : (
        <Login handleRegister={handleRegister} />
      )}
    </div>
  );
};

export default Auth;
