import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-green-950 text-center">
        <TypeAnimation
          sequence={[
            "Find Your Dream Job!",
            5000,
            "Discover Your Ideal Role!",
            5000,
            "Land the Job You Deserve!",
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
