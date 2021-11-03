import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import RegisterCandidateModules from "../../../../modules/register/candidate";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApplicationContext } from "../../../../context/application";

export default {
  useContext,
  useState,
  useForm,
  View,
  RegisterCandidateModules,
  jwt_decode,
  AsyncStorage,
  ApplicationContext,
};
