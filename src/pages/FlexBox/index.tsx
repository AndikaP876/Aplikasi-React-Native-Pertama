import {Component, ReactNode, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import React from 'react';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('===> constructor');
//     this.state = {
//       subscriber: 200,
//     };
//   }

//   componentDidMount(): void {
//     console.log('===> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate(): void {
//     console.log('===> component did update');
//   }

//   componentWillUnmount(): void {
//     console.log('===> component will unmount');
//   }

//   render(): ReactNode {
//     console.log('===> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#c8d6e5',
//             alignItems: 'flex-start',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={{
//               uri: 'https://yt3.googleusercontent.com/ytc/AIf8zZSVQuZVN2BPUfcDSxwDYVEqpqZKWmk68m2bJswTZk8=s176-c-k-c0x00ffffff-no-rj',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Prawito Hudoro
//             </Text>
//             <Text>{this.state.subscriber} ribu subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber('400');
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubscriber('400');
  //   }, 2000);
  // }, [subscriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
        <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
        <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
        <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={{
            uri: 'https://yt3.googleusercontent.com/ytc/AIf8zZSVQuZVN2BPUfcDSxwDYVEqpqZKWmk68m2bJswTZk8=s176-c-k-c0x00ffffff-no-rj',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Prawito Hudoro</Text>
          <Text>{subscriber} ribu subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
