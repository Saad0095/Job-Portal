import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    file: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.address.trim() === "" ||
      formData.file === ""
    ) {
      setErrorMsg("*Please fill out the required fields");
    } else if (formData.name.trim().length < 4) {
      setErrorMsg("*Name must contain at least 4 characters");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg("*Invalid Email Address");
    } else {
      setErrorMsg(null);
      navigate("/confirmedapplication");
    }
  };

  return (
    <div className="my-10 mx-auto max-w-4xl px-6">
      <form
        className="mx-auto w-full md:w-3/4 lg:w-1/2 mt-10 border-2 border-gray-200 shadow-lg p-8 rounded-lg bg-white"
      >
        <h1 className="text-center font-bold text-4xl text-green-700 mb-5">
          Apply Now
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please fill out the form below to apply for a position.
        </p>
        {errorMsg && (
          <p className="text-red-500 text-center text-sm mb-4">{errorMsg}</p>
        )}
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="name" className="font-semibold mb-2 text-gray-700">
            Name:*
          </label>
          <input
            value={formData.name}
            name="name"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200"
            type="text"
            placeholder="Your Full Name"
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="email" className="font-semibold mb-2 text-gray-700">
            Email:*
          </label>
          <input
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200"
            type="email"
            placeholder="Your Email Address"
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="address" className="font-semibold mb-2 text-gray-700">
            Address:*
          </label>
          <input
            value={formData.address}
            name="address"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200"
            type="text"
            placeholder="Your Current Address"
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="file" className="font-semibold mb-2 text-gray-700">
            Select Your Resume:*
          </label>
          <input
            name="file"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200"
            type="file"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full py-3 rounded-lg transition duration-200"
          onClick={handleSubmit}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Apply;
