import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { app } from "../firebase/config";
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

const Signup = () => {
  const [userName, SetUserName] = useState('')
  return (
    <View style={Styles.Container}>
      <TextInput
        style={{ height: 40 , borderRadius: 10, backgroundColor: "#ff32ee", width: "100%", padding: 10, color: "white", fontSize: 20}}
        placeholder="Username"
        defaultValue={userName}
        onChangeText={(e) => SetUserName(e)}
      />
    </View>
  );
};

export default Signup;
