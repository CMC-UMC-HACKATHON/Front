import { useEffect } from 'react';
import { sendMessageToApp } from '@/utils/appWebview';

const WebviewEx = () => {
  useEffect(() => {
    // 웹 페이지에서 React Native로부터 메시지를 수신
    window.addEventListener('message', (event) => {
      if (event.data) {
        alert(`Message from React Native: ${event.data}`);
      }
    });
  }, []);

  return (
    <div>
      <h1>WebView Example</h1>
      <button onClick={() => sendMessageToApp('')}>
        Send Message to React Native
      </button>
    </div>
  );
};

export default WebviewEx;
