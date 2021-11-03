import { ScrollView, SafeAreaView, StatusBar } from "react-native";
import { Text, View } from "react-native";
import { useRef } from "react";
import useBoolean from "../../../../../shared-hooks/use-boolean";
import LeftSidebar from "../../../../../ui/sidebar/left";
import RightSidebar from "../../../../../ui/sidebar/right";
import RegisterHero from "../../../../../modules/register/candidate/info/components/register-hero";
import { useForm } from "react-hook-form";
import RegisterFooter from "../../../../../ui/footer/register";

export default {
  ScrollView,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  useRef,
  useBoolean,
  LeftSidebar,
  RightSidebar,
  RegisterHero,
  useForm,
  RegisterFooter,
};
