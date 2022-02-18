import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Button, TextInput, View } from 'react-native-web'

const NoteEdit = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFEAB5",
      }}
    >
      <TouchableOpacity
        title="Back"
        style={{
          borderRadius: 15,
          left: 0,
          position: "absolute",
          marginLeft: 20,
          width: 75,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{fontSize: 20}}>Back</Text>
      </TouchableOpacity>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{
          height: "100%",
          backgroundColor: "white",
          width: "90%",
          marginTop: 27,
          marginBottom: 10,
          borderRadius: 10,
        }}
      ></TextInput>
    </View>
  );
}

export default NoteEdit