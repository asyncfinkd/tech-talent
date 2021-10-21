import React from "react";
import { Children } from "types/global";
import { MessageProps } from "types/components/error-message";

type Props = Children & MessageProps;

const ErrorMessage: React.FC<Props> = ({
  children,
  className,
  element,
  condition,
}) => {
  return (
    <>
      {condition && (
        <>{React.createElement(element, { className: className }, children)}</>
      )}
    </>
  );
};

export default ErrorMessage;
