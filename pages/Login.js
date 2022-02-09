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

const Login = () => {
  useEffect(() => {
    console.log("e");
  }, []);

  return (
    <View style={Styles.Container}>
      <Image source={logo} style={{ width: 50, height: 70 }} />
      <Text
        style={{
          fontSize: 60,
          fontWeight: "bold",
          fontFamily: "AvenirNextCondensed-Medium",
          color: "#504801",
        }}
      >
        FireNotes
      </Text>

      <InputField value="Email" onChange={() => {}} />
      <InputField value="Password" onChange={() => {}} />

      <TouchableOpacity
        style={{
          fontWeight: "600",
          color: "white",
          fontSize: 25,
          fontFamily: "AvenirNextCondensed-Medium",
          margin: 10,
          borderRadius: 5,
          backgroundColor: "#FFFCE0",
          width: "76%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          shadowColor: "#171717",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{
            color: "#504801",
            textAlign: "center",
            fontFamily: "AvenirNextCondensed-Medium",
            fontWeight: "600",
            fontSize: 20,
            marginVertical: 5,
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "AvenirNextCondensed-Medium",
            color: "#504801",
          }}
        >
          No account?{" "}
        </Text>
        <TouchableOpacity
          style={{
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontStyle: "italic",
              color: "purple",
              fontSize: 18,
              fontFamily: "AvenirNextCondensed-Medium",
            }}
          >
            Create one here.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
