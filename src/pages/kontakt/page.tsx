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
      content: '+49 (0)89 588088170',
      description: 'Mo-Fr: 10:00 - 16:00 Uhr',
      gradient: 'from-primary-500 to-primary-700'
    },
    {
      icon: 'ri-mail-line',
      title: 'E-Mail',
      content: 'info@spinone-asset.com',
      description: 'Antwort innerhalb von 24h',
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Adresse',
      content: 'Pienzenauerstraße 95',
      description: '81925 München, Deutschland',
      gradient: 'from-accent-cyan to-primary-500'
    },
    {
      icon: 'ri-time-line',
      title: 'Öffnungszeiten',
      content: 'Mo-Fr: 10:00 - 16:00',
      description: 'Sa-So: Geschlossen',
      gradient: 'from-primary-600 to-accent-cyan'
    }
  ];

  return (
    <div className="min-h-screen bg-white bg-filigree">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-slate-50">
          {/* Subtle Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white shadow-sm rounded-full border border-slate-200 mb-8"
            >
              <i className="ri-customer-service-2-line text-primary-600"></i>
              <span className="text-sm text-slate-700 font-medium">Wir sind für Sie da</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Kontaktieren Sie <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">uns</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
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
                { icon: 'ri-customer-service-line', label: 'Verfügbarkeit', value: 'Mo-Fr 10-16 Uhr' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white shadow-sm px-5 py-3 rounded-xl border border-slate-200"
                >
                  <i className={`${item.icon} text-primary-600 text-xl`}></i>
                  <div className="text-left">
                    <p className="text-xs text-slate-400">{item.label}</p>
                    <p className="text-sm font-bold text-slate-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white shadow-sm rounded-2xl p-8 border border-slate-200 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <i className={`${method.icon} text-3xl text-white`}></i>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">{method.title}</h3>
                  <p className="text-base font-semibold text-slate-700 mb-2">{method.content}</p>
                  <p className="text-sm text-slate-400">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white shadow-sm rounded-3xl p-8 lg:p-10 border border-slate-200">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      Senden Sie uns eine Nachricht
                    </h2>
                    <p className="text-slate-500 leading-relaxed">
                      Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Anrede *
                        </label>
                        <select
                          name="anrede"
                          value={formData.anrede}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-slate-800 text-sm cursor-pointer"
                        >
                          <option value="">Bitte wählen</option>
                          <option value="Herr">Herr</option>
                          <option value="Frau">Frau</option>
                          <option value="Divers">Divers</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Vorname *
                        </label>
                        <input
                          type="text"
                          name="vorname"
                          value={formData.vorname}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-slate-800 placeholder-slate-400 text-sm"
                          placeholder="Ihr Vorname"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Nachname *
                        </label>
                        <input
                          type="text"
                          name="nachname"
                          value={formData.nachname}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-slate-800 placeholder-slate-400 text-sm"
                          placeholder="Ihr Nachname"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-slate-800 placeholder-slate-400 text-sm"
                          placeholder="ihre.email@beispiel.de"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="telefon"
                          value={formData.telefon}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-slate-800 placeholder-slate-400 text-sm"
                          placeholder="+49 123 456789"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Unternehmen
                        </label>
                        <input
                          type="text"
                          name="unternehmen"
                          value={formData.unternehmen}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-slate-800 placeholder-slate-400 text-sm"
                          placeholder="Ihr Unternehmen"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Betreff *
                      </label>
                      <input
                        type="text"
                        name="betreff"
                        value={formData.betreff}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-slate-800 placeholder-slate-400 text-sm"
                        placeholder="Worum geht es?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        name="nachricht"
                        value={formData.nachricht}
                        onChange={handleChange}
                        required
                        maxLength={500}
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-slate-800 placeholder-slate-400 text-sm"
                        placeholder="Ihre Nachricht an uns..."
                      ></textarea>
                      <p className="text-xs text-slate-400 mt-2">
                        Maximal 500 Zeichen ({formData.nachricht.length}/500)
                      </p>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
                        <i className="ri-checkbox-circle-line text-2xl text-green-500"></i>
                        <p className="text-sm text-green-700 font-medium">
                          Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
                        <i className="ri-error-warning-line text-2xl text-red-500"></i>
                        <p className="text-sm text-red-700 font-medium">
                          Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl hover:shadow-primary-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
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
                <div className="bg-white shadow-sm rounded-3xl overflow-hidden border border-slate-200 h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.0!2d11.6089!3d48.1467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e74f0f84b1e7d%3A0x1a5f5f5f5f5f5f5f!2sPienzenauerstra%C3%9Fe%2095%2C%2081925%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sde!4v1704365000000!5m2!1sen!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Spinone Capital Standort München - Pienzenauerstraße 95"
                  ></iframe>
                </div>

                {/* Quick Info */}
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 border border-primary-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Schnellkontakt</h3>

                  <div className="space-y-4">
                    {[
                      { icon: 'ri-phone-line', label: 'Rufen Sie uns an', value: '+49 (0)89 588088170' },
                      { icon: 'ri-mail-line', label: 'Schreiben Sie uns', value: 'info@spinone-asset.com' },
                      { icon: 'ri-time-line', label: 'Öffnungszeiten', value: 'Mo-Fr: 10:00 - 16:00 Uhr', sub: 'Sa-So: Geschlossen' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-white shadow-sm rounded-xl border border-slate-200">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className={`${item.icon} text-xl text-white`}></i>
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                          <p className="font-bold text-slate-900">{item.value}</p>
                          {item.sub && <p className="text-sm text-slate-400">{item.sub}</p>}
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
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Häufig gestellte Fragen
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                Schnelle Antworten auf die wichtigsten Fragen
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: 'Wie schnell erhalte ich eine Antwort auf meine Anfrage?',
                  a: 'Wir antworten in der Regel innerhalb von 24 Stunden auf alle Anfragen, die während unserer Geschäftszeiten eingehen.'
                },
                {
                  q: 'Kann ich einen persönlichen Beratungstermin vereinbaren?',
                  a: 'Ja, gerne! Kontaktieren Sie uns telefonisch oder per E-Mail, um einen individuellen Beratungstermin in einem unserer Standorte zu vereinbaren.'
                },
                {
                  q: 'Welche Unterlagen benötige ich für ein Erstgespräch?',
                  a: 'Für ein erstes Beratungsgespräch benötigen Sie keine speziellen Unterlagen. Wir besprechen gemeinsam Ihre Anforderungen und informieren Sie über die weiteren Schritte.'
                },
                {
                  q: 'Bieten Sie auch Online-Beratung an?',
                  a: 'Ja, wir bieten flexible Beratungsoptionen an, einschließlich Video-Calls und Telefon-Konferenzen für Ihre Bequemlichkeit.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white shadow-sm rounded-2xl p-6 border border-slate-200 hover:border-primary-300 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start space-x-3">
                    <i className="ri-question-line text-primary-600 text-xl mt-1"></i>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-500 leading-relaxed pl-8">{faq.a}</p>
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
