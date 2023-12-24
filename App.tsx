import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNative';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
