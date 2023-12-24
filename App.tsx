import React from "react";
import { Image, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: "#0abde3"}}/>
      <Text>Andika</Text>
      <Prasetya></Prasetya>
      <Text>Andika</Text>
      <Text>Andika</Text>
      <Photo/>
      <TextInput style={{borderWidth: 1}}/>
    </View>
  )
};

const Prasetya = () => {
  return <Text>Prasetya andika andika</Text>;
};

const Photo = () => {
  return (
    <Image 
      source={{uri: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Ahmad_Yani.jpg"}}
      style={{width: 100, height: 100}}
    />
  )
};

export default App;