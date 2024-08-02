import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      formData.message.trim() === ""
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
      <h1 className="text-center font-bold text-3xl m-3">Contact Us</h1>
      <p className="text-center text-gray-600 m-3">
        We will get back to you soon!
      </p>
      <form action="" className="mx-auto w-3/4 md:w-1/2 mt-10">
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
          <label htmlFor="message" className="font-semibold mb-2">
            Message: *
          </label>
          <textarea
            value={formData.message}
            name="message"
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 text-sm bg-gray-50 outline-blue-500"
            type="text"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold px-10 py-2 mx-auto my-6 rounded flex items-center justify-center"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
