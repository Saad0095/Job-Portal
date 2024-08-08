import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      setErrorMsg("*Please fill out the required fields");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg("*Invalid Email Address");
    } else if (formData.password.trim().length < 8) {
      setErrorMsg("*Password must contain atleast 8 characters");
    } else {
      setErrorMsg(null);
      alert("Successfully Loggedin!");
      navigate("/");
      login();
    }
  };

  return (
    <div className="my-10 h-[70vh] flex flex-col justify-center items-center">
      <h1 className=" text-center text-green-700 font-bold text-3xl m-3">
        Login
      </h1>
      <form
        action=""
        className="mx-auto w-3/4 md:w-1/3"
        onSubmit={handleSubmit}
      >
        <p className="text-red-500">{errorMsg}</p>
        <div className="flex flex-col w-full my-4">
          <label htmlFor="email" className="font-semibold mb-2">
            Email:
          </label>
          <input
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 text-sm bg-gray-50 outline-blue-500"
            type="email"
          />
        </div>
        <div className="flex flex-col w-full my-4">
          <label htmlFor="password" className="font-semibold mb-2">
            Password:
          </label>
          <div className="password-field relative">
            <input
              value={formData.password}
              name="password"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-sm bg-gray-50 outline-blue-500"
              type={showPassword ? "text" : "password"}
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 hover:cursor-pointer">
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </span>
          </div>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-2 mx-auto my-6 rounded flex items-center justify-center"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
