import {Alert} from 'react-native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import {WebViewErrorEvent} from 'react-native-webview/lib/WebViewTypes';
import {useChallenge} from './useChallenge';

export const useWebview = (webviewRef: React.RefObject<WebView<{}>>) => {
  const {setSortBy} = useChallenge();

  // 앱 -> 웹으로 메시지 전송
  const sendMessageToWeb = () => {
    if (webviewRef && webviewRef.current) {
      webviewRef.current.postMessage('Hello from React Native!');
    }
  };

  // 앱 <- 웹 메시지 수신
  const handleMessageFromWeb = (event: WebViewMessageEvent) => {
    if (event.nativeEvent.data) {
      setSortBy(JSON.parse(event.nativeEvent.data) as 'LATEST' | 'POPULAR');
    }
    Alert.alert(event.nativeEvent.data);
  };

  const handleWebviewError = (syntheticEvent: WebViewErrorEvent) => {
    const {nativeEvent} = syntheticEvent;
    console.error('WebView error: ', nativeEvent);
    Alert.alert('WebView error', nativeEvent.description);
  };

  return {
    sendMessageToWeb,
    handleMessageFromWeb,
    handleWebviewError,
  };
};
