import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: any;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
}) => {
  return (
    <>
      <button className={className} type={type}>
        {children}
      </button>
    </>
  );
};
