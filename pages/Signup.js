import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { auth, createUserWithEmailAndPassword } from "../firebase/config";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
import logo from "../assets/logo.png"
import { useDispatch } from "react-redux";
import { signUp } from "../redux/reducers/UserReducer";
import {addUser} from "../firebase/userfunctions"

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEAB5",
  },
});

const Signup = ({navigation }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const dispatch = useDispatch();

  const onSignup = async () => {
    createUserWithEmailAndPassword(auth, inputEmail, inputPassword).then(async (user) => {
       const { uid, displayName, email } = user.user;
       dispatch(
         signUp({
           uid,
           displayName,
           email,
         })
       );
      navigation.navigate("Home")
      await addUser(user.user)
    }).catch(err => {
      if(err) {
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

      <FormButton text="Sign up" event={onSignup} />

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "AvenirNextCondensed-Medium",
            color: "#504801",
          }}
        >
          Have an account?{" "}
        </Text>
        <TouchableOpacity
          style={{
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("Login")}
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
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
