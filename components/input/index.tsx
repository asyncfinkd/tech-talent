import React from "react";
import { InputProps } from "types/components/input";

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
  ...props
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...props}
      />
    </>
  );
};

export default Input;
