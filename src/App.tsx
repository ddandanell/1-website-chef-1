import { Routes, Route } from 'react-router';
import Home from '@/pages/Home';
import HubPage from '@/pages/HubPage';
import TopicPage from '@/pages/TopicPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:hubSlug" element={<HubPage />} />
      <Route path="/:hubSlug/:topicSlug" element={<TopicPage />} />
    </Routes>
  );
}

export default App;
