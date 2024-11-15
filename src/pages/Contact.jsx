import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
      setErrorMsg(t("contactpage.errorFillFields"));
    } else if (formData.name.trim().length < 4) {
      setErrorMsg(t("contactpage.errorNameLength"));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg(t("contactpage.errorInvalidEmail"));
    } else {
      setErrorMsg(null);
      alert(t("contactpage.responseSubmitted"));
      navigate("/");
    }
  };

  return (
    <div className="my-10 mx-auto max-w-4xl px-6">
      <form className="bg-white sm:shadow-md rounded-lg p-8">
        <h1 className="text-center font-bold text-3xl md:text-4xl text-green-700 mb-3">
          {t("contactpage.contactUs")}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {t("contactpage.contactMessage")}
        </p>
        <p className="text-red-500 text-sm mb-4">{errorMsg}</p>
        <div className="flex flex-col w-full mb-6">
          <label htmlFor="name" className="font-semibold mb-2 text-gray-700">
            {t("contactpage.name")}:
          </label>
          <input
            value={formData.name}
            name="name"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200"
            type="text"
            placeholder={t("contactpage.name")}
          />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label htmlFor="email" className="font-semibold mb-2 text-gray-700">
            {t("contactpage.email")}:
          </label>
          <input
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200"
            type="email"
            placeholder={t("contactpage.email")}
          />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label htmlFor="message" className="font-semibold mb-2 text-gray-700">
            {t("contactpage.message")}:
          </label>
          <textarea
            value={formData.message}
            name="message"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200 h-32 resize-none"
            placeholder={t("contactpage.message")}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg w-full md:w-auto mx-auto block transition duration-200"
          onClick={handleSubmit}
        >
          {t("contactpage.submit")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
