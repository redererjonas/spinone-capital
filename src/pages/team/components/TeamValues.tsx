'use client';

import { motion } from 'framer-motion';

export default function TeamValues() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Kontinuierliche Weiterbildung',
      description: 'Unser Team bildet sich kontinuierlich fort, um stets auf dem neuesten Stand der Kapitalmarktentwicklungen und regulatorischen Anforderungen zu sein.',
      gradient: 'from-[#2563EB] to-[#3B82F6]'
    },
    {
      icon: 'ri-team-line',
      title: 'Kollaborative Kultur',
      description: 'Wir arbeiten interdisziplinär zusammen und nutzen die Expertise aller Teammitglieder für optimale Anlageentscheidungen.',
      gradient: 'from-[#0EA5E9] to-[#2563EB]'
    },
    {
      icon: 'ri-focus-3-line',
      title: 'Mandantenfokus',
      description: 'Die Ziele und der Erfolg unserer Mandanten stehen im Mittelpunkt unseres täglichen Handelns und unserer Entscheidungen.',
      gradient: 'from-[#3B82F6] to-[#0EA5E9]'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Ethische Standards',
      description: 'Höchste Integrität und Transparenz prägen unsere Arbeitsweise und unseren Umgang mit Mandanten und Partnern.',
      gradient: 'from-[#0EA5E9] to-[#2563EB]'
    }
  ];

  return (
    <section className="py-24 bg-white bg-filigree relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Was uns{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
              auszeichnet
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Unsere Teamkultur basiert auf gemeinsamen Werten und dem Streben nach Exzellenz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-fit">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className={`relative w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <i className={`${value.icon} text-3xl text-white`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2563EB] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0EA5E9] rounded-3xl blur-xl opacity-10" />
            <div className="relative bg-white shadow-sm border border-slate-200 rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Werden Sie Teil unseres Teams
              </h3>
              <p className="text-slate-500 max-w-2xl mx-auto mb-8">
                Wir sind immer auf der Suche nach talentierten Fachkräften, die unsere Leidenschaft für exzellente Kapitalverwaltung teilen.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0EA5E9]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#0EA5E9] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Karriere bei Spinone Capital</span>
                <i className="ri-arrow-right-line relative" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
