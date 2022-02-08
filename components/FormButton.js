import { Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";

const FormButton = ({ text, event }) => {
  return (
    <TouchableOpacity
      style={{
        fontWeight: "600",
        color: "white",
        fontSize: 25,
        fontFamily: "AvenirNextCondensed-Medium",
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#FFFCE0",
        width: "76%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
      onPress={event}
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
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;
