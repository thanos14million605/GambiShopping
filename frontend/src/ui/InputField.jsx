import React from "react";

const InputField = ({ placeholder, onChange, value }) => {
  return (
    <div className="w-full md:w-[80%] flex">
      <input
        type="text"
        className="text-xl text-gray-300 w-full rounded-xl border-gray-500 border-[1.5px] py-2 px-4 outline-none focus:border-blue-600 placeholder:text-lg placeholder:text-gray-400"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
