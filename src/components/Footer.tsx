import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg">
          © 2024{" "}
          <a
            href="https://ranjeet-profile.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ranjeet
          </a>
          . All rights reserved.
        </p>
        <ul className="flex space-x-6">
          <li>
            <div
              onClick={() => navigate("/About")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Privacy Policy
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                navigate("/About");
              }}
              className="hover:text-gray-400 cursor-pointer"
            >
              Terms of Service
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                navigate("/Contact");
              }}
              className="hover:text-gray-400 cursor-pointer"
            >
              Contact Us
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
