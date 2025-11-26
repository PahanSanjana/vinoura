import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import RunwayPage from './pages/RunwayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/runway" element={<RunwayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
