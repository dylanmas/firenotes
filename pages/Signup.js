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
      <InputField value="Password" onTextChange={(e) => console.log(e)} />

      <Button
        //onPress={logIn}
        //textStyle={{ fontFamily: "AvenirNextCondensed-Medium" }}
        title="Sign in"
        backgroundColor="black"
      />

      <View style={{ flexDirection:'row', flexWrap:'wrap'}}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "AvenirNextCondensed-Medium",
          }}
        >
          No account? {<Text style={{fontWeight: "600", fontStyle: "italic"}}>Create one here.</Text>}
        </Text>

      </View>
    </View>
  );
};

export default Signup;
