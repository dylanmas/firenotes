import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
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

const Signup = () => {
  useEffect(() => {
    console.log("e")
  }, [])

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
      <InputField value="Password" onTextChange={(e) => console.log(e)}/>

      <Button
        //onPress={logIn}
        //textStyle={{ fontFamily: "AvenirNextCondensed-Medium" }}
        title="Sign up"
        backgroundColor="black"
      />
    </View>
  );
};

export default Signup;
