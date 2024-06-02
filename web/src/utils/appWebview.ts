// 웹 페이지에서 React Native로 메시지를 송신
export const sendMessageToApp = (message: string) => {
  window.ReactNativeWebView?.postMessage(message);
};
