import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Cummunication from './pages/Communication';
import BasicJavascript from './pages/BasicJavaScript';
import ReactNativeSvg from './pages/ReactNativeSvg';
import CallAPIvanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Cummunication /> */}
        {/* <BasicJavascript /> */}
        {/* <ReactNativeSvg /> */}
        <CallAPIAxios />
      </ScrollView>
    </View>
  );
};

export default App;
