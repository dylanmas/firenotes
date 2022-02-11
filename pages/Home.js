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
    alignItems: "center",
    backgroundColor: "#FFEAB5",
  },
});

function Home() {
  return (
    <View style={Styles.Container}>
      <Text
        style={{
          fontWeight: "700",
          top: 25,
          fontFamily: "AvenirNextCondensed-Medium",
          fontSize: 25,
          maxHeight: "10%"
        }}
      >
        Home
      </Text>
      <View style={{
        width: "100%",
        height: "90%",
        backgroundColor: "red",
        top: 25,
      }}>
        <TouchableOpacity style={{
          width: "10%",
          height: "20%",
          backgroundColor: "black",
        }}>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;