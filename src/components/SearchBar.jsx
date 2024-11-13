import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const SearchBar = ({ searchQuery, handleSearchQuery, handleLocationQuery }) => {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <FontAwesomeIcon
            icon={faSearch}
            className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 ${
              i18n.language === "ur" ? "right-3" : "left-3"
            }`}
          />
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={handleSearchQuery}
            className={`border rounded-lg border-gray-300 p-3  w-full h-12 focus:outline-none focus:border-green-500 shadow-md transition-all duration-300 ease-in-out ${
              i18n.language === "ur"
                ? "rounded-l-none pr-10"
                : "rounded-r-none pl-10"
            }`}
          />
        </div>
        <div className="relative">
          <select
            name=""
            id=""
            className={`border rounded-lg border-gray-300 w-full h-12 focus:outline-none focus:border-green-500 shadow-md transition-all duration-300 ease-in-out ${
              i18n.language === "ur"
                ? "rounded-r-none pr-14"
                : " rounded-l-none pl-14"
            }`}
            onChange={handleLocationQuery}
          >
           <option value="">{t("locationOptions.all")}</option>
            <option value="Remote">{t("locationOptions.remote")}</option>
            <option value="Karachi">{t("locationOptions.karachi")}</option>
            <option value="Lahore">{t("locationOptions.lahore")}</option>
            <option value="Islamabad">{t("locationOptions.islamabad")}</option>
            <option value="Faisalabad">{t("locationOptions.faisalabad")}</option>
            <option value="Multan">{t("locationOptions.multan")}</option>
            <option value="Sharjah">{t("locationOptions.sharjah")}</option>
            <option value="Abu Dhabi">{t("locationOptions.abuDhabi")}</option>
            <option value="San Francisco">{t("locationOptions.sanFrancisco")}</option>
            <option value="Texas">{t("locationOptions.texas")}</option>
          </select>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 px-4 ${
              i18n.language === "ur" ? " right-2" : " left-2"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
