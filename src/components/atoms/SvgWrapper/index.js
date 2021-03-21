import React from 'react';
import {View} from 'react-native';

const SvgWrapper = ({component, height, width, style}) => {
  return (
    <View style={[{height: height, width: width}, style]}>{component}</View>
  );
};

export default SvgWrapper;
