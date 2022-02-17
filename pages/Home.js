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
import HomeCard from "../components/HomeCard"
import { NavigationContainer } from "@react-navigation/native";

import logo from "../assets/logo.png";
import BigCard from "../components/BigCard";
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFEAB5",
  },
});




function Home({navigation}) {
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
        <BigCard navigation={navigation}/>

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

        <View
          style={{
            alignContent: "flex-start",
            marginHorizontal: 10,
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </View>
      </View>
    </View>
  );
}

export default Home;
