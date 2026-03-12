import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white bg-filigree">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white"></div>
        <div className="hidden md:block absolute top-20 left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary-200/10 rounded-full blur-[150px]" />
        <div className="hidden md:block absolute bottom-20 right-10 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-accent-cyan/5 rounded-full blur-[180px]" />
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-primary-300/5 rounded-full blur-[200px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-6 py-3 mb-8 shadow-soft"
          >
            <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_10px_#0EA5E9]" />
            <span className="text-sm font-semibold text-slate-800">KAGB-Registrierte Kapitalverwaltung</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Professionelle<br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
              Kapitalverwaltung
            </span><br />
            für Ihre Zukunft
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-700 mb-4 max-w-4xl mx-auto leading-relaxed"
          >
            Regulierte Anlagelösungen nach KAGB für institutionelle und qualifizierte Anleger
          </motion.p>

          {/* Regulatory Notice */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-slate-400 mb-12 max-w-3xl mx-auto"
          >
            Registriert nach Paragraph 44 iVm Paragraph 2 Abs.4 KAGB | Sitz in München | Über 15 Jahre Kapitalmarkterfahrung
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Link to="/kontakt" className="group relative focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-base font-bold rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300 whitespace-nowrap flex items-center space-x-3">
                <span>Jetzt informieren</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            <Link to="/leistungen/festgeld" className="group px-10 py-4 bg-white border border-slate-300 text-slate-800 text-base font-bold rounded-2xl hover:bg-slate-50 hover:border-primary-300 hover:shadow-lg transition-all duration-300 whitespace-nowrap flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
              <span>Anlageprodukte entdecken</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', value: '180 Mio. EUR', label: 'Verwaltetes Vermögen', color: '#2563EB' },
              { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', value: '15+ Jahre', label: 'Markterfahrung', color: '#0EA5E9' },
              { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', value: '85+', label: 'Zufriedene Kunden', color: '#3B82F6' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', value: '100%', label: 'KAGB-Konform', color: '#0EA5E9' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white shadow-card border border-slate-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-card-hover transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}08)` }}
                >
                  <svg className="w-7 h-7" style={{ color: stat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-slate-300 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], height: ['6px', '12px', '6px'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 bg-gradient-to-b from-primary-600 to-primary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
