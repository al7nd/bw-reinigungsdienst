import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Leistungen from './pages/Leistungen';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import CookieRichtlinien from './pages/CookieRichtlinien';
import Datenschutz from './pages/Datenschutz';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    setCookieConsent(consent);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/cookie-richtlinien" element={<CookieRichtlinien />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>
        <Footer />
        {!cookieConsent && <CookieBanner onAccept={() => setCookieConsent('accepted')} onReject={() => setCookieConsent('rejected')} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
