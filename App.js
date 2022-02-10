import React from "react";
import { Home, Login, Signup } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();



const x = true;
export default function App() {
  return (
    <Login />
  );
}
