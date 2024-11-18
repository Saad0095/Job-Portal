import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apply = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      setErrorMsg(t("apply.errorFillFields"));
    } else if (formData.name.trim().length < 4) {
      setErrorMsg(t("apply.errorNameLength"));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg(t("apply.errorInvalidEmail"));
    } else {
      setErrorMsg(null);
      toast.success(t("apply.success"));
      setTimeout(() => {
        navigate("/confirmedapplication");
      }, 1500); // Delay navigation to allow toast to show
    }
  };

  return (
    <div className="my-10 mx-auto max-w-4xl px-6">
      <ToastContainer position="top-center" />
      <form
        className="mx-auto w-full md:w-3/4 my-10 md:border-2 border-gray-200 sm:shadow-lg p-8 rounded-lg bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold text-3xl md:text-4xl text-green-700 mb-5">
          {t("apply.title")}
        </h1>
        <p className="text-center text-gray-500 mb-6">
          {t("apply.description")}
        </p>
        {errorMsg && (
          <p className="text-red-500 text-center text-sm mb-4">{errorMsg}</p>
        )}
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="name" className="font-semibold mb-2 text-gray-700">
            {t("apply.name")}:
          </label>
          <input
            value={formData.name}
            name="name"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200"
            type="text"
            placeholder={t("apply.namePlaceholder")}
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="email" className="font-semibold mb-2 text-gray-700">
            {t("apply.email")}:
          </label>
          <input
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200"
            type="email"
            placeholder={t("apply.emailPlaceholder")}
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="address" className="font-semibold mb-2 text-gray-700">
            {t("apply.address")}:
          </label>
          <input
            value={formData.address}
            name="address"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 text-sm bg-gray-50 outline-none focus:border-green-500 transition duration-200"
            type="text"
            placeholder={t("apply.addressPlaceholder")}
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="file" className="font-semibold mb-2 text-gray-700">
            {t("apply.file")}:
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
        >
          {t("apply.button")}
        </button>
      </form>
    </div>
  );
};

export default Apply;
