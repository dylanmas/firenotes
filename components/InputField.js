import React from "react"
import { TextInput, View } from "react-native";

const InputField = ({value}) => {
    return (
      <TextInput
        style={{
          height: 40,
          borderRadius: 5,
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
          fontFamily: "AvenirNextCondensed-Medium",
        }}
        placeholder={value}
        onChangeText={onChange}
      />
    );
}

export default InputField;