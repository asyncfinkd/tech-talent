import React from "react";
import { InputProps } from "types/components/input";

const Input: React.FC<InputProps> = ({ type, placeholder, className }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className={className} />
    </>
  );
};

export default Input;
