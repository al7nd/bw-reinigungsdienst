import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Kontakt() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '', honeypot: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) { setError('Spam erkannt.'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '', honeypot: '' });
      } else {
        setError('Ein Fehler ist aufgetreten.');
      }
    } catch { setError('Ein Fehler ist aufgetreten.'); }
    finally { setLoading(false); }
  };

  const services = ['Wasserschadensanierung', 'Brandschadensanierung', 'Unterhaltsreinigung', 'Grundreinigung', 'Glasreinigung', 'Abbruch', 'Entkernung', 'Gebäudereinigung', 'Transport', 'Trockenbau', 'Sonstiges'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-6">Kontakt aufnehmen</motion.h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Wir sind für Sie da – deutschlandweit.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nachricht senden</h2>
              {success ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vielen Dank!</h3>
                  <p className="text-gray-600">Ihre Nachricht wurde erfolgreich gesendet.</p>
                  <button onClick={() => setSuccess(false)} className="mt-6 text-blue-600 font-medium hover:underline">Weitere Nachricht senden</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="website" value={formData.honeypot} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} className="absolute opacity-0 pointer-events-none" tabIndex={-1} />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Ihr Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="ihre@email.de" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="0155 12345678" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Leistung *</label>
                      <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option value="">Bitte wählen</option>
                        {services.map((s) => (<option key={s} value={s}>{s}</option>))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht *</label>
                    <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Ihre Nachricht..." />
                  </div>
                  {error && <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg"><AlertCircle size={20} /><span>{error}</span></div>}
                  <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 disabled:opacity-50">
                    {loading ? (<><span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> Wird gesendet...</>) : (<><Send size={20} /> Nachricht senden</>)}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Direkter Kontakt</h2>
                <div className="space-y-6">
                  <a href="tel:015567308109" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 group">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700"><Phone className="text-white" size={24} /></div>
                    <div><div className="font-semibold text-gray-900">Telefon</div><div className="text-blue-600">0155 6730 8109</div></div>
                  </a>
                  <a href="mailto:info@bwreinigungsdienst.de" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 group">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700"><Mail className="text-white" size={24} /></div>
                    <div><div className="font-semibold text-gray-900">E-Mail</div><div className="text-blue-600">info@bwreinigungsdienst.de</div></div>
                  </a>
                  <a href="https://wa.me/4915567308109" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 group">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-600"><MessageCircle className="text-white" size={24} /></div>
                    <div><div className="font-semibold text-gray-900">WhatsApp</div><div className="text-green-600">Direkt schreiben</div></div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Standort & Öffnungszeiten</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-blue-600 mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900">Adresse</div>
                      <div className="text-gray-600">Rheinische Str. 28<br/>44651 Herne</div>
                      <div className="text-blue-600 font-medium mt-1">Einsatzgebiet: Deutschlandweit</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-blue-600 mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Öffnungszeiten</div>
                      <div className="space-y-1 text-gray-600">
                        <div className="flex justify-between"><span>Montag – Freitag</span><span className="font-medium">7:00 – 18:00</span></div>
                        <div className="flex justify-between"><span>Samstag</span><span className="font-medium">9:00 – 14:30</span></div>
                        <div className="flex justify-between"><span>Sonntag</span><span className="font-medium text-red-500">Geschlossen</span></div>
                      </div>
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg"><span className="text-blue-600 font-semibold">🚨 24/7 Notdienst verfügbar</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819440.0!2d6.0!3d51.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sDeutschland!5e0!3m2!1sde!2sde" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
