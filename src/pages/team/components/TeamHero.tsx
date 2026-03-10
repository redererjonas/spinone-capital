'use client';

import { motion } from 'framer-motion';

export default function TeamHero() {
  const stats = [
    { value: '15+', label: 'Jahre Erfahrung', gradient: 'from-[#2563EB] to-[#3B82F6]' },
    { value: '25+', label: 'Teammitglieder', gradient: 'from-[#0EA5E9] to-[#2563EB]' },
    { value: '8', label: 'Führungskräfte', gradient: 'from-[#3B82F6] to-[#0EA5E9]' },
    { value: '100%', label: 'Engagement', gradient: 'from-[#0EA5E9] to-[#2563EB]' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white bg-filigree">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white" />
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-full px-6 py-3 mb-8"
          >
            <i className="ri-team-line text-[#3B82F6] text-xl" />
            <span className="text-sm font-semibold text-slate-800">Erfahrung trifft Expertise</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Unser{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
              Team
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-500 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Erfahrene Kapitalmarktexperten mit über 15 Jahren kombinierter Expertise in der professionellen Vermögensverwaltung
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative bg-white shadow-sm border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all duration-500">
                  <p className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
