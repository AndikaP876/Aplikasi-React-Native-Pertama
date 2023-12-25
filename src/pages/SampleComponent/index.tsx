import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Andika</Text>
      <Prasetya />
      <Text>Andika</Text>
      <Text>Andika</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Prasetya = () => {
  return <Text>Prasetya andika andika</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Ahmad_Yani.jpg',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render(): React.ReactNode {
    return (
      <View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Joko_Widodo_2019_official_portrait.jpg',
          }}
          style={{width: 100, height: 100}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini presiden</Text>
      </View>
    );
  }
}

export default SampleComponent;
