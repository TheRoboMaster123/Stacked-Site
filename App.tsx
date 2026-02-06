
import React from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import Integration from './pages/Integration';
import Partners from './pages/Partners';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Contact from './pages/Contact';
import DemoBooking from './pages/DemoBooking';
import DemoForm from './pages/DemoForm';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import HelpCenter from './pages/HelpCenter';
import Quickstart from './pages/Quickstart';

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith('/demo-');

  // Simple scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-inter bg-[#0A0F0D]">
      {!hideHeaderFooter && <Header />}
      <main>
        <Outlet />
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="integrations" element={<Integration />} />
          <Route path="partners" element={<Partners />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/article" element={<BlogArticle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="help/quickstart" element={<Quickstart />} />
        </Route>
        {/* Standalone routes for demo booking flow */}
        <Route path="/demo-booking" element={<DemoBooking />} />
        <Route path="/demo-form" element={<DemoForm />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
