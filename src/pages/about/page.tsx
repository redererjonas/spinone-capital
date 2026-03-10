'use client';

import AboutHero from './components/AboutHero';
import AboutContent from './components/AboutContent';
import Timeline from './components/Timeline';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <AboutHero />
        <AboutContent />
        <Timeline />

        {/* Mission & Vision Section */}
        <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#0EA5E9]/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative bg-white shadow-sm border border-slate-200 rounded-3xl p-10 hover:border-[#2563EB]/30 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#2563EB]/15">
                    <i className="ri-compass-3-line text-3xl text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Unsere Mission</h2>
                  <p className="text-slate-500 leading-relaxed mb-4">
                    Wir schaffen nachhaltige Werte für unsere Mandanten durch professionelles Vermögensmanagement nach höchsten institutionellen Standards. Unser Fokus liegt auf Transparenz, Risikomanagement und langfristigem Erfolg.
                  </p>
                  <p className="text-slate-500 leading-relaxed">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/5 to-[#3B82F6]/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative bg-white shadow-sm border border-slate-200 rounded-3xl p-10 hover:border-[#0EA5E9]/30 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0EA5E9]/15">
                    <i className="ri-eye-line text-3xl text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Unsere Vision</h2>
                  <p className="text-slate-500 leading-relaxed mb-4">
                    Wir streben danach, die führende Vermögensmanagement-Gesellschaft für institutionelle und qualifizierte Anleger in Deutschland zu werden. Durch kontinuierliche Innovation und höchste Servicequalität setzen wir neue Maßstäbe.
                  </p>
                  <p className="text-slate-500 leading-relaxed">
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Unsere <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">Werte</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                Diese Prinzipien leiten unser tägliches Handeln und prägen unsere Unternehmenskultur
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'ri-shield-check-line',
                  title: 'Integrität',
                  description: 'Höchste ethische Standards und vollständige Transparenz in allen Geschäftsbeziehungen',
                  gradient: 'from-[#2563EB] to-[#3B82F6]'
                },
                {
                  icon: 'ri-user-heart-line',
                  title: 'Mandantenfokus',
                  description: 'Ihre Ziele und Ihr Erfolg stehen im Mittelpunkt unseres Handelns',
                  gradient: 'from-[#0EA5E9] to-[#2563EB]'
                },
                {
                  icon: 'ri-lightbulb-line',
                  title: 'Innovation',
                  description: 'Kontinuierliche Weiterentwicklung unserer Strategien und Prozesse',
                  gradient: 'from-[#3B82F6] to-[#0EA5E9]'
                },
                {
                  icon: 'ri-team-line',
                  title: 'Expertise',
                  description: 'Tiefes Fachwissen und langjährige Kapitalmarkterfahrung',
                  gradient: 'from-[#0EA5E9] to-[#2563EB]'
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
                  <div className="relative bg-white shadow-sm border border-slate-200 rounded-2xl p-8 text-center hover:border-slate-300 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <i className={`${value.icon} text-2xl text-white`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Excellence */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Regulatorische <span className="bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] bg-clip-text text-transparent">Exzellenz</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto">
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
                  gradient: 'from-[#2563EB] to-[#3B82F6]'
                },
                {
                  icon: 'ri-shield-check-line',
                  title: 'BaFin-Aufsicht',
                  description: 'Unterliegen der Aufsicht der Bundesanstalt für Finanzdienstleistungsaufsicht. Regelmäßige Prüfungen und vollständige Compliance mit allen Vorgaben.',
                  badge: 'Kontinuierlich überwacht',
                  gradient: 'from-[#0EA5E9] to-[#2563EB]'
                },
                {
                  icon: 'ri-file-shield-line',
                  title: 'Governance',
                  description: 'Professionelle Governance-Strukturen mit klaren Verantwortlichkeiten, umfassendem Risikomanagement und transparenter Berichterstattung.',
                  badge: 'Höchste Standards',
                  gradient: 'from-[#3B82F6] to-[#0EA5E9]'
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative bg-white shadow-sm border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-all duration-500 h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                        <i className={`${item.icon} text-2xl text-white`} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-500 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-2 text-[#0EA5E9] font-semibold">
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
