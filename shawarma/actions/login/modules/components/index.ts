import { Button } from "components/button";
import { schema } from "schema/login";
import { ErrorMessage } from "components/error-message";
import { LoginRequest } from "features/login/login.api";
import { ApplicationContext } from "context/application/ApplicationContext";
import { LoginInputs } from "fixtures/login";
import { loading } from "constants/app/strings";
import SVG from "react-inlinesvg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import Link from "next/link";
import { useRouter } from "next/router";

export default {
  Button,
  LoginInputs,
  schema,
  ErrorMessage,
  LoginRequest,
  ApplicationContext,
  loading,
  SVG,
  useForm,
  yupResolver,
  useMutation,
  Link,
  useRouter,
};
