import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from '@/pages';
import WebviewEx from './components/WebviewEx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebviewEx />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
