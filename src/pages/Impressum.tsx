import { motion } from 'framer-motion';
import { Building, MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Building className="text-blue-600" size={24} />Unternehmensangaben</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-lg font-semibold text-gray-900 mb-2">BW Reinigungsdienst</p>
                <p className="text-gray-600 mb-4">Inhaber: Yusef Kasem</p>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin size={18} className="mt-1 text-blue-600" />
                  <span>Rheinische Str. 28<br/>44651 Herne</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="tel:015567308109" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50"><Phone className="text-blue-600" size={20} /><span className="text-gray-700">0155 6730 8109</span></a>
                <a href="mailto:info@bwreinigungsdienst.de" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50"><Mail className="text-blue-600" size={20} /><span className="text-gray-700">info@bwreinigungsdienst.de</span></a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Webseite</h2>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                <Globe className="text-blue-600" size={20} />
                <span className="text-blue-600 font-medium">bwreinigungsdienst.de | bwreinigungsdienst.com</span>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Berufsbezeichnung</h2>
              <p className="text-gray-600">Reinigungsdienstleistungen, Schadensanierung, Gebäudereinigung</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt</h2>
              <p className="text-gray-600">Yusef Kasem<br/>Rheinische Str. 28<br/>44651 Herne</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Streitschlichtung</h2>
              <p className="text-gray-600">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>
              <p className="text-gray-600">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
              <p className="text-gray-600">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
