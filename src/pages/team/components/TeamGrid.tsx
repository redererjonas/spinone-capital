'use client';

import { motion } from 'framer-motion';

export default function TeamGrid() {
  const team = [
    {
      name: 'Andreas von Buttlar',
      position: 'Geschäftsführer & CEO',
      experience: '15+ Jahre Kapitalmarkterfahrung',
      expertise: ['Strategische Führung', 'Business Development', 'Investment Management'],
      qualifications: 'HEC Paris, Flossbach von Storch AG Alumni',
      icon: 'ri-user-star-line',
      gradient: 'from-[#2563EB] to-[#3B82F6]'
    },
    {
      name: 'Sarah Weber',
      position: 'Chief Investment Officer',
      experience: '18+ Jahre Investment Management',
      expertise: ['Portfolio Management', 'Asset Allocation', 'Risikomanagement'],
      qualifications: 'MBA, CAIA',
      icon: 'ri-line-chart-line',
      gradient: 'from-[#0EA5E9] to-[#2563EB]'
    },
    {
      name: 'Thomas Müller',
      position: 'Chief Risk Officer',
      experience: '16+ Jahre Risikomanagement',
      expertise: ['Risikokontrolle', 'Compliance', 'Interne Revision'],
      qualifications: 'Dipl.-Kfm., FRM',
      icon: 'ri-shield-check-line',
      gradient: 'from-[#3B82F6] to-[#0EA5E9]'
    },
    {
      name: 'Dr. Anna Hoffmann',
      position: 'Head of Research',
      experience: '14+ Jahre Kapitalmarktanalyse',
      expertise: ['Marktforschung', 'Fundamentalanalyse', 'Makroökonomie'],
      qualifications: 'Dr. rer. oec., CFA',
      icon: 'ri-search-line',
      gradient: 'from-[#0EA5E9] to-[#2563EB]'
    },
    {
      name: 'Marcus Klein',
      position: 'Head of Fixed Income',
      experience: '15+ Jahre Anleihenmanagement',
      expertise: ['Anleihenstrategien', 'Credit Analysis', 'Duration Management'],
      qualifications: 'M.Sc. Finance, CFA',
      icon: 'ri-stock-line',
      gradient: 'from-[#0EA5E9] to-[#3B82F6]'
    },
    {
      name: 'Julia Becker',
      position: 'Head of Equities',
      experience: '13+ Jahre Aktienmanagement',
      expertise: ['Equity Research', 'Stock Selection', 'Sector Analysis'],
      qualifications: 'MBA, CIIA',
      icon: 'ri-bar-chart-line',
      gradient: 'from-[#2563EB] to-[#0EA5E9]'
    },
    {
      name: 'Robert Fischer',
      position: 'Head of Client Relations',
      experience: '12+ Jahre Kundenbetreuung',
      expertise: ['Relationship Management', 'Beratung', 'Kundenbindung'],
      qualifications: 'Dipl.-Kfm., CFP',
      icon: 'ri-customer-service-line',
      gradient: 'from-[#2563EB] to-[#0EA5E9]'
    },
    {
      name: 'Lisa Zimmermann',
      position: 'Head of Operations',
      experience: '11+ Jahre Operations Management',
      expertise: ['Prozessoptimierung', 'IT-Systeme', 'Qualitätssicherung'],
      qualifications: 'M.Sc. BWL, PMP',
      icon: 'ri-settings-line',
      gradient: 'from-[#3B82F6] to-[#0EA5E9]'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white bg-filigree">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-full px-6 py-3 mb-6">
            <i className="ri-user-star-line text-[#2563EB] text-xl" />
            <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Führungsteam</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Unsere{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
              Experten
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Erfahrene Führungskräfte mit nachgewiesener Expertise in allen Bereichen der Kapitalverwaltung
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-3xl blur-xl opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
              <div className="relative bg-white shadow-sm border border-slate-200 rounded-3xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-500">
                {/* Avatar Area */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-10`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <i className={`${member.icon} text-4xl text-white`} />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-100/50 rounded-xl blur-lg" />
                      <div className="relative w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center">
                        <i className={`${member.icon} text-xl text-[#2563EB]`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
                    {member.position}
                  </p>
                  <p className="text-sm text-slate-500 mb-4 flex items-center space-x-2">
                    <i className="ri-time-line text-[#0EA5E9]" />
                    <span>{member.experience}</span>
                  </p>

                  {/* Qualifications */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-4">
                    <p className="text-xs text-slate-600 font-semibold">{member.qualifications}</p>
                  </div>

                  {/* Expertise */}
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${member.gradient} rounded-full`} />
                        <span className="text-xs text-slate-500">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-[#2563EB]/30 rounded-3xl transition-all duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
