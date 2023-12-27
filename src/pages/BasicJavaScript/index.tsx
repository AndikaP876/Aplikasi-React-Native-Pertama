import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function BasicJavascript() {
  // Tipe data

  //primitive
  const nama = 'andika prasetya'; // string
  let usia = 21; // number
  const apakahLakilaki = true; // boolean

  //complex
  const hewanPeliharaan = {
    nama: 'miaw',
    jenis: 'kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'kaisar',
      betina: 'kuin',
    },
  }; // object

  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia anda ${age}`); // Hello andika usia anda 21
  }; // function

  sapaOrang('andika', 21);

  const namaOrang = ['andika', 'mila', 'azam', 'hudoro', 'muhammad', 'ryan']; // object - array

  typeof namaOrang; // object

  //   if (hewanPeliharaan.nama === 'Miaw') {
  //     console.log('hallo miaw');
  //   } else {
  //     console.log('hewan siapa ini');
  //   }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'hallo miaw, apa kabar';
    // } else {
    //   hasilSapa = 'ini hewan siapa';
    // }
    // return hasilSapa;
    return objectHewan.nama === 'miaw'
      ? 'hallo miaw, apa kabar'
      : 'ini hewan siapa';
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di react native
      </Text>
      <Text>Name : {nama}</Text>
      <Text>Age : {usia}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      <Text>=================</Text>
      {namaOrang.map(orang => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
