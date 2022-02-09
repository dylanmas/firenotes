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
import FormButton from "../components/FormButton";
import logo from "../assets/logo.png"
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEAB5",
  },
});

const Signup = ({ navigation }) => {
  useEffect(() => {
    console.log("e");
  }, []);

  const onSignup = () => {
    console.log("e")
  }
  
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
      <InputField value="Password" onChange={(e) => console.log(e)} />

      <FormButton text="Sign up" event={onSignup} />

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "AvenirNextCondensed-Medium",
            color: "#504801",
          }}
        >
          Have an account?{" "}
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
            onPress={navigation.navigate("Home")}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
