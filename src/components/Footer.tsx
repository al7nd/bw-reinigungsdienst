import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="https://i.imgur.com/C3OfRdI.png" alt="BW Reinigungsdienst" className="h-12 w-auto mb-6" />
            <p className="text-gray-400 mb-6">
              Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen in ganz Deutschland. Sauberkeit, der man vertraut.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61560613400870" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/bw_reinigungsdienst/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <img src="https://i.imgur.com/C3OfRdI.png" alt="BW Reinigungsdienst" className="h-12 w-auto mb-6" />
            <h3 className="text-lg font-semibold mb-6">Quicklinks</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white">Startseite</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-white">Leistungen</Link></li>
              <li><Link to="/kontakt" className="text-gray-400 hover:text-white">Kontakt</Link></li>
              <li><Link to="/impressum" className="text-gray-400 hover:text-white">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-gray-400 hover:text-white">Datenschutz</Link></li>
              <li><Link to="/cookie-richtlinien" className="text-gray-400 hover:text-white">Cookie-Richtlinien</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Leistungen</h3>
            <ul className="space-y-3">
              <li><Link to="/leistungen" className="text-gray-400 hover:text-white">Wasserschadensanierung</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-white">Brandschadensanierung</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-white">Unterhaltsreinigung</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-white">Glasreinigung</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-white">Trockenbau</Link></li>
              <li><Link to="/leistungen" className="text-gray-400 hover:text-white">Transport</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 mt-1" />
                <span className="text-gray-400">Rheinische Str. 28<br/>44651 Herne</span>
              </li>
              <li>
                <a href="tel:015567308109" className="flex items-center gap-3 text-gray-400 hover:text-white">
                  <Phone size={20} className="text-blue-500" />
                  <span>0155 6730 8109</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@bwreinigungsdienst.de" className="flex items-center gap-3 text-gray-400 hover:text-white">
                  <Mail size={20} className="text-blue-500" />
                  <span>info@bw-reinigungsdienst.de</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-blue-500 mt-1" />
                <span className="text-gray-400">Mo–Fr: 7:00–18:00<br/>Sa: 9:00–14:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-blue-400 font-semibold text-lg mb-4">
            🌐 bwreinigungsdienst.de
          </p>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 BW Reinigungsdienst. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/impressum" className="text-gray-500 hover:text-white">Impressum</Link>
            <Link to="/datenschutz" className="text-gray-500 hover:text-white">Datenschutz</Link>
            <Link to="/cookie-richtlinien" className="text-gray-500 hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
