import React from "react";
import { TextProps } from "types/components/text-container";
import { Children } from "types/global";

type Props = TextProps & Children;

const TextContainer: React.FC<Props> = ({ children, element, className }) => {
  return (
    <>{React.createElement(element, { className: className }, children)}</>
  );
};

export default TextContainer;
