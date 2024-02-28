import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const { state } = useLocation();
  const id = state?.id;
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-2xl font-bold mx-3 cursor-pointer"
          onClick={() => {
            navigate("/Home", { state: { id: id } });
          }}
        >
          Intelliinvest
        </h1>
        <nav>
          <div className="dropdown sm:hidden">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 mx-2"
            >
              Menu
            </button>
            {showDropdown && (
              <ul className="absolute top-full left-0 bg-indigo-600 text-white py-1 rounded shadow-md z-10">
                <li>
                  <button
                    onClick={() => navigate("/Home", { state: { id: id } })}
                    className="block text-left px-0 py-1 text-sm"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/About")}
                    className="block text-left px-0 py-1 text-sm"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button className="block text-left px-0 py-1 text-sm">
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/Contact")}
                    className="block text-left px-0 py-1 text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            )}
          </div>
          <ul className="hidden sm:flex space-x-7">
            <li>
              <button
                onClick={() => navigate("/Home", { state: { id: id } })}
                className="text-white hover:text-gray-300 mx-2"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/About")}
                className="text-white hover:text-gray-300 mx-2"
              >
                About
              </button>
            </li>
            <li>
              <button className="text-white hover:text-gray-300 mx-2">
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/Contact")}
                className="text-white hover:text-gray-300 mx-2"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
