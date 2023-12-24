import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNative';
import MateriFlexBox from './MateriFlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
