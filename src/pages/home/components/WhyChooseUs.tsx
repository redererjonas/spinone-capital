'use client';

import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'KAGB-Regulierung',
      description: 'Vollständig reguliert nach Paragraph 44 iVm Paragraph 2 Abs.4 KAGB. Höchste Compliance-Standards und transparente Governance-Strukturen für Ihre Sicherheit.',
      stats: { value: '100%', label: 'Konform' },
      color: '#10B981',
      colorEnd: '#34D399',
      glowColor: '16, 185, 129'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Erfahrenes Team',
      description: 'Über 15 Jahre kombinierte Kapitalmarkterfahrung. Unser Expertenteam verfügt über tiefgreifende Kenntnisse in allen Anlageklassen.',
      stats: { value: '15+', label: 'Jahre' },
      color: '#3B82F6',
      colorEnd: '#60A5FA',
      glowColor: '59, 130, 246'
    },
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Bewahrte Strategien',
      description: 'Datengetriebene Anlageentscheidungen basierend auf fundierten Analysen. Risikomanagement und Diversifikation stehen im Mittelpunkt.',
      stats: { value: '180 Mio.', label: 'AuM' },
      color: '#F59E0B',
      colorEnd: '#FBBF24',
      glowColor: '245, 158, 11'
    },
    {
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
      title: 'Persönliche Betreuung',
      description: 'Dedizierte Ansprechpartner für alle Ihre Anliegen. Individuelle Beratung und maßgeschneiderte Lösungen für Ihre Anlageziele.',
      stats: { value: '85+', label: 'Kunden' },
      color: '#0EA5E9',
      colorEnd: '#38BDF8',
      glowColor: '14, 165, 233'
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'Höchste Sicherheit',
      description: 'Strenge Sicherheitsprotokolle und Risikomanagement-Systeme. Ihre Vermögenswerte sind durch umfassende Sicherheitsmaßnahmen geschützt.',
      stats: { value: 'AAA', label: 'Rating' },
      color: '#8B5CF6',
      colorEnd: '#A78BFA',
      glowColor: '139, 92, 246'
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Globale Reichweite',
      description: 'Zugang zu internationalen Märkten und Anlageklassen. Profitieren Sie von globalen Investmentchancen mit lokaler Expertise.',
      stats: { value: '12+', label: 'Märkte' },
      color: '#EF4444',
      colorEnd: '#F87171',
      glowColor: '239, 68, 68'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative py-24 bg-white bg-filigree overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 right-0 w-[700px] h-[700px] bg-primary-300 rounded-full blur-[250px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan rounded-full blur-[250px] opacity-5"
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
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
            className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-6 py-3 mb-6 shadow-soft"
          >
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Warum SPINONE CAPITAL</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ihr Partner für{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
              professionelles Vermögensmanagement
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Vertrauen Sie auf Erfahrung, Expertise und regulatorische Exzellenz
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-primary-300 transition-all duration-500 shadow-card hover:shadow-card-hover"
            >
              {/* Hover Glow Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${reason.color}08, transparent)` }}
              />

              {/* Top gradient line */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${reason.color}, ${reason.color}60)` }}
              />

              {/* Stats Badge */}
              <div className="absolute top-6 right-6">
                <div
                  className="rounded-xl px-4 py-2 border border-slate-200"
                  style={{ background: `${reason.color}08` }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ color: reason.color }}
                  >
                    {reason.stats.value}
                  </p>
                  <p className="text-xs text-slate-500 font-semibold">{reason.stats.label}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-6">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-20"
                    style={{ background: `linear-gradient(135deg, ${reason.color}50, ${reason.color}20)` }}
                  />
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${reason.color}, ${reason.color}80)` }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold mb-4 bg-clip-text text-transparent transition-all duration-300"
                    style={{ backgroundImage: `linear-gradient(135deg, ${reason.color}, ${reason.colorEnd})` }}>
                  {reason.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
