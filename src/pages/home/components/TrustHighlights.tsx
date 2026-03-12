'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TrustHighlights() {
  const highlights = [
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Sitz in München',
      description: 'Pienzenauerstraße 95, 81925 München',
      detail: 'Deutscher Finanzstandort',
      color: '#2563EB',
      glowColor: '37, 99, 235'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'KAGB-Registrierung',
      description: 'Paragraph 44 iVm Paragraph 2 Abs.4 KAGB',
      detail: 'Vollständig reguliert',
      color: '#0EA5E9',
      glowColor: '14, 165, 233'
    },
    {
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      title: 'BaFin Registriert',
      description: 'BaFin-ID: 10160251',
      detail: 'Bak.Nr.: 160251',
      color: '#3B82F6',
      glowColor: '59, 130, 246',
      link: 'https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=160251'
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'LEI-Code',
      description: '529900ABCDEFGHIJK123',
      detail: 'International identifiziert',
      color: '#0EA5E9',
      glowColor: '14, 165, 233'
    },
    {
      icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
      title: 'Spezial-AIF',
      description: 'Bis 500 Mio. EUR',
      detail: 'Professionelle Verwaltung',
      color: '#0EA5E9',
      glowColor: '14, 165, 233'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Compliance',
      description: 'Höchste Standards',
      detail: 'Transparenz & Governance',
      color: '#3B82F6',
      glowColor: '59, 130, 246'
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
    <section className="relative py-24 overflow-hidden bg-white bg-filigree">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary-300 rounded-full blur-[200px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="hidden md:block absolute bottom-0 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-primary-200 rounded-full blur-[200px]"
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-6 py-3 mb-6 shadow-soft"
          >
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Vertrauen & Sicherheit</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Reguliert, transparent,{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
              vertrauenswürdig
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ihre Sicherheit steht an erster Stelle - vollständig reguliert und überwacht
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((highlight, index) => {
            const content = (
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-primary-300 transition-all duration-300 h-full shadow-card hover:shadow-card-hover"
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${highlight.color}08, transparent)` }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-20"
                    style={{ background: `linear-gradient(135deg, ${highlight.color}50, ${highlight.color}20)` }}
                  />
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${highlight.color}, ${highlight.color}80)` }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={highlight.icon} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 transition-all duration-300">
                  {highlight.title}
                </h3>
                <p className="text-slate-700 font-semibold mb-2">
                  {highlight.description}
                </p>
                <p className="text-sm text-slate-400">
                  {highlight.detail}
                </p>

                {/* Hover Arrow for links */}
                {highlight.link && (
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6" style={{ color: highlight.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );

            return (
              <div key={index} className="group">
                {highlight.link ? (
                  <a href={highlight.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white border border-slate-200 rounded-2xl p-8 shadow-soft">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-600/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400 mb-1">Haben Sie Fragen?</p>
                <p className="text-xl font-bold text-slate-900">Wir beraten Sie gerne</p>
              </div>
            </div>
            <Link to="/kontakt" className="group relative focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-base font-bold rounded-xl shadow-xl transform group-hover:scale-105 transition-all duration-300 whitespace-nowrap flex items-center space-x-2">
                <span>Kontakt aufnehmen</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
