import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function CallAPIvanilla() {
  useEffect(() => {
    // Call API method GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));

    // Call API method POST
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    console.log('data object: ', dataForAPI);
    console.log('data stringify: ', JSON.stringify(dataForAPI));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response: ', json);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan vanillaJS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
