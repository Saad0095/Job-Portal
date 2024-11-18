import React from "react";
import { SkewLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <SkewLoader />
    </div>
  )
};
export default Loading;
