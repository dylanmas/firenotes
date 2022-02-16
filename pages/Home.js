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
            fontWeight: "200",
            color: "white",
            fontSize: 25,
            marginTop: 20,
            fontFamily: "AvenirNextCondensed-Medium",
            margin: 10,
            borderRadius: 5,
            backgroundColor: "#FFFCE0",
            width: "90%",
            height: "30%",
            display: "flex",
            shadowColor: "#171717",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <Text
            style={{
              color: "#504801",
              textAlign: "left",
              fontFamily: "AvenirNextCondensed-Medium",
              fontSize: 15,
              fontWeight: "300",
              marginVertical: 5,
              margin: 10,
            }}
          >
            Tap here to take a quick note...
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "AvenirNextCondensed-Medium",
            fontSize: 20,
            fontWeight: "400",
            width: "100%",
            top: 5,
            textAlign: "center",
          }}
        >
          Saved
        </Text>

        <View style={{ marginHorizontal: 10, width: "100%", height: "100%", flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              fontWeight: "200",
              color: "white",
              fontSize: 25,
              marginTop: 10,
              fontFamily: "AvenirNextCondensed-Medium",
              margin: 10,
              borderRadius: 5,
              backgroundColor: "#FFFCE0",
              width: "42.5%",
              marginLeft: "5%",
              height: "20%",
              display: "flex",
              shadowColor: "#171717",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <Text
              style={{
                color: "#504801",
                textAlign: "left",
                fontFamily: "AvenirNextCondensed-Medium",
                fontSize: 15,
                fontWeight: "300",
                marginVertical: 5,
                margin: 10,
              }}
            >
              Tap here to take a quick note...
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              fontWeight: "200",
              color: "white",
              fontSize: 25,
              marginTop: 10,
              fontFamily: "AvenirNextCondensed-Medium",
              margin: 10,
              borderRadius: 5,
              backgroundColor: "#FFFCE0",
              width: "42.5%",
              marginLeft: "2.5%",
              height: "20%",
              display: "flex",
              shadowColor: "#171717",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <Text
              style={{
                color: "#504801",
                textAlign: "left",
                fontFamily: "AvenirNextCondensed-Medium",
                fontSize: 15,
                fontWeight: "300",
                marginVertical: 5,
                margin: 10,
              }}
            >
              Tap here to take a quick note...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;
