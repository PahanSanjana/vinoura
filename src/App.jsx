import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import RunwayPage from './pages/RunwayPage';
import BoutiquePage from './pages/BoutiquePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/runway" element={<RunwayPage />} />
        <Route path="/boutique" element={<BoutiquePage />} />
      </Routes>
    </Router>
  );
}

export default App;
