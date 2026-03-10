'use client';

import { motion } from 'framer-motion';

export default function TeamValues() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Kontinuierliche Weiterbildung',
      description: 'Unser Team bildet sich kontinuierlich fort, um stets auf dem neuesten Stand der Kapitalmarktentwicklungen und regulatorischen Anforderungen zu sein.',
      gradient: 'from-[#6366F1] to-[#A855F7]'
    },
    {
      icon: 'ri-team-line',
      title: 'Kollaborative Kultur',
      description: 'Wir arbeiten interdisziplinär zusammen und nutzen die Expertise aller Teammitglieder für optimale Anlageentscheidungen.',
      gradient: 'from-[#06B6D4] to-[#6366F1]'
    },
    {
      icon: 'ri-focus-3-line',
      title: 'Mandantenfokus',
      description: 'Die Ziele und der Erfolg unserer Mandanten stehen im Mittelpunkt unseres täglichen Handelns und unserer Entscheidungen.',
      gradient: 'from-[#A855F7] to-[#EC4899]'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Ethische Standards',
      description: 'Höchste Integrität und Transparenz prägen unsere Arbeitsweise und unseren Umgang mit Mandanten und Partnern.',
      gradient: 'from-[#EC4899] to-[#06B6D4]'
    }
  ];

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Was uns{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
              auszeichnet
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className={`relative w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <i className={`${value.icon} text-3xl text-white`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#6366F1] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Werden Sie Teil unseres Teams
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Wir sind immer auf der Suche nach talentierten Fachkräften, die unsere Leidenschaft für exzellente Kapitalverwaltung teilen.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
