import { Link } from 'react-router-dom';
import { Cookie, X, Settings, Check, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface CookieBannerProps {
  onAccept: () => void;
  onReject: () => void;
}

export default function CookieBanner({ onAccept, onReject }: CookieBannerProps) {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Cookie className="text-blue-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookie-Einstellungen</h3>
            <p className="text-gray-600 text-sm mb-4">
              Diese Website verwendet ausschließlich technisch notwendige Cookies. Weitere Informationen in unserer{' '}
              <Link to="/cookie-richtlinien" className="text-blue-600 hover:underline">Cookie-Richtlinie</Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={onAccept} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
                <Check size={18} /> Akzeptieren
              </button>
              <button onClick={onReject} className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-200">
                Ablehnen
              </button>
              <Link to="/cookie-richtlinien" className="bg-transparent text-blue-600 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 flex items-center gap-2">
                <Shield size={18} /> Mehr Informationen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
