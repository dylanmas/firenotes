import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { app } from "../firebase/config";
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEAB5",
  },
});

const Signup = () => {
  const [userName, SetUserName] = useState("");
  return (
    <View style={Styles.Container}>
      <TextInput
        style={{
          height: 40,
          borderRadius: 10,
          backgroundColor: "#FFFCE0",
          width: "90%",
          padding: 10,
          color: "#504801",
          fontSize: 20,
          shadowColor: "#171717",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginBottom: 10,
        }}
        placeholder="Username"
        defaultValue={userName}
        onChangeText={(e) => SetUserName(e)}
      />

      <TextInput
        style={{
          height: 40,
          borderRadius: 10,
          backgroundColor: "#FFFCE0",
          width: "90%",
          padding: 10,
          color: "#504801",
          fontSize: 20,
          shadowColor: "#171717",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginBottom: 10,
        }}
        placeholder="Password"
        defaultValue={userName}
        onChangeText={(e) => SetUserName(e)}
      />
    </View>
  );
};

export default Signup;
