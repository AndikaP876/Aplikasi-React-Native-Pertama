import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function LocalAPI() {
  const Item = () => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{uri: 'https://i.pravatar.cc/100?u=andika@pravatar.com'}}
          style={styles.avatar}
        />
        <View style={styles.desc}>
          <Text style={styles.descName}>Nama Lengkap</Text>
          <Text style={styles.descEmail}>Email</Text>
          <Text style={styles.descBidang}>Bidang</Text>
        </View>
        <Text style={styles.delete}>X</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text>Masukan Anggota Kabayan Coding</Text>
      <TextInput placeholder="Nama Lengkap" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Bidang" style={styles.input} />
      <Button title="Simpan" />
      <View style={styles.line} />
      <Item />
      <Item />
      <Item />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 25,
  },
  avatar: {width: 80, height: 80, borderRadius: 100},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'}
});
