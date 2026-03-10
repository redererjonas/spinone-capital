import { motion } from 'framer-motion';
import { useState } from 'react';

const KontaktPage = () => {
  const [formData, setFormData] = useState({
    anrede: '',
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    unternehmen: '',
    betreff: '',
    nachricht: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        anrede: '',
        vorname: '',
        nachname: '',
        email: '',
        telefon: '',
        unternehmen: '',
        betreff: '',
        nachricht: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: 'Telefon',
      content: '+49 (0) XX XXX XXXXXX',
      description: 'Mo-Fr: 9:00 - 18:00 Uhr',
      gradient: 'from-[#6366F1] to-[#A855F7]'
    },
    {
      icon: 'ri-mail-line',
      title: 'E-Mail',
      content: 'info@spinone-asset.com',
      description: 'Antwort innerhalb von 24h',
      gradient: 'from-[#06B6D4] to-[#6366F1]'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Adresse',
      content: 'Pienzenauerstraße 95',
      description: '81925 München, Deutschland',
      gradient: 'from-[#A855F7] to-[#06B6D4]'
    },
    {
      icon: 'ri-time-line',
      title: 'Offnungszeiten',
      content: 'Mo-Fr: 9:00 - 18:00',
      description: 'Sa-So: Geschlossen',
      gradient: 'from-[#6366F1] to-[#06B6D4]'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617]">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A855F7]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06B6D4]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8"
            >
              <i className="ri-customer-service-2-line text-[#06B6D4]"></i>
              <span className="text-sm text-white/90 font-medium">Wir sind fur Sie da</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Kontaktieren Sie <span className="bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#06B6D4] bg-clip-text text-transparent">uns</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Ihr direkter Draht zu professioneller Kapitalverwaltung
            </motion.p>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {[
                { icon: 'ri-time-line', label: 'Antwortzeit', value: 'Innerhalb 24h' },
                { icon: 'ri-shield-check-line', label: 'Datenschutz', value: 'DSGVO-konform' },
                { icon: 'ri-customer-service-line', label: 'Verfugbarkeit', value: 'Mo-Fr 9-18 Uhr' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10"
                >
                  <i className={`${item.icon} text-[#06B6D4] text-xl`}></i>
                  <div className="text-left">
                    <p className="text-xs text-white/50">{item.label}</p>
                    <p className="text-sm font-bold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent"></div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#6366F1]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#6366F1]/10"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <i className={`${method.icon} text-3xl text-white`}></i>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-base font-semibold text-white/80 mb-2">{method.content}</p>
                  <p className="text-sm text-white/50">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Senden Sie uns eine Nachricht
                    </h2>
                    <p className="text-white/60 leading-relaxed">
                      Fullen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-white/80 mb-2">
                          Anrede *
                        </label>
                        <select
                          name="anrede"
                          value={formData.anrede}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-300 text-white text-sm cursor-pointer"
                        >
                          <option value="" className="bg-[#020617]">Bitte wahlen</option>
                          <option value="Herr" className="bg-[#020617]">Herr</option>
                          <option value="Frau" className="bg-[#020617]">Frau</option>
                          <option value="Divers" className="bg-[#020617]">Divers</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/80 mb-2">
                          Vorname *
                        </label>
                        <input
                          type="text"
                          name="vorname"
                          value={formData.vorname}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-300 text-white placeholder-white/30 text-sm"
                          placeholder="Ihr Vorname"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-white/80 mb-2">
                          Nachname *
                        </label>
                        <input
                          type="text"
                          name="nachname"
                          value={formData.nachname}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-300 text-white placeholder-white/30 text-sm"
                          placeholder="Ihr Nachname"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/80 mb-2">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-300 text-white placeholder-white/30 text-sm"
                          placeholder="ihre.email@beispiel.de"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-white/80 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="telefon"
                          value={formData.telefon}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-300 text-white placeholder-white/30 text-sm"
                          placeholder="+49 123 456789"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/80 mb-2">
                          Unternehmen
                        </label>
                        <input
                          type="text"
                          name="unternehmen"
                          value={formData.unternehmen}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-300 text-white placeholder-white/30 text-sm"
                          placeholder="Ihr Unternehmen"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white/80 mb-2">
                        Betreff *
                      </label>
                      <input
                        type="text"
                        name="betreff"
                        value={formData.betreff}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-300 text-white placeholder-white/30 text-sm"
                        placeholder="Worum geht es?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white/80 mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        name="nachricht"
                        value={formData.nachricht}
                        onChange={handleChange}
                        required
                        maxLength={500}
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-300 resize-none text-white placeholder-white/30 text-sm"
                        placeholder="Ihre Nachricht an uns..."
                      ></textarea>
                      <p className="text-xs text-white/40 mt-2">
                        Maximal 500 Zeichen ({formData.nachricht.length}/500)
                      </p>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center space-x-3">
                        <i className="ri-checkbox-circle-line text-2xl text-green-400"></i>
                        <p className="text-sm text-green-400 font-medium">
                          Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center space-x-3">
                        <i className="ri-error-warning-line text-2xl text-red-400"></i>
                        <p className="text-sm text-red-400 font-medium">
                          Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl hover:shadow-[#6366F1]/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin text-xl"></i>
                          <span>Wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <span>Nachricht senden</span>
                          <i className="ri-send-plane-fill text-xl"></i>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Map & Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Map */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.0!2d11.6089!3d48.1467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e74f0f84b1e7d%3A0x1a5f5f5f5f5f5f5f!2sPienzenauerstra%C3%9Fe%2095%2C%2081925%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sde!4v1704365000000!5m2!1sen!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.9) brightness(0.7)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Spinone Capital Standort München - Pienzenauerstraße 95"
                  ></iframe>
                </div>

                {/* Quick Info */}
                <div className="bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Schnellkontakt</h3>

                  <div className="space-y-4">
                    {[
                      { icon: 'ri-phone-line', label: 'Rufen Sie uns an', value: '+49 (0) XX XXX XXXXXX' },
                      { icon: 'ri-mail-line', label: 'Schreiben Sie uns', value: 'info@spinone-asset.com' },
                      { icon: 'ri-time-line', label: 'Offnungszeiten', value: 'Mo-Fr: 9:00 - 18:00 Uhr', sub: 'Sa-So: Geschlossen' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className={`${item.icon} text-xl text-white`}></i>
                        </div>
                        <div>
                          <p className="text-sm text-white/50 mb-1">{item.label}</p>
                          <p className="font-bold text-white">{item.value}</p>
                          {item.sub && <p className="text-sm text-white/50">{item.sub}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#020617]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Haufig gestellte Fragen
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Schnelle Antworten auf die wichtigsten Fragen
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: 'Wie schnell erhalte ich eine Antwort auf meine Anfrage?',
                  a: 'Wir antworten in der Regel innerhalb von 24 Stunden auf alle Anfragen, die wahrend unserer Geschaftszeiten eingehen.'
                },
                {
                  q: 'Kann ich einen personlichen Beratungstermin vereinbaren?',
                  a: 'Ja, gerne! Kontaktieren Sie uns telefonisch oder per E-Mail, um einen individuellen Beratungstermin in einem unserer Standorte zu vereinbaren.'
                },
                {
                  q: 'Welche Unterlagen benotige ich fur ein Erstgesprach?',
                  a: 'Fur ein erstes Beratungsgesprach benotigen Sie keine speziellen Unterlagen. Wir besprechen gemeinsam Ihre Anforderungen und informieren Sie uber die weiteren Schritte.'
                },
                {
                  q: 'Bieten Sie auch Online-Beratung an?',
                  a: 'Ja, wir bieten flexible Beratungsoptionen an, einschliesslich Video-Calls und Telefon-Konferenzen fur Ihre Bequemlichkeit.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#6366F1]/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start space-x-3">
                    <i className="ri-question-line text-[#06B6D4] text-xl mt-1"></i>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-white/60 leading-relaxed pl-8">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KontaktPage;
