import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { auth, signInWithEmailAndPassword } from "../firebase/config";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/UserReducer";

import logo from "../assets/logo.png";
import FormButton from "../components/FormButton";
import { fetchUser } from "../firebase/userfunctions";
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEAB5",
  },
});

const Login = ({ navigation }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const dispatch = useDispatch();

  const onSignin = () => {
    
    signInWithEmailAndPassword(auth, inputEmail, inputPassword).then(user => {
      console.log(user)
      dispatch(login(user.user))
      navigation.navigate("Home")
      fetchUser(user.user.uid)
    }).catch(err => {
      if(err){
        console.log(err.message)
      }
    })
  }

  return (
    <View style={Styles.Container}>
      <Image source={logo} style={{ width: 50, height: 70 }} />
      <Text
        style={{
          fontSize: 60,
          fontWeight: "bold",
          fontFamily: "AvenirNextCondensed-Medium",
          color: "#504801",
        }}
      >
        FireNotes
      </Text>

      <InputField value="Email" onChange={(e) => setInputEmail(e)} />
      <InputField value="Password" onChange={(e) => setInputPassword(e)} />

      <FormButton text="Sign in" event={onSignin} />

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "AvenirNextCondensed-Medium",
            color: "#504801",
          }}
        >
          No account?{" "}
        </Text>
        <TouchableOpacity
          style={{
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text
            style={{
              fontWeight: "600",
              fontStyle: "italic",
              color: "purple",
              fontSize: 18,
              fontFamily: "AvenirNextCondensed-Medium",
            }}
          >
            Create one here.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
