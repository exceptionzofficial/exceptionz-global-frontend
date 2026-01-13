import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const ForAuthors = lazy(() => import('./pages/ForAuthors/ForAuthors'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Terms = lazy(() => import('./pages/Legal/Terms'));
const Privacy = lazy(() => import('./pages/Legal/Privacy'));
const Refund = lazy(() => import('./pages/Legal/Refund'));
const Copyright = lazy(() => import('./pages/Legal/Copyright'));

// Loading component
const Loading = () => (
  <div className="loading-screen">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/for-authors" element={<ForAuthors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/copyright" element={<Copyright />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
