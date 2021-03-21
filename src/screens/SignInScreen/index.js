import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {KanvaserLogo} from '../../assets';
import {Input, Buttons} from '../../components';
import {hp, wp} from '../../utilities';

const SignInScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={KanvaserLogo} style={styles.logo} />
      <Input placeholder="Authentication Code" keyboardType="numeric" />
      <Buttons />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#508beb',
    alignItems: 'center',
  },
  statusBarColor: {
    backgroundColor: '#508beb',
  },
  logo: {
    width: wp(35),
    height: hp(20),
    marginTop: hp(15),
    marginBottom: hp(10),
    resizeMode: 'cover',
  },
  input: {
    borderWidth: 0,
    backgroundColor: 'white',
    width: wp(30),
    borderRadius: 7,
    height: hp(5),
  },
});
