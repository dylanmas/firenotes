import React, { useEffect, useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { FiArrowLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/UserReducer";
import { setDocs, fetchNotes } from "../firebase/userfunctions";

const NoteEdit = ({ navigation }) => {
  const [text, setText] = useState("");

  const user = useSelector(selectUser);
  const onBack = () => {
    setDocs(user.uid, text);
    navigation.navigate("Home");
  };

  useEffect(() => {
    fetchNotes(user.uid).then((snap) => {
      if(snap.length >= 1){
        setText(snap[0].note)
      }
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFEAB5",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          left: 0,
          top: 5,
          width: 50,
          height: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={onBack}
      >
        <FiArrowLeft style={{ width: "100%", height: "100%" }} />
      </TouchableOpacity>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{
          height: "100%",
          backgroundColor: "white",
          width: "90%",
          marginTop: 35,
          marginBottom: 20,
          borderRadius: 10,
          padding: 10,
        }}
        onChangeText={(e) => setText(e)}
        value={text}
      ></TextInput>
    </View>
  );
};

export default NoteEdit;
