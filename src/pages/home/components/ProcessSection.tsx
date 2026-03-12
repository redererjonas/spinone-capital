import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Erstgespräch & Analyse',
      description: 'Wir analysieren Ihre Anlageziele, Risikobereitschaft und Ihren Anlagehorizont in einem persönlichen Beratungsgespräch.',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      color: '#2563EB',
      glowColor: '37, 99, 235'
    },
    {
      number: '02',
      title: 'Strategieentwicklung',
      description: 'Unsere Experten entwickeln eine maßgeschneiderte Anlagestrategie mit optimaler Asset Allocation und Risikomanagement.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      color: '#0EA5E9',
      glowColor: '14, 165, 233'
    },
    {
      number: '03',
      title: 'Umsetzung & Investition',
      description: 'Nach Ihrer Freigabe setzen wir die Strategie professionell um. Alle Transaktionen werden transparent dokumentiert.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: '#3B82F6',
      glowColor: '59, 130, 246'
    },
    {
      number: '04',
      title: 'Monitoring & Reporting',
      description: 'Kontinuierliche Überwachung Ihrer Investments mit regelmäßigen Reports und strategischen Anpassungen bei Bedarf.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: '#0EA5E9',
      glowColor: '14, 165, 233'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 bg-filigree overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="hidden md:block absolute top-1/3 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary-200/5 rounded-full blur-[250px]" />
        <div className="hidden md:block absolute bottom-1/3 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-primary-300/5 rounded-full blur-[250px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-6 py-3 mb-6"
          >
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Unser Prozess</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ihr Weg zur{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
              erfolgreichen Anlage
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            In vier transparenten Schritten zu Ihrer individuellen Anlagestrategie
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Connector line (between cards on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 z-20" style={{ background: `linear-gradient(90deg, ${step.color}, ${steps[index + 1].color})` }} />
              )}

              <div
                className="relative bg-white rounded-2xl border border-slate-200 hover:border-primary-300 transition-all duration-500 p-8 h-full shadow-card hover:shadow-card-hover"
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}60)` }} />

                {/* Number + Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}80)` }}
                  >
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${step.color}12` }}
                  >
                    <svg className="w-5 h-5" style={{ color: step.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
