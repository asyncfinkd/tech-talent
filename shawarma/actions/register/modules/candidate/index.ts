import Header from "ui/header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApplicationContext } from "context/application/ApplicationContext";
import { RegisterRequest } from "features/register/register.api";
import { useMutation } from "react-query";
import RegisterCandidatePagesFooter from "modules/register/candidate/components/register-footer";
import RegisterHeader from "modules/register/candidate/components/register-header";
import RegisterForm from "modules/register/candidate/components/register-form";
import { useContext, useEffect, useState } from "react";
import RegisterFooter from "ui/footer/register";
import Head from "next/head";
import { RegisterSchema } from "schema/register/candidate";
import { useRouter } from "next/router";

export default {
  Header,
  useForm,
  yupResolver,
  ApplicationContext,
  RegisterRequest,
  useMutation,
  RegisterCandidatePagesFooter,
  RegisterHeader,
  RegisterForm,
  useContext,
  useEffect,
  useState,
  RegisterFooter,
  Head,
  RegisterSchema,
  useRouter,
};
