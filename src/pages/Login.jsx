import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
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
      setErrorMsg(t("login.errorFillFields"));
      toast.error(t("login.errorFillFields"));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg(t("login.errorInvalidEmail"));
      toast.error(t("login.errorInvalidEmail"));
    } else if (formData.password.trim().length < 8) {
      setErrorMsg(t("login.errorPasswordLength"));
      toast.error(t("login.errorPasswordLength"));
    } else {
      setErrorMsg(null);
      toast.success(t("login.success"));
      login();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="my-10 h-[70vh] flex flex-col justify-center items-center">
      <ToastContainer position="top-center" />
      <form
        action=""
        className="mx-auto w-full md:w-1/2 lg:w-2/5 px-12 py-16 md:shadow-lg shadow-gray-400 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-green-700 font-bold text-3xl m-3">
          {t("login.title")}
        </h1>
        <p className="text-red-500">{errorMsg}</p>
        <div className="flex flex-col w-full my-4">
          <label htmlFor="email" className="font-semibold mb-2 ">
            {t("login.email")}:
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
            {t("login.password")}:
          </label>
          <div className="password-field relative">
            <input
              value={formData.password}
              name="password"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-sm bg-gray-50 outline-blue-500"
              type={showPassword ? "text" : "password"}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute hover:cursor-pointer ${
                i18n.language === "ur" ? "top-3 left-3" : "top-2 right-2"
              }`}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </span>
          </div>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 pt-3 pb-2 mx-auto my-6 rounded flex items-center justify-center"
          type="submit"
        >
          {t("login.button")}
        </button>
      </form>
    </div>
  );
};

export default Login;
