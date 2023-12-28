import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IlustrationMyApp from '../../assets/image/illustration_my_app.svg';

export default function ReactNativeSvg() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi menggunakan file SVG didalam React Native
      </Text>
      <IlustrationMyApp width={244} height={125} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
