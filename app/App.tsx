import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import NavigationBar from './src/components/NavigationBar';
import {NavigationContainer} from '@react-navigation/native';
import COLORS from './src/styles/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <NavigationBar />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    backgroundColor: COLORS.gray1,
  },
});

export default App;
