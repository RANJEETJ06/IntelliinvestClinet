import React from "react";
import { useNavigate } from "react-router-dom";
import UserServiceInstance from "../Services/User";

interface Props {
  handleRegister: () => void;
}

const Login: React.FC<Props> = ({ handleRegister }) => {
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const username = (event.currentTarget.elements[0] as HTMLInputElement)
        .value;
      const password = (event.currentTarget.elements[1] as HTMLInputElement)
        .value;
      const payload = { username, password };
      const response = await UserServiceInstance.loginUser(payload);
      if (response.status === 200) {
        const id = response.data.value;
        navigate("/Home", { state: { id } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
      <p className="mt-2">
        Don't have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={handleRegister}>
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
