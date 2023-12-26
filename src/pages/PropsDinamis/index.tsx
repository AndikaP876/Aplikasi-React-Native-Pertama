import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View>
      <Text>materi component Dinamis dengan props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Youtube Channel"
            gambar="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/412678507_7050591225008300_6544270149188575259_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=On2iZOj63CQAX_MHaAr&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAik7SueYq8UmtjaXht8tUBmWpT3cpmdmCmqWODLNc8SQ&oe=658FA951&_nc_sid=8b3546"
          />
          <Story
            judul="Kelas Online"
            gambar="https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/313101984_513111573730246_7943913632041072117_n.webp?stp=c0.420.1080.1080a_dst-jpg_e35_s150x150&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=110&_nc_ohc=ENjZaRqOo1AAX9Jckq7&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfCGXNrjOcpPZz9D1gG4O7Wg4_Oi-Ztyy2JWg3mhRETkkA&oe=658CB08D&_nc_sid=94fea1"
          />
          <Story
            judul="Kabayan Coding"
            gambar="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/125347971_701340560494799_2225187703704110193_n.jpg?stp=c0.311.720.720a_dst-jpg_e35_s150x150&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pf4nWRQHbKwAX9foptR&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfDtJJyHwUykREIvOSOcnu4Nx7VLPCNNydFpkjWw40glyA&oe=658C9636&_nc_sid=94fea1"
          />
          <Story
            judul="Shoot"
            gambar="https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/396776404_1668008580356038_6246785597480632111_n.webp?stp=c0.420.1080.1080a_dst-jpg_e35_s150x150&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=110&_nc_ohc=7rfCe_egBgkAX93KZ9I&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfCG51BM6BgX-TWI6GkkSLFT6rMDjyFrD-GTyUlacqmWyQ&oe=658C9776&_nc_sid=94fea1"
          />
          <Story
            judul="Food"
            gambar="https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/326780463_131034989846326_7646025989402930954_n.jpg?stp=c0.623.1080.1080a_dst-jpg_e35_s150x150&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=110&_nc_ohc=99ubj_85O7YAX-SGglV&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfDxodVAU_2rcrrpSapxxig-aSM3o7913Q6OaZ-qYuKfvQ&oe=658C5EEF&_nc_sid=94fea1"
          />
          <Story
            judul="Tamiya"
            gambar="https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/309063789_198721715926429_6190481609730200415_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=101&_nc_ohc=qqopntvLo3oAX-n6efN&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfBosNHs8-OoLwhvs9ZxRKqIWfbvL3YQ7soE3QBRZe2PAQ&oe=65907E16&_nc_sid=94fea1"
          />
          <Story
            judul="Valorant"
            gambar="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/367526095_842279164129391_6345642911351463282_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=nhhcXvLlTRAAX9Kb0K1&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfCiHEEmZG8ljorggqmq6Ln1jTEs_B-IB08mmoPGwwNlyQ&oe=658FBF9C&_nc_sid=94fea1"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
