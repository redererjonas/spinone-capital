'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Festgeld',
      description: 'Planbare Renditen durch feste Laufzeiten und garantierte Zinssatze. Ideal fur konservative Anlagestrategien mit langfristigem Anlagehorizont.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      path: '/leistungen/festgeld',
      features: ['Feste Laufzeiten', 'Garantierte Zinsen', 'Planbare Ertrage', 'Hohe Sicherheit'],
      color: '#6366F1',
      glowColor: '99, 102, 241'
    },
    {
      title: 'Flexgeld',
      description: 'Flexible Anlagelosungen mit variabler Laufzeit. Optimale Balance zwischen Rendite und Liquiditat fur dynamische Anlagestrategien.',
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
      path: '/leistungen/flexgeld',
      features: ['Variable Laufzeiten', 'Flexible Kundigungen', 'Attraktive Zinsen', 'Kontrollierte Liquiditat'],
      color: '#06B6D4',
      glowColor: '6, 182, 212'
    },
    {
      title: 'Tagesgeld',
      description: 'Maximale Liquiditat bei attraktiver Verzinsung. Tagliche Verfugbarkeit Ihres Kapitals ohne Kundigungsfristen oder Mindestlaufzeiten.',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      path: '/leistungen/tagesgeld',
      features: ['Tagliche Verfugbarkeit', 'Keine Kundigungsfrist', 'Transparente Zinsen', 'Volle Flexibilitat'],
      color: '#A855F7',
      glowColor: '168, 85, 247'
    },
    {
      title: 'Aktien',
      description: 'Professionelles Equity-Management mit Fokus auf internationale Markte. Selektive Strategien fur langfristigen Vermogensaufbau.',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      path: '/leistungen/aktien',
      features: ['Globale Markte', 'Aktive Verwaltung', 'Risikomanagement', 'Langfristiger Fokus'],
      color: '#EC4899',
      glowColor: '236, 72, 153'
    },
    {
      title: 'Anleihen',
      description: 'Fixed Income Strategien mit Fokus auf Stabilitat. Staatsanleihen und Unternehmensanleihen fur risikoadjustierte Portfolios.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      path: '/leistungen/anleihen',
      features: ['Staatsanleihen', 'Unternehmensanleihen', 'Stabile Ertrage', 'Diversifikation'],
      color: '#6366F1',
      glowColor: '99, 102, 241'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#6366F1] rounded-full blur-[250px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#A855F7] rounded-full blur-[250px]"
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
          >
            <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-sm font-bold text-white/90 uppercase tracking-wider">Unsere Anlageprodukte</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Massgeschneiderte{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
              Anlagelosungen
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Von konservativen Festgeldanlagen bis zu dynamischen Aktienstrategien - wir bieten professionelle Losungen fur jeden Anlegertyp
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {services.slice(0, 4).map((service) => (
            <motion.div
              key={service.path}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
              style={{
                boxShadow: `0 0 60px rgba(${service.glowColor}, 0.1)`,
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${service.color}10, transparent)` }}
              />

              {/* Top Gradient Bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}60)` }}
              />

              {/* Content */}
              <div className="p-8">
                {/* Icon Badge */}
                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                    style={{ background: `linear-gradient(135deg, ${service.color}50, ${service.color}20)` }}
                  />
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}80)` }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${service.color}20` }}
                      >
                        <svg className="w-4 h-4" style={{ color: service.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-white/70 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={service.path}
                  className="inline-flex items-center space-x-2 font-bold transition-all duration-300 group/link"
                  style={{ color: service.color }}
                >
                  <span className="group-hover/link:underline">Mehr erfahren</span>
                  <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fifth Service - Full Width */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.01, y: -5 }}
          className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
          style={{
            boxShadow: `0 0 60px rgba(${services[4].glowColor}, 0.1)`,
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `linear-gradient(135deg, ${services[4].color}10, transparent)` }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Top Gradient Bar (Mobile) */}
              <div
                className="lg:hidden h-1 w-full mb-8 rounded-full"
                style={{ background: `linear-gradient(90deg, ${services[4].color}, ${services[4].color}60)` }}
              />

              {/* Icon Badge */}
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                  style={{ background: `linear-gradient(135deg, ${services[4].color}50, ${services[4].color}20)` }}
                />
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${services[4].color}, ${services[4].color}80)` }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={services[4].icon} />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {services[4].title}
              </h3>
              <p className="text-lg text-white/60 mb-6 leading-relaxed">
                {services[4].description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {services[4].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${services[4].color}20` }}
                    >
                      <svg className="w-5 h-5" style={{ color: services[4].color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base text-white/70 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={services[4].path}
                className="inline-flex items-center space-x-2 text-lg font-bold transition-all duration-300 group/link"
                style={{ color: services[4].color }}
              >
                <span className="group-hover/link:underline">Mehr erfahren</span>
                <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right Visual Element */}
            <div className="relative hidden lg:flex items-center justify-center p-12">
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${services[4].color}10, ${services[4].color}05)` }}
              >
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 border border-white/5 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 border border-white/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 border border-white/15 rounded-full"
                />
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${services[4].color}, ${services[4].color}80)`,
                    boxShadow: `0 0 60px ${services[4].color}50`
                  }}
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={services[4].icon} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
