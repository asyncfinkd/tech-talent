import Link from "next/link";
import { useForm, get, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ManagerRegisterSchema } from "schema/manager/register";
import { useRouter } from "next/router";
import CryptoAES from "crypto-js/aes";
import { useEffect, useContext } from "react";
import { Form } from "fixtures/register/company";
import { ErrorMessage } from "components/error-message";
import { ApplicationContext } from "context/application/ApplicationContext";

export default {
  Link,
  useForm,
  yupResolver,
  ManagerRegisterSchema,
  useRouter,
  CryptoAES,
  useEffect,
  get,
  useFormContext,
  useContext,
  Form,
  ErrorMessage,
  ApplicationContext,
};
