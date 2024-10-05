import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from "axios";
import Navbar from "../Navbar/Navbar.js";
import backendURL from "../../api/axios.js";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useSpring, animated } from "@react-spring/web";
import { useAuth } from "./AuthContext";

const API_ENDPOINTS = {
  LOGIN: "/api/auth/login",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendURL + API_ENDPOINTS.LOGIN, {
        email,
        password,
      });
      login(response.data.token);
      setSuccess("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      setError(
        error.response?.status === 401
          ? "Invalid email or password"
          : "An error occurred. Please try again later."
      );
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const successSpring = useSpring({
    opacity: success ? 1 : 0,
    transform: success ? "scale(1)" : "scale(0.5)",
    config: { tension: 170, friction: 26 },
  });

  const errorSpring = useSpring({
    opacity: error ? 1 : 0,
    transform: error ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 220, friction: 12 },
  });

  return (
    <>
      <Navbar />
      <div className="font-[sans-serif] text-[#333] -my-32 flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 h-screen">
        {error && (
          <animated.div
            style={errorSpring}
            className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-xl flex items-center justify-between w-[80%] sm:w-[40%] max-w-md z-50"
          >
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0zM12 8v4m0 4h.01"
                ></path>
              </svg>
              <span>{error}</span>
            </div>
            <button
              onClick={() => setError("")}
              className="text-lg font-bold ml-4 hover:text-gray-200 transition duration-150"
            >
              &times;
            </button>
          </animated.div>
        )}

        {success && (
          <animated.div
            style={successSpring}
            className="fixed top-8 left-1/2 transform -mx-40 -translate-x-1/2 bg-gradient-to-r from-green-400 to-teal-500 text-white text-lg px-6 py-3 rounded-md shadow-2xl z-50 flex items-center justify-center"
          >
            <div className="flex items-center">
              <div className="animate-pulse">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2l4 -4"
                  ></path>
                </svg>
              </div>
              <span>{success}</span>
            </div>
          </animated.div>
        )}

        <div className="bg-gray-900 h-[40rem] -my-32 justify-items-center rounded-lg shadow-2xl p-8 max-w-lg w-full mx-auto transform transition-transform duration-500">
          <h3 className="text-4xl font-bold text-gray-800 mb-8">
            <img src={logo} alt="logo" className="w-24 mx-auto" />
          </h3>
          <form
            onSubmit={handleSubmit}
            className="mb-10 flex flex-col items-center "
          >
            <div className="mb-6 ">
              <label className="text-sm font-semibold text-yellow-500 block mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="w-[22rem] px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm font-semibold text-yellow-500 block mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="w-[22rem] px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute -mx-7 top-2 text-xl text-gray-500 hover:text-gray-700 transition duration-150"
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
            </div>
            <div className="mt-8">
              <button className="w-[10rem] -mx-8 py-3 px-6 bg-yellow-600 text-white font-bold rounded-md shadow-lg hover:bg-yellow-700 transition-all duration-200">
                Login
              </button>
              <Link
                to="/register"
                className="block text-center text-blue-600 font-semibold mt-4 hover:underline"
              >
                Don't have an account? Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
