import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

const HomeCard = () => {
  return (
    <TouchableOpacity
      style={{
        fontWeight: "200",
        color: "white",
        fontSize: 25,
        marginTop: 10,
        fontFamily: "AvenirNextCondensed-Medium",
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#FFFCE0",
        width: "42.5%",
        marginLeft: "2.5%",
        height: "20%",
        display: "flex",
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
    >
      <Text
        style={{
          color: "#504801",
          textAlign: "left",
          fontFamily: "AvenirNextCondensed-Medium",
          fontSize: 15,
          fontWeight: "300",
          marginVertical: 5,
          margin: 10,
        }}
      >
        Tap here to take a quick note...
      </Text>
    </TouchableOpacity>
  );
}

export default HomeCard