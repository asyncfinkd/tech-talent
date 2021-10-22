import React from "react";
import { FieldError } from "react-hook-form";

export interface MessageProps {
  className?: string;
  element?: React.ReactNode | any;
  condition?: FieldError | boolean;
}
