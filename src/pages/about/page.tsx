'use client';

import AboutHero from './components/AboutHero';
import AboutContent from './components/AboutContent';
import Timeline from './components/Timeline';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <main>
        <AboutHero />
        <AboutContent />
        <Timeline />

        {/* Mission & Vision Section */}
        <section className="py-24 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#06B6D4]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-[#6366F1]/50 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#A855F7] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#6366F1]/25">
                    <i className="ri-compass-3-line text-3xl text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Unsere Mission</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Wir schaffen nachhaltige Werte für unsere Mandanten durch professionelles Vermögensmanagement nach höchsten institutionellen Standards. Unser Fokus liegt auf Transparenz, Risikomanagement und langfristigem Erfolg.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Als KAGB-registrierte Vermögensmanagement-Gesellschaft verbinden wir regulatorische Exzellenz mit innovativen Anlagestrategien und persönlicher Betreuung.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/20 to-[#EC4899]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-[#06B6D4]/50 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#06B6D4] to-[#EC4899] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#06B6D4]/25">
                    <i className="ri-eye-line text-3xl text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Unsere Vision</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Wir streben danach, die führende Vermögensmanagement-Gesellschaft für institutionelle und qualifizierte Anleger in Deutschland zu werden. Durch kontinuierliche Innovation und höchste Servicequalität setzen wir neue Maßstäbe.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Unser Ziel ist es, langfristige Partnerschaften aufzubauen, die auf Vertrauen, Expertise und messbarem Erfolg basieren.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Unsere <span className="bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">Werte</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Diese Prinzipien leiten unser tägliches Handeln und prägen unsere Unternehmenskultur
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'ri-shield-check-line',
                  title: 'Integrität',
                  description: 'Höchste ethische Standards und vollständige Transparenz in allen Geschäftsbeziehungen',
                  gradient: 'from-[#6366F1] to-[#A855F7]'
                },
                {
                  icon: 'ri-user-heart-line',
                  title: 'Mandantenfokus',
                  description: 'Ihre Ziele und Ihr Erfolg stehen im Mittelpunkt unseres Handelns',
                  gradient: 'from-[#06B6D4] to-[#6366F1]'
                },
                {
                  icon: 'ri-lightbulb-line',
                  title: 'Innovation',
                  description: 'Kontinuierliche Weiterentwicklung unserer Strategien und Prozesse',
                  gradient: 'from-[#A855F7] to-[#EC4899]'
                },
                {
                  icon: 'ri-team-line',
                  title: 'Expertise',
                  description: 'Tiefes Fachwissen und langjährige Kapitalmarkterfahrung',
                  gradient: 'from-[#EC4899] to-[#06B6D4]'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <i className={`${value.icon} text-2xl text-white`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Excellence */}
        <section className="py-24 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Regulatorische <span className="bg-gradient-to-r from-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent">Exzellenz</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Vollständige Konformität mit allen gesetzlichen Anforderungen
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-government-line',
                  title: 'KAGB-Registrierung',
                  description: 'Registriert nach §44 iVm §2 Abs.4 KAGB als Verwaltungsgesellschaft für Spezial-AIF mit einem verwalteten Vermögen bis zu 500 Millionen Euro.',
                  badge: 'Vollständig konform',
                  gradient: 'from-[#6366F1] to-[#A855F7]'
                },
                {
                  icon: 'ri-shield-check-line',
                  title: 'BaFin-Aufsicht',
                  description: 'Unterliegen der Aufsicht der Bundesanstalt für Finanzdienstleistungsaufsicht. Regelmäßige Prüfungen und vollständige Compliance mit allen Vorgaben.',
                  badge: 'Kontinuierlich überwacht',
                  gradient: 'from-[#06B6D4] to-[#6366F1]'
                },
                {
                  icon: 'ri-file-shield-line',
                  title: 'Governance',
                  description: 'Professionelle Governance-Strukturen mit klaren Verantwortlichkeiten, umfassendem Risikomanagement und transparenter Berichterstattung.',
                  badge: 'Höchste Standards',
                  gradient: 'from-[#A855F7] to-[#EC4899]'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-10 group-hover:opacity-25 transition-opacity duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                        <i className={`${item.icon} text-2xl text-white`} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-2 text-[#06B6D4] font-semibold">
                      <i className="ri-check-line" />
                      <span className="text-sm">{item.badge}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
