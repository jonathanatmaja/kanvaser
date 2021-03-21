import React, {useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {wp} from '../../../utilities';

const Input = ({secureTextEntry, placeholder, keyboardType}) => {
  return (
    <View>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  input: {
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    width: wp(60),
    textAlign: 'center',
    elevation: 25,
  },
});

export default Input;
