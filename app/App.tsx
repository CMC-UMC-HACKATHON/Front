import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import NavigationBar from './src/components/NavigationBar';
import {NavigationContainer} from '@react-navigation/native';
import COLORS from './src/styles/colors';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen?.hide();
    }, 1000);
  }, []);

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
