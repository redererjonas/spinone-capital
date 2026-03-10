'use client';

import { motion } from 'framer-motion';

export default function Timeline() {
  const milestones = [
    {
      year: '2010',
      title: 'Gründung in München',
      description: 'Gründung der Spinone Capital GmbH mit Fokus auf institutionelles Vermögensmanagement. BaFin-ID: 10160251.',
      icon: 'ri-building-line',
      gradient: 'from-[#2563EB] to-[#3B82F6]'
    },
    {
      year: '2011',
      title: 'KAGB-Registrierung',
      description: 'Erfolgreiche Registrierung nach §44 iVm §2 Abs.4 KAGB als Verwaltungsgesellschaft für Spezial-AIF. Aufnahme der regulierten Geschäftstätigkeit unter BaFin-Aufsicht.',
      icon: 'ri-shield-check-line',
      gradient: 'from-[#0EA5E9] to-[#2563EB]'
    },
    {
      year: '2013',
      title: 'Erweiterung Produktpalette',
      description: 'Einführung umfassender Anlagelösungen: Festgeld, Flexgeld und Tagesgeld für institutionelle Anleger. Aufbau professioneller Risikomanagement-Strukturen.',
      icon: 'ri-briefcase-line',
      gradient: 'from-[#3B82F6] to-[#0EA5E9]'
    },
    {
      year: '2015',
      title: 'Equity & Fixed Income',
      description: 'Expansion in Aktien- und Anleihenmanagement. Aufbau internationaler Marktexpertise und Etablierung systematischer Anlagestrategien.',
      icon: 'ri-line-chart-line',
      gradient: 'from-[#0EA5E9] to-[#2563EB]'
    },
    {
      year: '2018',
      title: 'Digitalisierung & Innovation',
      description: 'Implementierung moderner Technologieplattformen für Portfolio-Management und Reporting. Einführung digitaler Mandantenkommunikation.',
      icon: 'ri-computer-line',
      gradient: 'from-[#2563EB] to-[#0EA5E9]'
    },
    {
      year: '2020',
      title: 'Governance-Excellence',
      description: 'Weiterentwicklung der Governance-Strukturen und Compliance-Prozesse. Zertifizierung nach höchsten institutionellen Standards.',
      icon: 'ri-award-line',
      gradient: 'from-[#3B82F6] to-[#2563EB]'
    },
    {
      year: '2022',
      title: 'Nachhaltigkeit & ESG',
      description: 'Integration von ESG-Kriterien in alle Anlagestrategien. Entwicklung nachhaltiger Investmentlösungen für zukunftsorientierte Mandanten.',
      icon: 'ri-leaf-line',
      gradient: 'from-[#0EA5E9] to-[#3B82F6]'
    },
    {
      year: '2024',
      title: 'Kontinuierliches Wachstum',
      description: 'Weiterer Ausbau des verwalteten Vermögens und der Mandantenbasis. Fokus auf Innovation, Qualität und langfristige Partnerschaften.',
      icon: 'ri-rocket-line',
      gradient: 'from-[#2563EB] to-[#0EA5E9]'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-full px-6 py-3 mb-6">
            <i className="ri-time-line text-[#0EA5E9]" />
            <span className="text-sm text-slate-800 font-semibold">Unsere Geschichte</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Entwicklung &{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
              Meilensteine
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Von der Gründung bis heute - eine Erfolgsgeschichte geprägt von Qualität, Innovation und Vertrauen
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1">
            <div className="h-full bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#0EA5E9] rounded-full" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} rounded-2xl blur-xl opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative bg-white shadow-sm border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-all duration-500">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${milestone.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                          <i className={`${milestone.icon} text-xl text-white`} />
                        </div>
                        <div className={`text-3xl font-bold bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`}>
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} rounded-full blur-md opacity-40`} />
                    <div className={`relative w-6 h-6 bg-gradient-to-br ${milestone.gradient} rounded-full border-4 border-white shadow-lg z-10`} />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
