import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { app } from "../firebase/config";
import InputField from "../components/InputField";
import { NavigationContainer } from "@react-navigation/native";

import logo from "../assets/logo.png";
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEAB5",
  },
});

function Home() {
  return (
    <View>
     <Text>Home</Text>
    </View>
  <View style={Styles.Container}>
    <Text>Home</Text>
  </View>
  );
}

export default Home;