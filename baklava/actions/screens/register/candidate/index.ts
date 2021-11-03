import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import RegisterCandidateModules from "../../../../modules/register/candidate";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApplicationContext } from "../../../../context/application";
import RegisterFooter from "../../../../ui/footer/register";

export default {
  useContext,
  useState,
  useForm,
  View,
  RegisterCandidateModules,
  jwt_decode,
  AsyncStorage,
  ApplicationContext,
  RegisterFooter,
};
