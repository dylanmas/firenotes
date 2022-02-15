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
      <Text style={{
        fontSize: 45,
        fontWeight: "bold",
        backgroundColor: "red",
        width: "100%",
        textAlign: "center"
      }}>Home</Text>

      <View style={{
        backgroundColor: "blue",
        width: "100%",
        height: "95%",
      }}>
        <View style={{backgroundColor: "green", marginHorizontal: 10, width: "100%",
       height: "100%"}}>

        </View>
      </View>
    </View>
  );
}

export default Home;