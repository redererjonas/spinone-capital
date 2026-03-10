'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FestgeldPage() {
  const [calculatorData, setCalculatorData] = useState({
    amount: 50000,
    duration: 24,
    interestRate: 3.5
  });

  const calculateReturn = () => {
    const years = calculatorData.duration / 12;
    const totalReturn = calculatorData.amount * Math.pow(1 + calculatorData.interestRate / 100, years);
    const profit = totalReturn - calculatorData.amount;
    return { totalReturn, profit };
  };

  const { totalReturn, profit } = calculateReturn();

  const benefits = [
    {
      icon: 'ri-lock-line',
      title: 'Höchste Sicherheit',
      description: 'Festgeld bietet maximale Planungssicherheit durch feste Zinssätze und garantierte Laufzeiten. Ihr Kapital ist während der gesamten Anlagedauer geschützt.'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Planbare Erträge',
      description: 'Von Beginn an wissen Sie exakt, welche Rendite Sie am Ende der Laufzeit erhalten. Keine Überraschungen, vollständige Transparenz bei allen Konditionen.'
    },
    {
      icon: 'ri-time-line',
      title: 'Flexible Laufzeiten',
      description: 'Wählen Sie zwischen verschiedenen Laufzeiten von 1 bis 10 Jahren. Passen Sie Ihre Anlage optimal an Ihre Liquiditätsplanung und Anlageziele an.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Kapitalschutz',
      description: 'Ihr eingesetztes Kapital bleibt während der gesamten Laufzeit geschützt. Am Ende der Laufzeit erhalten Sie Ihr Kapital plus die vereinbarten Zinsen zurück.'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Transparente Konditionen',
      description: 'Alle Konditionen werden vor Vertragsabschluss klar kommuniziert. Keine versteckten Gebühren, keine unerwarteten Kosten - vollständige Transparenz.'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Attraktive Verzinsung',
      description: 'Profitieren Sie von wettbewerbsfähigen Zinssätzen, die über der Inflationsrate liegen. Je länger die Laufzeit, desto höher die Rendite.'
    }
  ];

  const targetGroups = [
    {
      icon: 'ri-building-line',
      title: 'Institutionelle Investoren',
      description: 'Versicherungen, Pensionskassen und Stiftungen, die auf stabile und planbare Erträge angewiesen sind.'
    },
    {
      icon: 'ri-government-line',
      title: 'Öffentliche Einrichtungen',
      description: 'Kommunen und öffentliche Institutionen mit langfristigem Anlagehorizont und hohen Sicherheitsanforderungen.'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Unternehmen',
      description: 'Firmen, die liquide Mittel sicher und rentabel anlegen möchten, ohne Kursrisiken einzugehen.'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Qualifizierte Anleger',
      description: 'Vermögende Privatpersonen, die konservative Anlagestrategien mit planbaren Erträgen bevorzugen.'
    }
  ];

  const risks = [
    {
      title: 'Liquiditätsrisiko',
      description: 'Während der Laufzeit ist das Kapital gebunden. Eine vorzeitige Kündigung ist in der Regel nicht oder nur mit Zinsverlusten möglich.',
      level: 'Mittel'
    },
    {
      title: 'Inflationsrisiko',
      description: 'Bei steigender Inflation kann die reale Kaufkraft der Erträge sinken, wenn die Zinsen nicht entsprechend angepasst werden.',
      level: 'Niedrig'
    },
    {
      title: 'Opportunitätsrisiko',
      description: 'Bei steigenden Marktzinsen während der Laufzeit können Sie nicht von höheren Zinsen profitieren.',
      level: 'Niedrig'
    },
    {
      title: 'Emittentenrisiko',
      description: 'Das Risiko, dass die Bank oder Institution, bei der das Festgeld angelegt ist, zahlungsunfähig wird.',
      level: 'Sehr Niedrig'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Beratung', description: 'Persönliches Gespräch zur Ermittlung Ihrer Anlageziele und Risikobereitschaft', icon: 'ri-chat-3-line' },
    { step: '02', title: 'Konditionen', description: 'Auswahl der optimalen Laufzeit und Festlegung der Zinssätze', icon: 'ri-file-list-line' },
    { step: '03', title: 'Anlage', description: 'Einzahlung des Kapitals und Vertragsabschluss mit allen Details', icon: 'ri-bank-line' },
    { step: '04', title: 'Auszahlung', description: 'Am Laufzeitende erhalten Sie Ihr Kapital plus Zinsen zurück', icon: 'ri-money-euro-circle-line' }
  ];

  return (
    <div className="min-h-screen bg-white bg-filigree">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <i className="ri-safe-line text-xl text-white"></i>
              </div>
              <span className="text-sm font-semibold text-slate-700">Festgeld</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 mb-6">
              Stabile und planbare{' '}
              <span className="gradient-text">Renditen</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-2xl">
              Professionelle Festgeldanlagen für institutionelle Investoren mit höchster Sicherheit und transparenten Konditionen. Planbare Erträge bei festen Laufzeiten.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-primary flex items-center space-x-2">
                <span>Beratung anfragen</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
              <Link to="/ueber-uns" className="btn-outline flex items-center space-x-2">
                <i className="ri-play-circle-line"></i>
                <span>Mehr erfahren</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
              <i className="ri-calculator-line text-3xl text-white"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Festgeld-<span className="gradient-text">Rechner</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Berechnen Sie Ihre potenzielle Rendite mit unserem interaktiven Rechner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-8">Ihre Anlage</h3>

              <div className="space-y-8">
                {/* Amount */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-slate-600">Anlagebetrag</label>
                    <span className="text-2xl font-bold gradient-text">{calculatorData.amount.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={calculatorData.amount}
                    onChange={(e) => setCalculatorData({ ...calculatorData, amount: Number(e.target.value) })}
                    className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>10.000 EUR</span>
                    <span>1.000.000 EUR</span>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-slate-600">Laufzeit</label>
                    <span className="text-2xl font-bold gradient-text">{calculatorData.duration} Monate</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="120"
                    step="6"
                    value={calculatorData.duration}
                    onChange={(e) => setCalculatorData({ ...calculatorData, duration: Number(e.target.value) })}
                    className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>1 Jahr</span>
                    <span>10 Jahre</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-slate-600">Zinssatz p.a.</label>
                    <span className="text-2xl font-bold gradient-text">{calculatorData.interestRate.toFixed(2)} %</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="0.1"
                    value={calculatorData.interestRate}
                    onChange={(e) => setCalculatorData({ ...calculatorData, interestRate: Number(e.target.value) })}
                    className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>1,0 %</span>
                    <span>6,0 %</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 glass-effect rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <i className="ri-information-line text-2xl text-accent-cyan"></i>
                  <h4 className="font-semibold text-slate-900">Hinweis</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Die tatsächlichen Zinssätze können je nach Marktlage und individueller Vereinbarung variieren. Kontaktieren Sie uns für ein persönliches Angebot.
                </p>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-purple shadow-lg">
                <div className="absolute top-0 right-0 w-40 h-40 bg-slate-100 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-100 rounded-full -ml-16 -mb-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <i className="ri-money-euro-circle-line text-3xl text-white"></i>
                    <h3 className="text-2xl font-heading font-bold text-white">Ihre Rendite</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-slate-600 text-sm mb-2">Gesamtertrag nach {calculatorData.duration} Monaten</p>
                      <p className="text-5xl font-bold text-white">{totalReturn.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                    </div>

                    <div className="h-px bg-white/20"></div>

                    <div>
                      <p className="text-slate-600 text-sm mb-2">Zinsgewinn</p>
                      <p className="text-3xl font-bold text-success-light">+ {profit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center mb-4">
                    <i className="ri-calendar-line text-2xl text-primary-400"></i>
                  </div>
                  <p className="text-sm text-slate-500 mb-2">Laufzeit</p>
                  <p className="text-2xl font-bold text-slate-900">{(calculatorData.duration / 12).toFixed(1)} Jahre</p>
                </div>

                <div className="glass-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-success/20 to-success-dark/20 rounded-xl flex items-center justify-center mb-4">
                    <i className="ri-percent-line text-2xl text-success"></i>
                  </div>
                  <p className="text-sm text-slate-500 mb-2">Rendite p.a.</p>
                  <p className="text-2xl font-bold text-slate-900">{calculatorData.interestRate.toFixed(2)} %</p>
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-highlight">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-highlight/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-lightbulb-line text-xl text-highlight"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Tipp für höhere Renditen</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Je länger die Laufzeit, desto höher der Zinssatz. Bei Anlagen über 5 Jahre können Sie von besonders attraktiven Konditionen profitieren.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Warum <span className="gradient-text">Festgeld</span>?
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Die ideale Lösung für konservative Anleger mit langfristigem Horizont
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'ri-percent-line', title: 'Feste Zinssätze', desc: 'Profitieren Sie von garantierten Zinssätzen, die für die gesamte Laufzeit festgeschrieben sind. Keine Schwankungen, keine Unsicherheiten.', highlight: 'Bis zu 4,5% p.a.' },
              { icon: 'ri-shield-check-line', title: 'Einlagensicherung', desc: 'Ihre Einlagen sind durch die gesetzliche Einlagensicherung geschützt. Zusätzlicher Schutz durch institutionelle Sicherungssysteme.', highlight: 'Bis zu 100.000 EUR pro Kunde' },
              { icon: 'ri-money-euro-circle-line', title: 'Mindestanlage', desc: 'Flexible Mindestanlagebeträge ermöglichen sowohl kleinere als auch größere Investments nach Ihren individuellen Bedürfnissen.', highlight: 'Ab 10.000 EUR' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 card-hover"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-4">{feature.desc}</p>
                <div className="text-primary-400 font-semibold">{feature.highlight}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Ihre <span className="gradient-text">Vorteile</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Profitieren Sie von umfassenden Vorteilen bei Ihrer Festgeldanlage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 card-hover group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-purple/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-2xl text-primary-400`}></i>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Für wen ist <span className="gradient-text">Festgeld</span> geeignet?
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Entdecken Sie, ob Festgeld die richtige Anlageform für Sie ist
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 flex items-start space-x-6 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <i className={`${group.icon} text-3xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{group.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{group.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Risiken <span className="gradient-text">verstehen</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Transparente Information über mögliche Risiken Ihrer Anlage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {risks.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-heading font-bold text-slate-900">{risk.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    risk.level === 'Sehr Niedrig' ? 'bg-success/10 text-success-light' :
                    risk.level === 'Niedrig' ? 'bg-accent-cyan/10 text-accent-cyan' :
                    risk.level === 'Mittel' ? 'bg-highlight/10 text-highlight' :
                    'bg-accent-pink/10 text-accent-pink'
                  }`}>
                    {risk.level}
                  </span>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              So funktioniert <span className="gradient-text">Festgeld</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Einfacher Prozess von der Beratung bis zur Auszahlung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-purple rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-heading font-bold text-white">{item.step}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-highlight to-highlight-dark rounded-full flex items-center justify-center shadow-lg">
                    <i className={`${item.icon} text-white text-sm`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-cyan/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-accent-cyan/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Interessiert an <span className="gradient-text">Festgeld</span>?
              </h2>
              <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
                Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unseren Experten und erfahren Sie mehr über unsere Festgeld-Lösungen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/kontakt" className="btn-primary flex items-center space-x-2">
                  <span>Beratung anfragen</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link to="/leistungen/flexgeld" className="btn-outline flex items-center space-x-2">
                  <span>Flexgeld entdecken</span>
                  <i className="ri-exchange-line"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
