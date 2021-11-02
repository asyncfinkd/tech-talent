import LoginScreen from "../screens/login";
import AppLoading from "expo-app-loading";
import RegisterCandidateScreen from "../screens/register/candidate";
import RegisterScreen from "../screens/register";
import IndexScreen from "../screens/index";
import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { APP__TOKEN__MOCKS__ } from "../mocks/_app";
import { ApplicationContext } from "../context/application";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default {
  LoginScreen,
  AppLoading,
  RegisterCandidateScreen,
  RegisterScreen,
  IndexScreen,
  useState,
  createStackNavigator,
  NavigationContainer,
  APP__TOKEN__MOCKS__,
  ApplicationContext,
  AsyncStorage,
  useEffect,
};
