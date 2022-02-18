import React from 'react'
import { Text } from 'react-native'
import { TextInput, View } from 'react-native-web'

const NoteEdit = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFEAB5",
      }}
    >
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{
          height: "100%",
          backgroundColor: "white",
          width: "90%",
          marginTop: 30,
          marginBottom: 10,
          borderRadius: 10,
        }}
      ></TextInput>
    </View>
  );
}

export default NoteEdit