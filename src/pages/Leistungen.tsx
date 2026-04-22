import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Flame, Building2, Sparkles, GlassWater, Hammer, Trash2, Truck, Wrench, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

const services = [
  { id: 1, icon: Droplets, title: 'Wasserschadensanierung', description: 'Professionelle Trocknung und Sanierung nach Wasserschäden aller Art.', image: 'https://i.imgur.com/HINeFJk.png', features: ['Deutschlandweiter Einsatz', '24/7 Notdienst', 'Modernste Trocknungstechnik', 'Schnelle Reaktionszeit'] },
  { id: 2, icon: Flame, title: 'Brandschadensanierung', description: 'Schnelle und gründliche Beseitigung von Brandschäden mit modernster Technik.', image: 'https://i.imgur.com/pSwMz1l.jpeg', features: ['Ruß- und Rauchbeseitigung', 'Geruchsentfernung', 'Komplettsanierung', 'Deutschlandweit'] },
  { id: 3, icon: Sparkles, title: 'Unterhaltsreinigung', description: 'Regelmäßige Reinigung für eine hygienische und professionelle Umgebung.', image: 'https://i.imgur.com/thLeutC.jpeg', features: ['Tägliche Reinigung', 'Büroreinigung', 'Individuelle Pläne', 'Zuverlässige Teams'] },
  { id: 4, icon: Building2, title: 'Grundreinigung', description: 'Tiefgreifende Reinigung für eine Grundsatzauffrischung Ihrer Räume.', image: 'https://i.imgur.com/I9mBLuZ.png', features: ['Tiefenreinigung', 'Nach Baumaßnahmen', 'Vor Einzug', 'Grundsatzauffrischung'] },
  { id: 5, icon: GlassWater, title: 'Glasreinigung', description: 'Professionelle Glasreinigung für streifenfreie Klarheit.', image: 'https://i.imgur.com/OOXNIAy.jpeg', features: ['Streifenfreie Reinigung', 'Fassadenreinigung', 'Glasdächer', 'Höhenarbeiten'] },
  { id: 6, icon: Hammer, title: 'Abbruch', description: 'Professionelle Abbrucharbeiten für Gebäude und Anlagen.', image: 'https://i.imgur.com/1ko7XiM.png', features: ['Gebäudeabbruch', 'Teilabbrüche', 'Sicherheitskonzepte', 'Entsorgung'] },
  { id: 7, icon: Trash2, title: 'Entkernung', description: 'Komplette Entkernung von Gebäuden für Neugestaltungen oder Umbauten.', image: 'https://i.imgur.com/xJeXq6X.jpeg', features: ['Komplette Entkernung', 'Rückbau', 'Entsorgung', 'Fachgerechte Durchführung'] },
  { id: 8, icon: Building2, title: 'Gebäudereinigung', description: 'Umfassende Reinigung ganzer Gebäude – von Fassaden bis Innenbereiche.', image: 'https://i.imgur.com/lR5wmYY.jpeg', features: ['Fassadenreinigung', 'Innenreinigung', 'Hofreinigung', 'Großprojekte'] },
  { id: 9, icon: Truck, title: 'Transport', description: 'Zuverlässige Transportdienstleistungen für Ihre Güter.', image: 'https://i.imgur.com/QftZncq.png', features: ['Umzüge', 'Materialtransport', 'Entsorgungstransporte', 'Deutschlandweit'] },
  { id: 10, icon: Wrench, title: 'Trockenbau', description: 'Professionelle Trockenbauarbeiten für Innenwände, Decken und Dämmungen.', image: 'https://i.imgur.com/RHPArGO.png', features: ['Innenwände', 'Decken', 'Dämmung', 'Individuelle Lösungen'] },
];

export default function Leistungen() {
  const [activeService, setActiveService] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleServiceChange = (index: number) => {
    setActiveService(index);
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-6">Unsere Leistungen</motion.h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Von der Schadensanierung bis zur regelmäßigen Reinigung – wir bieten Ihnen professionelle Lösungen.</p>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="sticky top-20 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {services.map((service, index) => (
              <button key={service.id} onClick={() => handleServiceChange(index)} className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${activeService === index ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                <service.icon size={18} />
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Detail */}
      <section ref={detailRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div key={activeService} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    {(() => { const Icon = services[activeService].icon; return <Icon className="text-white" size={32} />; })()}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{services[activeService].title}</h2>
                </div>
                <p className="text-gray-600 text-lg mb-8">{services[activeService].description}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="text-blue-600" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-blue-600 mb-8">
                  <MapPin size={20} />
                  <span className="font-medium">Deutschlandweit im Einsatz</span>
                </div>
                <Link to="/kontakt" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center gap-2">
                  Angebot anfordern <ArrowRight size={20} />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Alle Leistungen im Überblick</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} onClick={() => handleServiceChange(index)} className={`group bg-white rounded-xl border-2 transition-all cursor-pointer overflow-hidden ${activeService === index ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-blue-300 hover:shadow-md'}`}>
                <div className="relative h-40 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <service.icon className="text-blue-600" size={20} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">{service.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Haben Sie Fragen zu unseren Leistungen?</h2>
          <p className="text-blue-100 mb-8">Kontaktieren Sie uns für ein unverbindliches Angebot.</p>
          <Link to="/kontakt" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}
