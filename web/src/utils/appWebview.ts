// 웹 페이지에서 React Native로 메시지를 송신
export const sendMessageToApp = () => {
  window.ReactNativeWebView?.postMessage('Hello from the Web!');
};
