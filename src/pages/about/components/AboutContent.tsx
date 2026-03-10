'use client';

import { motion } from 'framer-motion';

export default function AboutContent() {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Regulatorische Exzellenz',
      description: 'Vollständige Konformität mit allen regulatorischen Anforderungen nach KAGB',
      gradient: 'from-[#2563EB] to-[#3B82F6]'
    },
    {
      icon: 'ri-eye-line',
      title: 'Transparenz',
      description: 'Klare Kommunikation und vollständige Offenlegung aller Anlageentscheidungen',
      gradient: 'from-[#0EA5E9] to-[#2563EB]'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Kundenorientierung',
      description: 'Individuelle Lösungen basierend auf Ihren spezifischen Anlagezielen',
      gradient: 'from-[#3B82F6] to-[#0EA5E9]'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance',
      description: 'Langfristige Wertschöpfung durch bewährte Anlagestrategien',
      gradient: 'from-[#0EA5E9] to-[#2563EB]'
    }
  ];

  const expertise = [
    {
      title: 'Governance & Compliance',
      description: 'Strenge Governance-Strukturen und umfassende Compliance-Prozesse gewährleisten höchste Standards in allen Geschäftsbereichen.',
      icon: 'ri-shield-star-line',
      gradient: 'from-[#2563EB] to-[#0EA5E9]'
    },
    {
      title: 'Risikomanagement',
      description: 'Systematische Identifikation, Bewertung und Steuerung von Risiken durch modernste Risikomanagement-Systeme und erfahrene Spezialisten.',
      icon: 'ri-shield-line',
      gradient: 'from-[#3B82F6] to-[#2563EB]'
    },
    {
      title: 'Kapitalmarktexpertise',
      description: 'Tiefgreifende Kenntnisse internationaler Kapitalmärkte und langjährige Erfahrung in der Verwaltung von Spezial-AIF bis 500 Mio. EUR.',
      icon: 'ri-global-line',
      gradient: 'from-[#0EA5E9] to-[#3B82F6]'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white bg-filigree">
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
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#2563EB]/5 to-[#0EA5E9]/5 border border-slate-200 rounded-full px-6 py-3 mb-6">
                <i className="ri-building-4-line text-[#2563EB] text-xl" />
                <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Unser Unternehmen</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Spinone Capital GmbH
              </h2>
              <div className="space-y-4 text-lg text-slate-500 leading-relaxed">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#3B82F6]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white shadow-sm border border-slate-200 rounded-2xl p-6 hover:border-[#2563EB]/30 transition-all duration-500">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg shadow-[#2563EB]/15">
                        <i className="ri-shield-star-line text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-medium">BaFin-ID</p>
                        <p className="text-lg font-bold text-slate-900">10160251</p>
                      </div>
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/5 to-[#2563EB]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white shadow-sm border border-slate-200 rounded-2xl p-6 hover:border-[#0EA5E9]/30 transition-all duration-500">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#2563EB] rounded-xl flex items-center justify-center shadow-lg shadow-[#0EA5E9]/15">
                        <i className="ri-global-line text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-medium">LEI-Code</p>
                        <p className="text-xs font-bold text-slate-900">529900ABC...</p>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-3xl blur-3xl opacity-10" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#2563EB]/5 via-[#3B82F6]/5 to-[#0EA5E9]/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#2563EB]/20">
                      <i className="ri-building-2-line text-6xl text-white" />
                    </div>
                    <p className="text-slate-500 text-lg">Spinone Capital Office München</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Unsere{' '}
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
                Werte
              </span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
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
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
                <div className="relative bg-white shadow-sm border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-all duration-500 h-full">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-lg opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <i className={`${value.icon} text-3xl text-white`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Unsere{' '}
              <span className="bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] bg-clip-text text-transparent">
                Kernkompetenzen
              </span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
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
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-3xl opacity-10 group-hover:opacity-15 transition-opacity duration-500`} />
                    <div className="relative rounded-3xl overflow-hidden border border-slate-200">
                      <div className="aspect-video bg-gradient-to-br from-slate-50 to-blue-50/50 flex items-center justify-center">
                        <div className={`w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500`}>
                          <i className={`${item.icon} text-5xl text-white`} />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-lg opacity-15`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <i className={`${item.icon} text-3xl text-white`} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed">
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
