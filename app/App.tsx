import React, {useRef} from 'react';
import {SafeAreaView, Button, StyleSheet, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import {useWebview} from './src/hooks/useWebview';

const App = () => {
  const webviewRef = useRef<WebView>(null);

  const {handleMessageFromWeb, handleWebviewError, sendMessageToWeb} =
    useWebview(webviewRef);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{uri: 'http://10.10.151.205:3000'}}
        style={styles.webview}
        onMessage={handleMessageFromWeb}
        onError={handleWebviewError}
        originWhitelist={['*']}
      />
      <Button title="Send Message to Web" onPress={sendMessageToWeb} />
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
