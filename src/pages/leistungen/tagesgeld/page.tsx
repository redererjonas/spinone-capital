'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TagesgeldPage() {
  const [calculatorData, setCalculatorData] = useState({
    amount: 50000,
    days: 90,
    interestRate: 2.3,
    monthlyDeposit: 0,
    monthlyWithdrawal: 0
  });

  const [dailyBalance, setDailyBalance] = useState<number[]>([]);

  useEffect(() => {
    calculateDailyBalance();
  }, [calculatorData]);

  const calculateDailyBalance = () => {
    const balances: number[] = [];
    let currentBalance = calculatorData.amount;
    const dailyRate = calculatorData.interestRate / 100 / 365;

    for (let day = 0; day <= calculatorData.days; day++) {
      if (day > 0 && day % 30 === 0) {
        currentBalance += calculatorData.monthlyDeposit;
        currentBalance -= calculatorData.monthlyWithdrawal;
      }
      currentBalance += currentBalance * dailyRate;
      balances.push(currentBalance);
    }

    setDailyBalance(balances);
  };

  const finalBalance = dailyBalance[dailyBalance.length - 1] || calculatorData.amount;
  const totalProfit = finalBalance - calculatorData.amount -
    (Math.floor(calculatorData.days / 30) * (calculatorData.monthlyDeposit - calculatorData.monthlyWithdrawal));

  const benefits = [
    {
      icon: 'ri-time-line',
      title: 'Tagliche Verfugbarkeit',
      description: 'Greifen Sie jederzeit auf Ihr Kapital zu - ohne Kundigungsfristen, ohne Einschrankungen. Maximale Flexibilitat fur Ihre Liquiditatsplanung.'
    },
    {
      icon: 'ri-calendar-close-line',
      title: 'Keine Kundigungsfrist',
      description: 'Im Gegensatz zu Festgeld oder Flexgeld konnen Sie Ihr Geld jederzeit ohne Vorankundigung abheben. Volle Kontrolle uber Ihre Mittel.'
    },
    {
      icon: 'ri-percent-line',
      title: 'Transparente Zinsen',
      description: 'Klare und nachvollziehbare Verzinsung, die taglich auf Ihr Guthaben angerechnet wird. Keine versteckten Bedingungen oder Uberraschungen.'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Variable Verzinsung',
      description: 'Die Zinssatze passen sich den aktuellen Marktbedingungen an. Profitieren Sie von steigenden Zinsen ohne Wartezeit.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Einlagensicherung',
      description: 'Ihr Tagesgeld ist durch die gesetzliche Einlagensicherung geschutzt. Zusatzliche Sicherheit durch institutionelle Sicherungssysteme.'
    },
    {
      icon: 'ri-money-euro-circle-line',
      title: 'Keine Mindestanlage',
      description: 'Flexible Einstiegsmoglichkeiten ohne hohe Mindestbetrage. Ideal fur die Verwaltung von Liquiditatsreserven jeder Grosse.'
    }
  ];

  const targetGroups = [
    {
      icon: 'ri-building-line',
      title: 'Unternehmen',
      description: 'Firmen, die Betriebsmittel oder Liquiditatsreserven sicher und rentabel parken mochten, aber jederzeit Zugriff benotigen.'
    },
    {
      icon: 'ri-funds-line',
      title: 'Treasury-Abteilungen',
      description: 'Professionelles Cash-Management fur Konzerne und grossere Unternehmen mit taglichen Liquidtatsbewegungen.'
    },
    {
      icon: 'ri-hospital-line',
      title: 'Gemeinnutzige Organisationen',
      description: 'Stiftungen, Vereine und NGOs, die Spendengelder oder Rucklagen kurzfristig anlegen mochten.'
    },
    {
      icon: 'ri-user-line',
      title: 'Flexible Anleger',
      description: 'Investoren, die maximale Flexibilitat benotigen und nicht auf Liquiditat verzichten mochten.'
    }
  ];

  const risks = [
    {
      title: 'Zinsanderungsrisiko',
      description: 'Die Zinssatze konnen sich jederzeit andern und sind nicht fur einen bestimmten Zeitraum garantiert. Bei sinkenden Marktzinsen sinkt auch Ihre Verzinsung.',
      level: 'Mittel'
    },
    {
      title: 'Inflationsrisiko',
      description: 'Bei niedriger Verzinsung kann die Inflation die reale Kaufkraft Ihres Guthabens reduzieren. Besonders relevant in Hochinflationsphasen.',
      level: 'Mittel'
    },
    {
      title: 'Opportunitatsrisiko',
      description: 'Die Rendite ist in der Regel niedriger als bei Festgeld oder Flexgeld. Sie verzichten auf hohere Zinsen zugunsten maximaler Flexibilitat.',
      level: 'Niedrig'
    },
    {
      title: 'Emittentenrisiko',
      description: 'Das Risiko der Zahlungsunfahigkeit der Bank. Durch Einlagensicherung jedoch stark minimiert.',
      level: 'Sehr Niedrig'
    }
  ];

  const useCases = [
    { icon: 'ri-building-line', title: 'Betriebsmittelreserve', description: 'Unternehmen parken kurzfristig nicht benotigte Betriebsmittel auf Tagesgeldkonten. So bleiben die Mittel verfugbar fur unvorhergesehene Ausgaben, erwirtschaften aber dennoch Zinsen.' },
    { icon: 'ri-exchange-dollar-line', title: 'Cash-Management', description: 'Treasury-Abteilungen nutzen Tagesgeld fur professionelles Cash-Management. Uberschussige Liquiditat wird verzinst angelegt, bleibt aber jederzeit verfugbar fur Zahlungsverpflichtungen.' },
    { icon: 'ri-time-line', title: 'Ubergangsanlage', description: 'Investoren nutzen Tagesgeld als Zwischenanlage, wahrend sie auf gunstige Einstiegszeitpunkte fur langfristige Investments warten. Das Kapital bleibt verfugbar und wird verzinst.' },
    { icon: 'ri-shield-line', title: 'Sicherheitsreserve', description: 'Organisationen halten Notfallreserven auf Tagesgeldkonten. Im Krisenfall ist das Kapital sofort verfugbar, in ruhigen Zeiten wird es verzinst.' }
  ];

  return (
    <div className="min-h-screen bg-secondary-950">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-xl flex items-center justify-center">
                <i className="ri-wallet-3-line text-xl text-white"></i>
              </div>
              <span className="text-sm font-semibold text-white/80">Tagesgeld</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Maximale Liquiditat bei{' '}
              <span className="gradient-text-cool">transparenter Verzinsung</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              Tagliche Verfugbarkeit Ihres Kapitals bei attraktiver Verzinsung. Die ideale Losung fur kurzfristige Liquiditatsreserven und flexible Finanzplanung.
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-highlight/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-2xl mb-6 shadow-glow-cyan">
              <i className="ri-calculator-line text-3xl text-white"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Tagesgeld-<span className="gradient-text-cool">Rechner</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Berechnen Sie Ihre taglichen Zinsertrage mit flexiblen Ein- und Auszahlungen
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
                {/* Initial Amount */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Startbetrag</label>
                    <span className="text-2xl font-bold gradient-text-cool">{calculatorData.amount.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={calculatorData.amount}
                    onChange={(e) => setCalculatorData({ ...calculatorData, amount: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-cyan"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>1.000 EUR</span>
                    <span>500.000 EUR</span>
                  </div>
                </div>

                {/* Duration in Days */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Anlagedauer</label>
                    <span className="text-2xl font-bold gradient-text-cool">{calculatorData.days} Tage</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="365"
                    step="30"
                    value={calculatorData.days}
                    onChange={(e) => setCalculatorData({ ...calculatorData, days: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-cyan"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>1 Monat</span>
                    <span>1 Jahr</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Zinssatz p.a.</label>
                    <span className="text-2xl font-bold gradient-text-cool">{calculatorData.interestRate.toFixed(2)} %</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="4"
                    step="0.1"
                    value={calculatorData.interestRate}
                    onChange={(e) => setCalculatorData({ ...calculatorData, interestRate: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-cyan"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>0,5 %</span>
                    <span>4,0 %</span>
                  </div>
                </div>

                {/* Monthly Deposit */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Monatliche Einzahlung</label>
                    <span className="text-2xl font-bold text-success">{calculatorData.monthlyDeposit.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={calculatorData.monthlyDeposit}
                    onChange={(e) => setCalculatorData({ ...calculatorData, monthlyDeposit: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-success"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>0 EUR</span>
                    <span>10.000 EUR</span>
                  </div>
                </div>

                {/* Monthly Withdrawal */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Monatliche Auszahlung</label>
                    <span className="text-2xl font-bold text-accent-pink">{calculatorData.monthlyWithdrawal.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={calculatorData.monthlyWithdrawal}
                    onChange={(e) => setCalculatorData({ ...calculatorData, monthlyWithdrawal: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-pink-500"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>0 EUR</span>
                    <span>10.000 EUR</span>
                  </div>
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
              <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-accent-cyan via-accent-cyan-dark to-primary-600 shadow-glow-cyan">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <i className="ri-money-euro-circle-line text-3xl text-white"></i>
                    <h3 className="text-2xl font-heading font-bold text-white">Ihr Guthaben</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/70 text-sm mb-2">Endguthaben nach {calculatorData.days} Tagen</p>
                      <p className="text-5xl font-bold text-white">{finalBalance.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                    </div>

                    <div className="h-px bg-white/20"></div>

                    <div>
                      <p className="text-white/70 text-sm mb-2">Zinsertrag</p>
                      <p className="text-3xl font-bold text-success-light">+ {totalProfit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                    </div>

                    <div className="h-px bg-white/20"></div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/70 text-xs mb-1">Taglicher Zins</p>
                        <p className="text-lg font-bold text-white">{(totalProfit / calculatorData.days).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                      </div>
                      <div>
                        <p className="text-white/70 text-xs mb-1">Monatlicher Zins</p>
                        <p className="text-lg font-bold text-white">{((totalProfit / calculatorData.days) * 30).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-6">
                  <div className="w-10 h-10 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-3">
                    <i className="ri-calendar-line text-xl text-accent-cyan"></i>
                  </div>
                  <p className="text-xs text-white/60 mb-1">Laufzeit</p>
                  <p className="text-lg font-bold text-white">{calculatorData.days} Tage</p>
                </div>

                <div className="glass-card p-6">
                  <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center mb-3">
                    <i className="ri-arrow-up-line text-xl text-success"></i>
                  </div>
                  <p className="text-xs text-white/60 mb-1">Einzahlungen</p>
                  <p className="text-lg font-bold text-white">{(Math.floor(calculatorData.days / 30) * calculatorData.monthlyDeposit).toLocaleString('de-DE')} EUR</p>
                </div>

                <div className="glass-card p-6">
                  <div className="w-10 h-10 bg-accent-pink/20 rounded-xl flex items-center justify-center mb-3">
                    <i className="ri-arrow-down-line text-xl text-accent-pink"></i>
                  </div>
                  <p className="text-xs text-white/60 mb-1">Auszahlungen</p>
                  <p className="text-lg font-bold text-white">{(Math.floor(calculatorData.days / 30) * calculatorData.monthlyWithdrawal).toLocaleString('de-DE')} EUR</p>
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-accent-cyan">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-flashlight-line text-xl text-accent-cyan"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Maximale Flexibilitat</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Ihr Geld ist jederzeit verfugbar. Zinsen werden taglich gutgeschrieben und Sie konnen beliebig ein- und auszahlen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-success">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-line-chart-line text-xl text-success"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Zinseszins-Effekt</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Durch die tagliche Zinsgutschrift profitieren Sie vom Zinseszins-Effekt. Ihre Zinsen werden automatisch mitverzinst.
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
              Warum <span className="gradient-text-cool">Tagesgeld</span>?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Die flexible Losung fur Ihre Liquiditatsreserven
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'ri-flashlight-line', title: 'Sofortige Verfugbarkeit', desc: 'Ihr Geld ist jederzeit verfugbar. Keine Wartezeiten, keine Kundigungsfristen - maximale Flexibilitat fur Ihre Finanzplanung.', highlight: '24/7 Zugriff' },
              { icon: 'ri-percent-line', title: 'Aktuelle Zinssatze', desc: 'Profitieren Sie von marktgerechten Zinssatzen, die sich an den aktuellen Konditionen orientieren.', highlight: 'Bis zu 2,5% p.a.' },
              { icon: 'ri-money-euro-circle-line', title: 'Flexible Betrage', desc: 'Keine Mindestanlage erforderlich. Verwalten Sie Liquiditatsreserven jeder Grossenordnung.', highlight: 'Ab 1.000 EUR' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 card-hover-cyan"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-xl flex items-center justify-center mb-6 shadow-glow-cyan">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed mb-4">{feature.desc}</p>
                <div className="text-accent-cyan font-semibold">{feature.highlight}</div>
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
              Ihre <span className="gradient-text-cool">Vorteile</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Profitieren Sie von umfassenden Vorteilen bei Ihrer Tagesgeldanlage
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
                className="glass-card p-6 card-hover-cyan group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan/20 to-primary-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-2xl text-accent-cyan`}></i>
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
              Fur wen ist <span className="gradient-text-cool">Tagesgeld</span> geeignet?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Entdecken Sie, ob Tagesgeld die richtige Anlageform fur Sie ist
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
                className="glass-card p-8 flex items-start space-x-6 card-hover-cyan"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-cyan">
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
              Risiken <span className="gradient-text-cool">verstehen</span>
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

      {/* Use Cases */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Typische <span className="gradient-text-cool">Anwendungsfalle</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              So nutzen unsere Mandanten Tagesgeld optimal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${useCase.icon} text-xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-white/60 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-primary-500/10 to-accent-purple/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-cyan/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Interessiert an <span className="gradient-text-cool">Tagesgeld</span>?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Erfahren Sie mehr uber unsere Tagesgeld-Losungen und wie Sie Ihre Liquiditatsreserven optimal verwalten konnen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/kontakt" className="btn-accent flex items-center space-x-2">
                  <span>Beratung anfragen</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link to="/leistungen/aktien" className="btn-outline flex items-center space-x-2">
                  <span>Aktien entdecken</span>
                  <i className="ri-line-chart-line"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
