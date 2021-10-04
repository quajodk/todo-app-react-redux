import React from "react";
import { AiOutlineReconciliation } from "react-icons/ai";

interface Props {}

const Loader = (props: Props) => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <AiOutlineReconciliation
        size={100}
        className="text-blue-500 animate-bounce shadow-2xl"
      />
    </div>
  );
};

export default Loader;
