import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const LanguageDetectorComponent = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", language: "English" },
    { code: "ur", language: "Urdu" },
  ];

  const handleLangChange = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ur");
    } else {
      i18n.changeLanguage("en");
    }
  };

  // useEffect(() => {
  //   document.body.dir = i18n.dir();
  // }, [i18n, i18n.language]);

  return (
    <div className="flex justify-center items-center gap-5">
      <FontAwesomeIcon
        className="cursor-pointer"
        icon={faGlobe}
        onClick={handleLangChange}
      />
      {/* {languages.map((lng) => (
        <button
          className={`px-4 py-2 rounded border-2 border-gray-700 ${
            lng.code === i18n.language ? "bg-black text-white" : ""
          } `}
          key={lng.code}
          onClick={() => handleLangChange(lng.code)}
        >
          {lng.language}
        </button>
      ))} */}
    </div>
  );
};

export default LanguageDetectorComponent;
