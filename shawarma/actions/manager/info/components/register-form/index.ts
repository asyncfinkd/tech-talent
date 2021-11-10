import { useRouter } from "next/router";
import { Form } from "fixtures/register/manager/info";
import { useForm, get, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "schema/register/manager/info";
import { ErrorMessage } from "components/error-message";

export default {
  useRouter,
  Form,
  useForm,
  get,
  useFormContext,
  yupResolver,
  schema,
  ErrorMessage,
};
