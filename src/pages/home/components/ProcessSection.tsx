'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Erstgesprach & Analyse',
      description: 'In einem ausfuhrlichen Beratungsgesprach analysieren wir Ihre individuellen Anlageziele, Risikobereitschaft und Ihren Anlagehorizont. Wir nehmen uns Zeit, Ihre Situation vollstandig zu verstehen.',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      details: ['Bedarfsanalyse', 'Risikoprofil', 'Zielsetzung', 'Zeitrahmen'],
      color: '#6366F1',
      glowColor: '99, 102, 241'
    },
    {
      number: '02',
      title: 'Strategieentwicklung',
      description: 'Basierend auf Ihrer Analyse entwickeln unsere Experten eine massgeschneiderte Anlagestrategie. Wir berucksichtigen alle relevanten Faktoren und erstellen einen detaillierten Investmentplan.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      details: ['Asset Allocation', 'Produktauswahl', 'Risikomanagement', 'Optimierung'],
      color: '#06B6D4',
      glowColor: '6, 182, 212'
    },
    {
      number: '03',
      title: 'Umsetzung & Investition',
      description: 'Nach Ihrer Freigabe setzen wir die vereinbarte Strategie professionell um. Alle Transaktionen werden transparent dokumentiert und Sie erhalten eine vollstandige Ubersicht Ihrer Investments.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      details: ['Vertragsabschluss', 'Kapitalanlage', 'Dokumentation', 'Bestatigung'],
      color: '#A855F7',
      glowColor: '168, 85, 247'
    },
    {
      number: '04',
      title: 'Monitoring & Reporting',
      description: 'Kontinuierliche Uberwachung Ihrer Investments mit regelmassigen Reports. Wir passen die Strategie bei Bedarf an und halten Sie stets uber die Performance Ihrer Anlagen informiert.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      details: ['Performance-Tracking', 'Quartalsberichte', 'Anpassungen', 'Beratung'],
      color: '#EC4899',
      glowColor: '236, 72, 153'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-[#6366F1] rounded-full blur-[300px]"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#A855F7] rounded-full blur-[300px]"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-sm font-bold text-white/90 uppercase tracking-wider">Unser Prozess</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ihr Weg zur{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
              erfolgreichen Anlage
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            In vier transparenten Schritten zu Ihrer individuellen Anlagestrategie
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Element */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="group relative">
                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, ${step.color}50, ${step.color}20)` }}
                    />

                    {/* Card */}
                    <div
                      className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500 p-8 lg:p-12"
                      style={{ boxShadow: `0 0 60px rgba(${step.glowColor}, 0.15)` }}
                    >
                      {/* Decorative circles */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-20 -right-20 w-64 h-64 border border-white/5 rounded-full"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-20 -left-20 w-48 h-48 border border-white/10 rounded-full"
                      />

                      {/* Number Badge */}
                      <div className="relative mb-8">
                        <div
                          className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                            boxShadow: `0 0 60px ${step.color}40`
                          }}
                        >
                          <span className="text-4xl font-bold text-white">{step.number}</span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                        style={{ background: `${step.color}20` }}
                      >
                        <svg className="w-8 h-8" style={{ color: step.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                        </svg>
                      </div>

                      {/* Mini stats */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: step.color, boxShadow: `0 0 10px ${step.color}` }} />
                        <span className="text-sm text-white/50">Schritt {step.number} von 04</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    {/* Icon */}
                    <div className="relative mb-6 inline-block">
                      <div
                        className="absolute inset-0 rounded-2xl blur-lg opacity-30"
                        style={{ background: `linear-gradient(135deg, ${step.color}50, ${step.color}20)` }}
                      />
                      <div
                        className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}80)` }}
                      >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                          style={{ boxShadow: `0 0 30px rgba(${step.glowColor}, 0.1)` }}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `${step.color}20` }}
                          >
                            <svg className="w-5 h-5" style={{ color: step.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-white/80">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center my-12"
                >
                  <div
                    className="w-1 h-16 rounded-full"
                    style={{ background: `linear-gradient(180deg, ${steps[index].color}, ${steps[index + 1].color})` }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
