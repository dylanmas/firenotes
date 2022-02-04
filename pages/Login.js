import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { app } from "../firebase/config";
import InputField from "../components/InputField";

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEAB5",
  },
});

const Login = () => {
  return (
    <View style={Styles.Container}>
      <Text
        style={{
          fontSize: 60,
          fontWeight: "bold",
          fontFamily: "AvenirNextCondensed-Medium",
        }}
      >
        FireNotes
      </Text>

      <InputField value="Email" />
      <InputField value="Password" />

      <Button
        //onPress={logIn}
        //textStyle={{ fontFamily: "AvenirNextCondensed-Medium" }}
        title="Sign in"
        backgroundColor="black"
      />
    </View>
  );
};

export default Login;
