import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  const { t, i18n } = useTranslation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Listen to language change events
    const handleLanguageChange = () => {
      setKey(prevKey => prevKey + 1); // Update key to re-render the TypeAnimation component
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div>
      <h1 className={`font-bold mb-10 text-green-950 text-center  ${
              i18n.language === "ur" ? "text-xl sm:text-3xl" : "text-3xl sm:text-5xl "
            }`}>
        <TypeAnimation
          key={key}
          sequence={[
            t("text_animation.find_your_dream_job"),
            5000,
            t("text_animation.discover_your_ideal_role"),
            5000,
            t("text_animation.land_the_job_you_deserve"),
            5000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
    </div>
  );
};

export default TextAnimation;
