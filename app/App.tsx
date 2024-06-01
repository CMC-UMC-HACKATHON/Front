import React, {useRef} from 'react';
import {SafeAreaView, Button, StyleSheet, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import {useWebview} from './src/hooks/useWebview';
import {IP_ADDRESS} from '@env';
import NavigationBar from './src/components/NavigationBar';
import Screens from './src/screens';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const webviewRef = useRef<WebView>(null);

  // const {handleMessageFromWeb, handleWebviewError, sendMessageToWeb} =
  //   useWebview(webviewRef);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <WebView
        ref={webviewRef}
        source={{uri: `http://${IP_ADDRESS}:3000`}}
        style={styles.webview}
        onMessage={handleMessageFromWeb}
        onError={handleWebviewError}
        originWhitelist={['*']}
      /> */}
        {/* <Screens /> */}
        <NavigationBar />
        {/* <Button title="Send Message to Web" /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
