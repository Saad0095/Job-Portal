import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const LanguageChanger = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLangChange = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ur");
    } else {
      i18n.changeLanguage("en");
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="relative">
      <div
        className="flex gap-3 justify-center items-center font-semibold cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <button>{i18n.language === "en" ? "English" : "اردو"}</button>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute bg-white cursor-pointer mt-1 py-2 px-4 shadow-md min-w-full"
          onClick={handleLangChange}
        >
          {i18n.language === "en" ? "Urdu" : "انگریزی"}
        </div>
      )}
    </div>
  );
};

export default LanguageChanger;
