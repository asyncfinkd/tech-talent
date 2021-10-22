import React from "react";
import { ButtonProps } from "types/components/button";
import { Children } from "types/global";

type Props = ButtonProps & Children;

export const Button: React.FC<Props> = ({
  children,
  type,
  style,
  onClick,
  className,
}) => {
  return (
    <>
      <button className={className} type={type} style={style} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
