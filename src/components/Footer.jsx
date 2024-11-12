import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className=" mt-10 ">
      <hr className="border-t border-gray-300" />

      <footer className="p-4 flex justify-center items-center flex-wrap">
        <p className="text-center text-gray-600 font-medium  mt-2">
          {/* Copyright &copy; 2024. All rights reserved. */}
          {t("footerText")}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
