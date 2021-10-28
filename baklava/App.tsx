import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Header from "./ui/header";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
