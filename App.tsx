/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import macbook from './macbook.png';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.Text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 12,
          }}>
          Rp. 25.000.000,-
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
});

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
        <Text style={{color: 'blue', fontSize: 24}}>Ini hewan</Text>
      </View>
    );
  }
}

export default App;
