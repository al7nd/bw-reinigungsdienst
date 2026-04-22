import { motion } from 'framer-motion';
import { Cookie, Shield, Info } from 'lucide-react';

export default function CookieRichtlinien() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center"><Cookie className="text-blue-600" size={32} /></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cookie-Richtlinien</h1>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Info className="text-blue-600" size={20} />Was sind Cookies?</h2>
              <p className="text-gray-600">Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen dabei, die Website funktionsfähig zu machen.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="text-blue-600" size={20} />Welche Cookies verwenden wir?</h2>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Notwendige Cookies</h3>
                <p className="text-gray-600 mb-4">Diese Cookies sind für den Betrieb unserer Website zwingend erforderlich und können nicht deaktiviert werden.</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-900">Cookie-Name</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Zweck</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Speicherdauer</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2">cookieConsent</td>
                      <td className="py-2">Speichert Ihre Cookie-Präferenzen</td>
                      <td className="py-2">1 Jahr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Keine Analyse-Cookies</h2>
              <p className="text-gray-600">Wir verwenden keine Analyse-Cookies, Marketing-Cookies oder Tracking-Cookies von Drittanbietern. Ihre Privatsphäre ist uns wichtig.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Ihre Rechte</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Zustimmung zu Cookies zu erteilen oder abzulehnen</li>
                <li>Ihre Einwilligung jederzeit zu widerrufen</li>
                <li>Cookies in Ihrem Browser zu löschen oder zu blockieren</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-gray-600">Bei Fragen: <a href="mailto:info@bwreinigungsdienst.de" className="text-blue-600 hover:underline">info@bwreinigungsdienst.de</a></p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
