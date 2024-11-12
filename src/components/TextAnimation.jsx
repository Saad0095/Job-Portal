import React from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-green-950 text-center">
        <TypeAnimation
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
