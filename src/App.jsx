import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import PillarDetail from './pages/PillarDetail';
import Framework from './pages/Framework';
import Listen from './pages/Listen';
import EpisodeDetail from './pages/EpisodeDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';
import Join from './pages/Join';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="pillar/:id" element={<PillarDetail />} />
        <Route path="framework" element={<Framework />} />
        <Route path="listen" element={<Listen />} />
        <Route path="episode/:id" element={<EpisodeDetail />} />
        <Route path="writing" element={<Articles />} />
        <Route path="writing/:id" element={<ArticleDetail />} />
        <Route path="about" element={<About />} />
        <Route path="join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
