import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Flame, Sparkles, Star, Clock, Award, Users, Shield, Phone, ArrowRight, MapPin } from 'lucide-react';

export default function Home() {
  const services = [
    { icon: Droplets, title: 'Wasserschadensanierung', desc: 'Professionelle Trocknung und Sanierung nach Wasserschäden.', image: 'https://i.imgur.com/HINeFJk.png' },
    { icon: Flame, title: 'Brandschadensanierung', desc: 'Schnelle Beseitigung von Brandschäden mit modernster Technik.', image: 'https://i.imgur.com/pSwMz1l.jpeg' },
    { icon: Sparkles, title: 'Unterhaltsreinigung', desc: 'Regelmäßige Reinigung für eine hygienische Umgebung.', image: 'https://i.imgur.com/thLeutC.jpeg' },
  ];

  const trustBadges = [
    { icon: Clock, text: '24/7 Notdienst' },
    { icon: Award, text: '6+ Jahre Erfahrung' },
    { icon: Users, text: '25+ Mitarbeiter' },
    { icon: Shield, text: 'Deutschlandweit' },
  ];

  const testimonials = [
    { name: 'Michael Schneider', location: 'Berlin', rating: 5, text: 'Nach einem Wasserschaden war BW Reinigungsdienst innerhalb von 2 Stunden vor Ort. Absolute Empfehlung!' },
    { name: 'Sandra Weber', location: 'München', rating: 5, text: 'Die Unterhaltsreinigung unserer Praxis wird seit einem Jahr zuverlässig durchgeführt. Sehr zufrieden!' },
    { name: 'Thomas Müller', location: 'Hamburg', rating: 5, text: 'Die Brandschadensanierung wurde hervorragend durchgeführt. Von der Rußbeseitigung bis zum Wiederaufbau.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://i.imgur.com/JXV4Kci.png" alt="Professionelle Reinigung" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-blue-500/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              Ihr Reinigungsprofi Deutschlandweit
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Sauberkeit, der man vertraut.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-200 mb-8">
              Professionelle Reinigungsdienstleistungen und Schadensanierung in ganz Deutschland.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
              <Link to="/kontakt" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2 group">
                Angebot anfordern <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a href="tel:015567308109" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 border border-white/30 flex items-center gap-2">
                <Phone size={20} /> 0155 6730 8109
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <badge.icon className="text-blue-600" size={28} />
                <span className="font-semibold text-gray-700">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Von der Schadensanierung bis zur regelmäßigen Reinigung – wir bieten Ihnen professionelle Lösungen.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link to="/leistungen" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                    Mehr erfahren <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/leistungen" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800">
              Alle Leistungen ansehen <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Über BW Reinigungsdienst</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seit über 6 Jahren sind wir Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen und Schadensanierung in ganz Deutschland. Mit einem Team von über 25 Mitarbeitern setzen wir auf Qualität, Zuverlässigkeit und Kundenzufriedenheit.
              </p>
              <p className="text-gray-600 mb-8">
                Unsere Werte: <strong>Qualität</strong>, <strong>Verlässlichkeit</strong> und <strong>Kundenorientierung</strong>.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[{ value: '6+', label: 'Jahre Erfahrung' }, { value: '25+', label: 'Mitarbeiter' }, { value: '430+', label: 'Projekte' }, { value: '310+', label: 'Kunden' }].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center gap-2">
                Kontakt aufnehmen <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img src="https://i.imgur.com/aZmLfe9.png" alt="Unser Team" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">96%</div>
                <div className="text-sm opacity-90">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Was unsere Kunden sagen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bereit für professionelle Sauberkeit?</h2>
          <p className="text-blue-100 text-lg mb-8">Kontaktieren Sie uns noch heute für ein unverbindliches Angebot.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/kontakt" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              Jetzt Kontakt aufnehmen
            </Link>
            <a href="tel:015567308109" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 flex items-center gap-2">
              <Phone size={20} /> 0155 6730 8109
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
