import React from "react";

const ButtonSubmit = () => {
  return (
    <div className="w-[60%] flex items-center justify-center">
      <button className="w-full text-center text-white font-semibold cursor-pointer py-2 bg-blue-600 rounded-xl hover:bg-blue-600/55 hover:shadow-lg hover:shadow-blue-950 transition-all duration-200 ">
        Add product
      </button>
    </div>
  );
};

export default ButtonSubmit;
