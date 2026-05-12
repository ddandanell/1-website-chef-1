import { Routes, Route } from 'react-router';
import Home from '@/pages/Home';
import HubPage from '@/pages/HubPage';
import TopicPage from '@/pages/TopicPage';
import About from '@/pages/About';
import AreaPage from '@/pages/AreaPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/areas/:areaSlug" element={<AreaPage />} />
      <Route path="/:hubSlug" element={<HubPage />} />
      <Route path="/:hubSlug/:topicSlug" element={<TopicPage />} />
    </Routes>
  );
}

export default App;
