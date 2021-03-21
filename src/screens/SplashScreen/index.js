import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from 'react-native-redux-i18n';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignInScreen');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Text>{I18n.t('splashScreen.title')}</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
