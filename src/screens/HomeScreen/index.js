import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from 'react-native-i18n';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <Text>{I18n.t('homeScreen.title')}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
