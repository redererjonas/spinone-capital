'use client';

import { motion } from 'framer-motion';

export default function AboutContent() {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Regulatorische Exzellenz',
      description: 'Vollständige Konformität mit allen regulatorischen Anforderungen nach KAGB',
      gradient: 'from-[#6366F1] to-[#A855F7]'
    },
    {
      icon: 'ri-eye-line',
      title: 'Transparenz',
      description: 'Klare Kommunikation und vollständige Offenlegung aller Anlageentscheidungen',
      gradient: 'from-[#06B6D4] to-[#6366F1]'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Kundenorientierung',
      description: 'Individuelle Lösungen basierend auf Ihren spezifischen Anlagezielen',
      gradient: 'from-[#A855F7] to-[#EC4899]'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance',
      description: 'Langfristige Wertschöpfung durch bewährte Anlagestrategien',
      gradient: 'from-[#EC4899] to-[#06B6D4]'
    }
  ];

  const expertise = [
    {
      title: 'Governance & Compliance',
      description: 'Strenge Governance-Strukturen und umfassende Compliance-Prozesse gewährleisten höchste Standards in allen Geschäftsbereichen.',
      icon: 'ri-shield-star-line',
      gradient: 'from-[#6366F1] to-[#06B6D4]'
    },
    {
      title: 'Risikomanagement',
      description: 'Systematische Identifikation, Bewertung und Steuerung von Risiken durch modernste Risikomanagement-Systeme und erfahrene Spezialisten.',
      icon: 'ri-shield-line',
      gradient: 'from-[#A855F7] to-[#6366F1]'
    },
    {
      title: 'Kapitalmarktexpertise',
      description: 'Tiefgreifende Kenntnisse internationaler Kapitalmärkte und langjährige Erfahrung in der Verwaltung von Spezial-AIF bis 500 Mio. EUR.',
      icon: 'ri-global-line',
      gradient: 'from-[#EC4899] to-[#A855F7]'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Company Introduction */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#6366F1]/10 to-[#06B6D4]/10 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6">
                <i className="ri-building-4-line text-[#6366F1] text-xl" />
                <span className="text-sm font-bold text-white/90 uppercase tracking-wider">Unser Unternehmen</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Spinone Capital GmbH
              </h2>
              <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                <p>
                  Mit Sitz in München sind wir eine nach §44 iVm §2 Abs.4 KAGB registrierte Vermögensmanagement-Gesellschaft, die sich auf die professionelle Verwaltung von Spezial-AIF bis 500 Mio. EUR spezialisiert hat.
                </p>
                <p>
                  Unser Fokus liegt auf der Bereitstellung maßgeschneiderter Anlagelösungen für institutionelle und qualifizierte Anleger. Dabei verbinden wir regulatorische Exzellenz mit innovativen Anlagestrategien.
                </p>
                <p>
                  Durch strikte Governance-Strukturen, umfassendes Risikomanagement und transparente Prozesse schaffen wir die Grundlage für langfristigen Anlageerfolg.
                </p>
              </div>

              {/* Key Facts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.a
                  href="https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=160251"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#6366F1]/50 transition-all duration-500">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#A855F7] rounded-xl flex items-center justify-center shadow-lg shadow-[#6366F1]/25">
                        <i className="ri-shield-star-line text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">BaFin-ID</p>
                        <p className="text-lg font-bold text-white">10160251</p>
                      </div>
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/20 to-[#6366F1]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#06B6D4]/50 transition-all duration-500">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#06B6D4] to-[#6366F1] rounded-xl flex items-center justify-center shadow-lg shadow-[#06B6D4]/25">
                        <i className="ri-global-line text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">LEI-Code</p>
                        <p className="text-xs font-bold text-white">529900ABC...</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#A855F7] rounded-3xl blur-3xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#6366F1]/20 via-[#A855F7]/20 to-[#EC4899]/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#6366F1] to-[#A855F7] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#6366F1]/30">
                      <i className="ri-building-2-line text-6xl text-white" />
                    </div>
                    <p className="text-white/60 text-lg">Spinone Capital Office München</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Unsere{' '}
              <span className="bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
                Werte
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Die Grundpfeiler unserer Unternehmensphilosophie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 h-full">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <i className={`${value.icon} text-3xl text-white`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6366F1] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Unsere{' '}
              <span className="bg-gradient-to-r from-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent">
                Kernkompetenzen
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expertise, die Vertrauen schafft
            </p>
          </motion.div>

          <div className="space-y-12">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className="relative rounded-3xl overflow-hidden border border-white/10">
                      <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                        <div className={`w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500`}>
                          <i className={`${item.icon} text-5xl text-white`} />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-lg opacity-30`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <i className={`${item.icon} text-3xl text-white`} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
