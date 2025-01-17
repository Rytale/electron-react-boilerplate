import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import { ROUTES } from './constants/routes';
import './styles/global.css';
import './styles/loading.css';

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
