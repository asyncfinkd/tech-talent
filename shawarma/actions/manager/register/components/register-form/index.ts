import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ManagerRegisterSchema } from "schema/manager/register";

export default {
  Link,
  useForm,
  yupResolver,
  ManagerRegisterSchema,
};
