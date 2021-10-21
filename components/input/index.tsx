import React from "react";
import { InputProps } from "types/components/input";
import { useForm } from "react-hook-form";

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
  ...props
}) => {
  const { register } = useForm();
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
