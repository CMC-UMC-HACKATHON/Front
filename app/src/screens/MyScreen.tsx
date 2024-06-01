import React, {useRef} from 'react';
import WebView from 'react-native-webview';
import {IP_ADDRESS} from '@env';
import {useWebview} from '../hooks/useWebview';
import {StyleSheet} from 'react-native';

const MyScreen = () => {
  const webviewRef = useRef<WebView>(null);

  const {handleMessageFromWeb, handleWebviewError, sendMessageToWeb} =
    useWebview(webviewRef);

  return (
    <WebView
      ref={webviewRef}
      source={{uri: `http://${IP_ADDRESS}:3000/mypage`}}
      style={styles.webview}
      onMessage={handleMessageFromWeb}
      onError={handleWebviewError}
      originWhitelist={['*']}
    />
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

export default MyScreen;
