import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    file:""
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
      formData.address.trim() === ""
    ) {
      setErrorMsg("*Please fill out the required fields");
    } else if (formData.name.trim().length < 4) {
      setErrorMsg("*Name must contain atleast 4 characters");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg("*Invalid Email Address");
    } else {
      setErrorMsg(null);
      alert("Your response have been submitted");
      navigate("/");
    }
  };

  return (
    <div className="my-10">
      <form action="" className="mx-auto w-3/4 lg:w-1/2 mt-10 border-2 border-gray-400 shadow-md p-10 rounded-lg">
        <p className="text-red-500">{errorMsg}</p>
        <div className="flex flex-col w-full my-4">
          <label htmlFor="name" className="font-semibold mb-2">
            Name: *
          </label>
          <input
            value={formData.name}
            name="name"
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 text-sm bg-gray-50 outline-blue-500"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full my-4">
          <label htmlFor="email" className="font-semibold mb-2">
            Email: *
          </label>
          <input
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 text-sm bg-gray-50 outline-blue-500"
            type="email"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="address" className="font-semibold mb-2">
            Address: *
          </label>
          <input
            value={formData.address}
            name="address"
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 text-sm bg-gray-50 outline-blue-500"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full mt-2">
          <label htmlFor="address" className="font-semibold mb-2">
            Select you Resume: *
          </label>
          <input
            value={formData.file}
            name="file"
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 text-sm bg-gray-50 outline-blue-500"
            type="file"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold w-full mx-auto my-6 p-2 rounded flex items-center justify-center"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Apply;
