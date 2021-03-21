import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import {hp, wp} from '../../../utilities';
import {RightArrow} from '../../../assets';

const Button = () => {
  const [isPress, setIsPress] = useState(false);

  return (
    <View style={{marginTop: hp(2), marginLeft: hp(22)}}>
      <TouchableHighlight
        style={isPress ? styles.btnPressed : styles.btnNormal}
        onHideUnderlay={() => setIsPress(false)}
        onShowUnderlay={() => setIsPress(true)}
        underlayColor="#fc9003"
        activeOpacity={1}
        onPress={() => {}}>
        <Image source={RightArrow} style={styles.arrow} />
      </TouchableHighlight>
    </View>
  );
};

const styles = new StyleSheet.create({
  btnNormal: {
    width: wp(14),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fca503',
    elevation: 10,
  },
  btnPressed: {
    width: wp(14),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fc5a03',
    elevation: 10,
  },
  arrow: {
    width: wp(6),
    height: hp(3),
  },
});

export default Button;
