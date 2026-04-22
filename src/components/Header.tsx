import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <>
      <div className="bg-blue-900 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:015567308109" className="flex items-center gap-2 hover:text-blue-200">
              <Phone size={14} />
              <span>0155 6730 8109</span>
            </a>
            <a href="mailto:info@bwreinigungsdienst.de" className="flex items-center gap-2 hover:text-blue-200">
              <Mail size={14} />
              <span>info@bwreinigungsdienst.de</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Mo–Fr 7:00–18:00 | 24/7 Notdienst</span>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src="https://i.imgur.com/Ua8Z6NF.png" alt="BW Reinigungsdienst Logo" className="h-14 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`font-medium relative py-2 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                  {link.name}
                </Link>
              ))}
              <Link to="/kontakt" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700">
                Angebot anfordern
              </Link>
            </nav>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t">
              <nav className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block py-2 font-medium ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'}`}>
                    {link.name}
                  </Link>
                ))}
                <Link to="/kontakt" onClick={() => setIsOpen(false)} className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center">
                  Angebot anfordern
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
