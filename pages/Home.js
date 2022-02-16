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
          fontFamily: "AvenirNextCondensed-Medium",
          fontSize: 30,
          fontWeight: "600",
          width: "100%",
          top: 20,
          textAlign: "center",
        }}
      >
        Home
      </Text>

      <View
        style={{
          width: "100%",
          height: "95%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            fontWeight: "600",
            color: "white",
            fontSize: 25,
            marginTop: 20,
            fontFamily: "AvenirNextCondensed-Medium",
            margin: 10,
            borderRadius: 5,
            backgroundColor: "#FFFCE0",
            width: "90%",
            height: "30%",
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
          ></Text>
        </TouchableOpacity>
        <View
          style={{ marginHorizontal: 10, width: "100%", height: "100%" }}
        ></View>
      </View>
    </View>
  );
}

export default Home;
