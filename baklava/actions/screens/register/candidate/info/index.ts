import { View } from "react-native";
import RegisterCandidateInfoModules from "../../../../../modules/register/candidate/info";
import RegisterFooter from "../../../../../ui/footer/register";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { ApplicationContext } from "../../../../../context/application";

export default {
  View,
  RegisterCandidateInfoModules,
  RegisterFooter,
  useForm,
  AsyncStorage,
  jwt_decode,
  useContext,
  ApplicationContext,
};
