import { useContext, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  ScrollView,
  Text,
  View,
  Animated,
  TextInput,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import jwt_decode from "jwt-decode";
import { ApplicationContext } from "../../../context/application";
import useBoolean from "../../../shared-hooks/use-boolean";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../../ui/header";
import LeftSidebar from "../../../ui/sidebar/left";
import RightSidebar from "../../../ui/sidebar/right";
import Footer from "../../../ui/footer";

export default {
  useContext,
  useRef,
  useState,
  useForm,
  Controller,
  ScrollView,
  Text,
  View,
  Animated,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  jwt_decode,
  ApplicationContext,
  useBoolean,
  AsyncStorage,
  Header,
  LeftSidebar,
  RightSidebar,
  Footer,
  StatusBar,
};
