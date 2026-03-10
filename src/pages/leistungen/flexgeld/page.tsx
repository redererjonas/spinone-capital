'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FlexgeldPage() {
  const [calculatorData, setCalculatorData] = useState({
    amount: 75000,
    duration: 18,
    interestRate: 3.2,
    earlyWithdrawal: false,
    withdrawalMonth: 12
  });

  const calculateReturn = () => {
    const years = calculatorData.duration / 12;
    const effectiveRate = calculatorData.earlyWithdrawal
      ? calculatorData.interestRate * 0.7
      : calculatorData.interestRate;

    const actualDuration = calculatorData.earlyWithdrawal
      ? calculatorData.withdrawalMonth / 12
      : years;

    const totalReturn = calculatorData.amount * Math.pow(1 + effectiveRate / 100, actualDuration);
    const profit = totalReturn - calculatorData.amount;
    const penalty = calculatorData.earlyWithdrawal
      ? (calculatorData.amount * Math.pow(1 + calculatorData.interestRate / 100, actualDuration) - totalReturn)
      : 0;

    return { totalReturn, profit, penalty, effectiveRate };
  };

  const { totalReturn, profit, penalty, effectiveRate } = calculateReturn();

  const benefits = [
    {
      icon: 'ri-exchange-line',
      title: 'Variable Laufzeiten',
      description: 'Wahlen Sie zwischen verschiedenen Laufzeitoptionen von 3 Monaten bis 5 Jahren. Passen Sie Ihre Anlage flexibel an veranderte Bedurfnisse an.'
    },
    {
      icon: 'ri-wallet-3-line',
      title: 'Kontrollierte Liquiditat',
      description: 'Im Gegensatz zu Festgeld haben Sie die Moglichkeit, unter bestimmten Bedingungen vorzeitig auf Ihr Kapital zuzugreifen - mit transparenten Konditionen.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Attraktive Zinsen',
      description: 'Profitieren Sie von Zinssatzen, die deutlich uber Tagesgeld liegen, aber dennoch Flexibilitat bieten. Optimales Rendite-Liquiditats-Verhaltnis.'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Anpassungsmoglichkeiten',
      description: 'Bei Laufzeitende konnen Sie Ihre Anlage verlangern, anpassen oder auszahlen lassen. Maximale Flexibilitat fur Ihre Finanzplanung.'
    },
    {
      icon: 'ri-shield-line',
      title: 'Kalkulierbare Ertrage',
      description: 'Trotz Flexibilitat bleiben Ihre Ertrage planbar. Sie wissen jederzeit, welche Rendite Sie bei verschiedenen Szenarien erwarten konnen.'
    },
    {
      icon: 'ri-file-shield-line',
      title: 'Transparente Bedingungen',
      description: 'Alle Konditionen fur vorzeitige Verfugungen sind klar definiert. Keine versteckten Kosten, vollstandige Transparenz bei allen Optionen.'
    }
  ];

  const targetGroups = [
    {
      icon: 'ri-building-line',
      title: 'Mittelstandische Unternehmen',
      description: 'Firmen, die Liquiditatsreserven rentabel anlegen mochten, aber flexibel bleiben mussen fur unvorhergesehene Investitionen.'
    },
    {
      icon: 'ri-funds-line',
      title: 'Family Offices',
      description: 'Vermogensverwaltungen, die eine Balance zwischen Rendite und Verfugbarkeit fur ihre Mandanten suchen.'
    },
    {
      icon: 'ri-hospital-line',
      title: 'Stiftungen & Vereine',
      description: 'Organisationen mit teilweise planbaren, aber auch unvorhersehbaren Liquiditätsbedurfnissen.'
    },
    {
      icon: 'ri-user-settings-line',
      title: 'Flexible Anleger',
      description: 'Investoren, die hohere Renditen als bei Tagesgeld wunschen, aber nicht vollstandig auf Liquiditat verzichten mochten.'
    }
  ];

  const risks = [
    {
      title: 'Zinsanpassungsrisiko',
      description: 'Bei vorzeitiger Verfugung konnen reduzierte Zinssatze anfallen. Die genauen Konditionen sind vertraglich festgelegt.',
      level: 'Mittel'
    },
    {
      title: 'Opportunitatsrisiko',
      description: 'Bei stark steigenden Marktzinsen wahrend der Laufzeit konnen Sie moglicherweise nicht sofort von hoheren Zinsen profitieren.',
      level: 'Niedrig'
    },
    {
      title: 'Liquiditatseinschrankung',
      description: 'Obwohl flexibler als Festgeld, gibt es dennoch Bedingungen fur vorzeitige Verfugungen, die beachtet werden mussen.',
      level: 'Niedrig'
    },
    {
      title: 'Emittentenrisiko',
      description: 'Das Risiko der Zahlungsunfahigkeit der Bank oder Institution, bei der das Flexgeld angelegt ist.',
      level: 'Sehr Niedrig'
    }
  ];

  const comparisonData = [
    { criteria: 'Verfugbarkeit', tagesgeld: 'Taglich', flexgeld: 'Mit Bedingungen', festgeld: 'Laufzeitende' },
    { criteria: 'Zinssatz', tagesgeld: 'Niedrig', flexgeld: 'Mittel-Hoch', festgeld: 'Hoch' },
    { criteria: 'Planbarkeit', tagesgeld: 'Variabel', flexgeld: 'Gut', festgeld: 'Sehr gut' },
    { criteria: 'Flexibilitat', tagesgeld: 'Sehr hoch', flexgeld: 'Hoch', festgeld: 'Niedrig' },
    { criteria: 'Geeignet fur', tagesgeld: 'Kurzfristige Liquiditat', flexgeld: 'Mittelfristige Planung', festgeld: 'Langfristige Anlage' }
  ];

  return (
    <div className="min-h-screen bg-secondary-950">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-cyan/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-purple-dark rounded-xl flex items-center justify-center">
                <i className="ri-exchange-line text-xl text-white"></i>
              </div>
              <span className="text-sm font-semibold text-white/80">Flexgeld</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Flexible Laufzeiten mit{' '}
              <span className="gradient-text">kontrollierter Liquiditat</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              Die perfekte Balance zwischen Rendite und Verfugbarkeit. Flexgeld kombiniert attraktive Zinsen mit der Moglichkeit, bei Bedarf auf Ihr Kapital zuzugreifen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-accent flex items-center space-x-2">
                <span>Beratung anfragen</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
              <button className="btn-outline flex items-center space-x-2">
                <i className="ri-play-circle-line"></i>
                <span>Mehr erfahren</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-950 via-secondary-900/50 to-secondary-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-purple-dark rounded-2xl mb-6 shadow-glow-purple">
              <i className="ri-calculator-line text-3xl text-white"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Flexgeld-<span className="gradient-text">Rechner</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Simulieren Sie verschiedene Szenarien mit vorzeitiger Verfugung
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
              <h3 className="text-2xl font-heading font-bold text-white mb-8">Ihre Anlage</h3>

              <div className="space-y-8">
                {/* Amount */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Anlagebetrag</label>
                    <span className="text-2xl font-bold gradient-text">{calculatorData.amount.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <input
                    type="range"
                    min="25000"
                    max="1000000"
                    step="25000"
                    value={calculatorData.amount}
                    onChange={(e) => setCalculatorData({ ...calculatorData, amount: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-purple"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>25.000 EUR</span>
                    <span>1.000.000 EUR</span>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Geplante Laufzeit</label>
                    <span className="text-2xl font-bold gradient-text">{calculatorData.duration} Monate</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="60"
                    step="3"
                    value={calculatorData.duration}
                    onChange={(e) => setCalculatorData({ ...calculatorData, duration: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-purple"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>3 Monate</span>
                    <span>5 Jahre</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Zinssatz p.a.</label>
                    <span className="text-2xl font-bold gradient-text">{calculatorData.interestRate.toFixed(2)} %</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.1"
                    value={calculatorData.interestRate}
                    onChange={(e) => setCalculatorData({ ...calculatorData, interestRate: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-purple"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>1,0 %</span>
                    <span>5,0 %</span>
                  </div>
                </div>

                {/* Early Withdrawal Toggle */}
                <div className="glass-effect rounded-2xl p-6 border border-highlight/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <i className="ri-time-line text-2xl text-highlight"></i>
                      <label className="font-semibold text-white">Vorzeitige Verfugung simulieren</label>
                    </div>
                    <button
                      onClick={() => setCalculatorData({ ...calculatorData, earlyWithdrawal: !calculatorData.earlyWithdrawal })}
                      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                        calculatorData.earlyWithdrawal ? 'bg-highlight' : 'bg-secondary-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                          calculatorData.earlyWithdrawal ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {calculatorData.earlyWithdrawal && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-sm font-semibold text-white/70">Verfugung nach</label>
                        <span className="text-xl font-bold text-highlight">{calculatorData.withdrawalMonth} Monaten</span>
                      </div>
                      <input
                        type="range"
                        min="3"
                        max={calculatorData.duration}
                        step="1"
                        value={calculatorData.withdrawalMonth}
                        onChange={(e) => setCalculatorData({ ...calculatorData, withdrawalMonth: Number(e.target.value) })}
                        className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-highlight"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-accent-purple via-accent-purple-dark to-primary-600 shadow-glow-purple">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <i className="ri-money-euro-circle-line text-3xl text-white"></i>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {calculatorData.earlyWithdrawal ? 'Bei vorzeitiger Verfugung' : 'Ihre Rendite'}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/70 text-sm mb-2">
                        Gesamtertrag nach {calculatorData.earlyWithdrawal ? calculatorData.withdrawalMonth : calculatorData.duration} Monaten
                      </p>
                      <p className="text-5xl font-bold text-white">{totalReturn.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                    </div>

                    <div className="h-px bg-white/20"></div>

                    <div>
                      <p className="text-white/70 text-sm mb-2">Zinsgewinn</p>
                      <p className="text-3xl font-bold text-success-light">+ {profit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                    </div>

                    {calculatorData.earlyWithdrawal && penalty > 0 && (
                      <>
                        <div className="h-px bg-white/20"></div>
                        <div>
                          <p className="text-white/70 text-sm mb-2">Zinsabschlag (ca. 30%)</p>
                          <p className="text-2xl font-bold text-accent-pink">- {penalty.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-purple/20 to-accent-purple-dark/20 rounded-xl flex items-center justify-center mb-4">
                    <i className="ri-percent-line text-2xl text-accent-purple"></i>
                  </div>
                  <p className="text-sm text-white/60 mb-2">Effektiver Zinssatz</p>
                  <p className="text-2xl font-bold text-white">{effectiveRate.toFixed(2)} %</p>
                </div>

                <div className="glass-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan/20 to-accent-cyan-dark/20 rounded-xl flex items-center justify-center mb-4">
                    <i className="ri-calendar-line text-2xl text-accent-cyan"></i>
                  </div>
                  <p className="text-sm text-white/60 mb-2">Tatsachliche Laufzeit</p>
                  <p className="text-2xl font-bold text-white">
                    {calculatorData.earlyWithdrawal ? calculatorData.withdrawalMonth : calculatorData.duration} Mon.
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-primary-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-information-line text-xl text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Flexibilitat hat ihren Preis</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Bei vorzeitiger Verfugung wird ein reduzierter Zinssatz angewendet. Je naher Sie am Laufzeitende sind, desto geringer der Abschlag.
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Die Vorteile von <span className="gradient-text">Flexgeld</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Optimale Balance zwischen Rendite und Flexibilitat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'ri-percent-line', title: 'Flexible Zinssatze', desc: 'Attraktive Verzinsung, die sich an Ihrer gewahlten Laufzeit orientiert. Je langer die Bindung, desto hoher die Rendite.', highlight: 'Bis zu 3,8% p.a.' },
              { icon: 'ri-time-line', title: 'Kundigungsoptionen', desc: 'Vorzeitige Verfugung mit transparenten Konditionen moglich. Klare Regelungen fur alle Szenarien.', highlight: 'Ab 3 Monaten Laufzeit' },
              { icon: 'ri-money-euro-circle-line', title: 'Mindestanlage', desc: 'Flexible Einstiegsmoglichkeiten fur verschiedene Anlagebetrage. Skalierbar nach Ihren Bedurfnissen.', highlight: 'Ab 25.000 EUR' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 card-hover-purple"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent-purple to-accent-purple-dark rounded-xl flex items-center justify-center mb-6 shadow-glow-purple">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed mb-4">{feature.desc}</p>
                <div className="text-accent-purple font-semibold">{feature.highlight}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-gradient-to-b from-secondary-950 via-secondary-900/30 to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ihre <span className="gradient-text">Vorteile</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Profitieren Sie von umfassenden Vorteilen bei Ihrer Flexgeldanlage
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
                className="glass-card p-6 card-hover-purple group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-2xl text-accent-purple`}></i>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{benefit.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Fur wen ist <span className="gradient-text">Flexgeld</span> geeignet?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Entdecken Sie, ob Flexgeld die richtige Anlageform fur Sie ist
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
                className="glass-card p-8 flex items-start space-x-6 card-hover-purple"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-purple-dark rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-purple">
                  <i className={`${group.icon} text-3xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{group.title}</h3>
                  <p className="text-white/60 leading-relaxed">{group.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="relative py-24 bg-gradient-to-b from-secondary-950 via-secondary-900/30 to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Risiken <span className="gradient-text">verstehen</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Transparente Information uber mogliche Risiken Ihrer Anlage
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
                  <h3 className="text-lg font-heading font-bold text-white">{risk.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    risk.level === 'Sehr Niedrig' ? 'bg-success/20 text-success-light' :
                    risk.level === 'Niedrig' ? 'bg-accent-cyan/20 text-accent-cyan' :
                    risk.level === 'Mittel' ? 'bg-highlight/20 text-highlight' :
                    'bg-accent-pink/20 text-accent-pink'
                  }`}>
                    {risk.level}
                  </span>
                </div>
                <p className="text-white/60 leading-relaxed text-sm">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Flexgeld im <span className="gradient-text">Vergleich</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              So positioniert sich Flexgeld zwischen Tagesgeld und Festgeld
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-500 to-accent-purple">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading font-bold text-white">Kriterium</th>
                    <th className="px-6 py-4 text-center font-heading font-bold text-white">Tagesgeld</th>
                    <th className="px-6 py-4 text-center font-heading font-bold text-white bg-white/10">Flexgeld</th>
                    <th className="px-6 py-4 text-center font-heading font-bold text-white">Festgeld</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-white">{row.criteria}</td>
                      <td className="px-6 py-4 text-center text-white/60">{row.tagesgeld}</td>
                      <td className="px-6 py-4 text-center text-accent-purple font-semibold bg-accent-purple/10">{row.flexgeld}</td>
                      <td className="px-6 py-4 text-center text-white/60">{row.festgeld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-primary-500/10 to-accent-cyan/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-purple/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-accent-cyan/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Interessiert an <span className="gradient-text">Flexgeld</span>?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Erfahren Sie mehr uber unsere flexiblen Anlagelosungen und finden Sie die optimale Balance zwischen Rendite und Verfugbarkeit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/kontakt" className="btn-accent flex items-center space-x-2">
                  <span>Beratung anfragen</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link to="/leistungen/tagesgeld" className="btn-outline flex items-center space-x-2">
                  <span>Tagesgeld entdecken</span>
                  <i className="ri-wallet-3-line"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
