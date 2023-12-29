import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

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
export default function LocalAPI() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    axios.post('http://10.0.2.2:3000/users', data).then(res => {
      console.log('res: ', res);
      setName('');
      setEmail('');
      setBidang('');
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text>Masukan Anggota Kabayan Coding</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={value => setBidang(value)}
      />
      <Button title="Simpan" onPress={submit} />
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
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
