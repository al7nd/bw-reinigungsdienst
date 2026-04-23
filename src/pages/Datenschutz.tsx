import { motion } from 'framer-motion';
import { Shield, Mail, Phone, Building, Clock, FileText, Users, Globe, Lock, AlertTriangle } from 'lucide-react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center"><Shield className="text-blue-600" size={32} /></div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Datenschutzerklärung</h1>
              <p className="text-gray-500 mt-1">Stand: 22.04.2026</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Building className="text-blue-600" size={20} />1. Verantwortlicher</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600">
                  <strong className="text-gray-900">BW Reinigungsdienst</strong><br/>Inhaber: Yusef Kasem<br/>Rheinische Str. 28<br/>44651 Herne<br/><br/>
                  <strong className="text-gray-900">Kontaktaufnahme:</strong><br/>
                  <span className="flex items-center gap-2 mt-2"><Mail size={16} className="text-blue-600" /><a href="mailto:info@bw-reinigungsdienst.de" className="text-blue-600 hover:underline">info@bwreinigungsdienst.de</a></span>
                  <span className="flex items-center gap-2 mt-1"><Phone size={16} className="text-blue-600" /><span>0155 6730 8109</span></span>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><FileText className="text-blue-600" size={20} />2. Server- und Logdaten</h2>
              <p className="text-gray-600 mb-4">Beim Aufruf unserer Website werden automatisch Informationen erfasst:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Verwendeter Browser und Betriebssystem</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Globe className="text-blue-600" size={20} />3. Hosting</h2>
              <p className="text-gray-600">Unsere Website wird bei einem professionellen Hosting-Anbieter gehostet. Ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO wurde abgeschlossen.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Mail className="text-blue-600" size={20} />4. Kontaktformular</h2>
              <p className="text-gray-600 mb-4">Ihre Angaben aus dem Anfrageformular werden zwecks Bearbeitung gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Erfasste Daten:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Name, E-Mail-Adresse, Telefonnummer (optional)</li>
                  <li>Ausgewählte Leistung, Nachricht</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Lock className="text-blue-600" size={20} />5. Anti-Spam-Maßnahmen</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Honeypot-Felder:</strong> Versteckte Formularfelder gegen Bots</li>
                <li><strong>Zeitbasierte Validierung:</strong> Erkennung zu schneller Ausfüllungen</li>
                <li><strong>IP-Ratenbegrenzung:</strong> Begrenzung der Anfragen pro IP</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="text-blue-600" size={20} />6. Cookies</h2>
              <p className="text-gray-600">Unsere Website verwendet ausschließlich technisch notwendige Cookies. Siehe <a href="/cookie-richtlinien" className="text-blue-600 hover:underline">Cookie-Richtlinie</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Users className="text-blue-600" size={20} />7. Datenweitergabe an Dritte</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Sie haben ausdrücklich in die Weitergabe eingewilligt</li>
                <li>Die Weitergabe ist zur Durchführung des Vertrages erforderlich</li>
                <li>Wir sind gesetzlich zur Weitergabe verpflichtet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Clock className="text-blue-600" size={20} />8. Speicherdauer</h2>
              <p className="text-gray-600">Wir speichern Ihre Daten nur so lange, wie es für die Erfüllung der Zwecke erforderlich ist oder wie es die gesetzlichen Aufbewahrungspflichten vorsehen.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Users className="text-blue-600" size={20} />9. Ihre Rechte</h2>
              <div className="space-y-3">
                {['Auskunftsrecht (Art. 15 DSGVO)', 'Recht auf Berichtigung (Art. 16 DSGVO)', 'Recht auf Löschung (Art. 17 DSGVO)', 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)', 'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)', 'Widerspruchsrecht (Art. 21 DSGVO)'].map((right, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg"><h3 className="font-semibold text-gray-900">{right}</h3></div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><AlertTriangle className="text-blue-600" size={20} />10. Beschwerderecht</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong className="text-gray-900">Zuständige Aufsichtsbehörde:</strong><br/>
                  Landesbeauftragte(r) für Datenschutz und Informationsfreiheit NRW<br/>
                  Kavalleriestraße 2-4, 40213 Düsseldorf<br/>
                  <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.ldi.nrw.de</a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
