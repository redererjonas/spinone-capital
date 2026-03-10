'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AnleihenPage() {
  const [calculatorData, setCalculatorData] = useState({
    bondAmount: 100000,
    couponRate: 3.5,
    years: 5,
    purchasePrice: 100,
    bondType: 'government'
  });

  const calculateBondReturn = () => {
    const annualCoupon = (calculatorData.bondAmount * calculatorData.couponRate) / 100;
    const totalCoupons = annualCoupon * calculatorData.years;
    const purchaseCost = (calculatorData.bondAmount * calculatorData.purchasePrice) / 100;
    const redemptionValue = calculatorData.bondAmount;
    const capitalGain = redemptionValue - purchaseCost;
    const totalReturn = totalCoupons + capitalGain;
    const yieldToMaturity = (totalReturn / purchaseCost / calculatorData.years) * 100;

    return {
      annualCoupon,
      totalCoupons,
      purchaseCost,
      redemptionValue,
      capitalGain,
      totalReturn,
      yieldToMaturity
    };
  };

  const result = calculateBondReturn();

  const bondTypeInfo: { [key: string]: { name: string; risk: string; color: string } } = {
    government: { name: 'Staatsanleihe', risk: 'Sehr niedrig', color: 'from-success to-success-dark' },
    corporate: { name: 'Unternehmensanleihe', risk: 'Mittel', color: 'from-primary-500 to-primary-600' },
    pfandbrief: { name: 'Pfandbrief', risk: 'Niedrig', color: 'from-accent-cyan to-accent-cyan-dark' }
  };

  const benefits = [
    {
      icon: 'ri-money-euro-circle-line',
      title: 'Stabile Ertrage',
      description: 'Regelmassige Zinszahlungen (Kupons) bieten planbare Einkommensstrome. Ideal fur Investoren, die auf kontinuierliche Ertrage angewiesen sind.'
    },
    {
      icon: 'ri-shield-line',
      title: 'Kapitalerhalt',
      description: 'Anleihen bieten in der Regel mehr Sicherheit als Aktien. Bei Bonitatsprufung und Diversifikation ist das Ausfallrisiko kontrollierbar.'
    },
    {
      icon: 'ri-pie-chart-line',
      title: 'Portfolio-Diversifikation',
      description: 'Anleihen korrelieren oft negativ mit Aktien. Sie stabilisieren Portfolios und reduzieren die Gesamtvolatilitat Ihrer Investments.'
    },
    {
      icon: 'ri-scales-line',
      title: 'Risikoadjustierte Rendite',
      description: 'Systematische Auswahl von Anleihen basierend auf Bonitatsanalyse, Laufzeit und Rendite-Risiko-Profil fur optimale Ergebnisse.'
    },
    {
      icon: 'ri-global-line',
      title: 'Internationale Markte',
      description: 'Zugang zu Staatsanleihen und Unternehmensanleihen aus verschiedenen Landern und Wahrungsraumen fur globale Diversifikation.'
    },
    {
      icon: 'ri-exchange-line',
      title: 'Liquiditat',
      description: 'Viele Anleihen sind borsengehandelt und bieten gute Handelbarkeit. Bei Bedarf konnen Positionen vor Falligkeit verkauft werden.'
    }
  ];

  const targetGroups = [
    {
      icon: 'ri-building-line',
      title: 'Versicherungen & Pensionskassen',
      description: 'Institutionen mit langfristigen Verpflichtungen, die auf stabile und planbare Ertrage angewiesen sind.'
    },
    {
      icon: 'ri-hospital-line',
      title: 'Stiftungen',
      description: 'Gemeinnutzige Organisationen, die Kapitalerhalt mit regelmassigen Ertragen fur ihre Stiftungszwecke kombinieren mochten.'
    },
    {
      icon: 'ri-funds-line',
      title: 'Vermogensverwalter',
      description: 'Family Offices und Vermogensverwalter, die Fixed Income als Stabilisator in diversifizierten Portfolios einsetzen.'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Konservative Anleger',
      description: 'Investoren, die Wert auf Kapitalerhalt und regelmassige Ertrage legen und moderate Risiken bevorzugen.'
    }
  ];

  const risks = [
    {
      title: 'Zinsanderungsrisiko',
      description: 'Steigende Marktzinsen fuhren zu fallenden Anleihekursen. Je langer die Restlaufzeit, desto starker die Auswirkung von Zinsanderungen.',
      level: 'Mittel bis Hoch'
    },
    {
      title: 'Kreditrisiko',
      description: 'Das Risiko, dass der Emittent seine Zins- oder Tilgungszahlungen nicht leisten kann. Hohere Renditen gehen oft mit hoherem Kreditrisiko einher.',
      level: 'Mittel'
    },
    {
      title: 'Wahrungsrisiko',
      description: 'Bei Fremdwahrungsanleihen konnen Wechselkursschwankungen die Rendite erheblich beeinflussen - positiv wie negativ.',
      level: 'Mittel'
    },
    {
      title: 'Liquiditatsrisiko',
      description: 'Nicht alle Anleihen sind gleich gut handelbar. Bei illiquiden Anleihen konnen Verkaufe nur mit Abschlagen moglich sein.',
      level: 'Niedrig bis Mittel'
    },
    {
      title: 'Inflationsrisiko',
      description: 'Bei steigender Inflation verlieren feste Zinszahlungen an Kaufkraft. Die reale Rendite kann negativ werden.',
      level: 'Niedrig bis Mittel'
    }
  ];

  const bondTypes = [
    {
      icon: 'ri-government-line',
      title: 'Staatsanleihen',
      description: 'Anleihen von Staaten mit hoher Bonitat bieten maximale Sicherheit. Deutsche Bundesanleihen, US-Treasuries und andere AAA-geratete Staatsanleihen bilden das Fundament sicherer Portfolios.',
      features: ['Hochste Bonitat (AAA bis A)', 'Maximale Sicherheit', 'Hohe Liquiditat']
    },
    {
      icon: 'ri-building-line',
      title: 'Unternehmensanleihen',
      description: 'Corporate Bonds von erstklassigen Unternehmen bieten hohere Renditen bei kontrolliertem Risiko. Sorgfaltige Bonitatsprufung und Diversifikation sind entscheidend.',
      features: ['Investment Grade (BBB+ bis AAA)', 'Hohere Renditen', 'Breite Diversifikation']
    },
    {
      icon: 'ri-bank-line',
      title: 'Pfandbriefe',
      description: 'Deutsche Pfandbriefe gelten als besonders sichere Anleihen. Durch Immobilien oder offentliche Kredite besichert, bieten sie attraktive Renditen bei hoher Sicherheit.',
      features: ['Besicherte Anleihen', 'Hohe Sicherheit', 'Attraktive Renditen']
    },
    {
      icon: 'ri-leaf-line',
      title: 'Green Bonds',
      description: 'Nachhaltige Anleihen finanzieren Umwelt- und Klimaprojekte. Kombinieren Sie finanzielle Rendite mit positivem Impact fur eine nachhaltige Zukunft.',
      features: ['ESG-konform', 'Positive Wirkung', 'Wachsender Markt']
    }
  ];

  const investmentStrategy = [
    { icon: 'ri-search-eye-line', title: 'Bonitatsanalyse', description: 'Grundliche Prufung der Kreditwurdigkeit aller Emittenten. Nur Anleihen mit ausreichender Bonitat werden ins Portfolio aufgenommen.' },
    { icon: 'ri-time-line', title: 'Duration-Management', description: 'Aktive Steuerung der Zinssensitivitat durch gezielte Auswahl von Laufzeiten. Anpassung an Zinserwartungen und Marktbedingungen.' },
    { icon: 'ri-pie-chart-line', title: 'Diversifikation', description: 'Breite Streuung uber Emittenten, Branchen, Lander und Laufzeiten. Minimierung von Klumpenrisiken fur stabile Portfolios.' }
  ];

  return (
    <div className="min-h-screen bg-secondary-950">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-[120px] animate-pulse"></div>
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
              <div className="w-10 h-10 bg-gradient-to-br from-accent-pink to-accent-pink-dark rounded-xl flex items-center justify-center">
                <i className="ri-stock-line text-xl text-white"></i>
              </div>
              <span className="text-sm font-semibold text-white/80">Anleihen</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Staatlich & unternehmerisch,{' '}
              <span className="gradient-text-warm">risikojustiert</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              Professionelles Fixed Income Management fur institutionelle Investoren. Staatsanleihen und Unternehmensanleihen mit systematischer Risikosteuerung fur stabile Portfolios.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-primary flex items-center space-x-2">
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
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent-pink/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-pink to-accent-pink-dark rounded-2xl mb-6 shadow-glow-pink">
              <i className="ri-calculator-line text-3xl text-white"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Anleihen-Rendite-<span className="gradient-text-warm">Rechner</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Berechnen Sie Kuponzahlungen, Kursgewinne und Gesamtrendite Ihrer Anleihen
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
              <h3 className="text-2xl font-heading font-bold text-white mb-8">Anleihen-Parameter</h3>

              <div className="space-y-8">
                {/* Bond Type Selection */}
                <div>
                  <label className="text-sm font-semibold text-white/70 mb-4 block">Anleihentyp</label>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(bondTypeInfo).map(([key, info]) => (
                      <button
                        key={key}
                        onClick={() => setCalculatorData({ ...calculatorData, bondType: key })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          calculatorData.bondType === key
                            ? 'border-accent-pink bg-accent-pink/10'
                            : 'border-white/10 bg-white/5 hover:border-white/30'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`w-10 h-10 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                            <i className="ri-stock-line text-lg text-white"></i>
                          </div>
                          <p className="text-xs font-semibold text-white">{info.name}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bond Amount */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Nominalbetrag</label>
                    <span className="text-2xl font-bold gradient-text-warm">{calculatorData.bondAmount.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={calculatorData.bondAmount}
                    onChange={(e) => setCalculatorData({ ...calculatorData, bondAmount: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-pink"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>10.000 EUR</span>
                    <span>1.000.000 EUR</span>
                  </div>
                </div>

                {/* Coupon Rate */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Kupon (Zinssatz p.a.)</label>
                    <span className="text-2xl font-bold gradient-text-warm">{calculatorData.couponRate.toFixed(2)} %</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="8"
                    step="0.1"
                    value={calculatorData.couponRate}
                    onChange={(e) => setCalculatorData({ ...calculatorData, couponRate: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-pink"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>0,5 %</span>
                    <span>8,0 %</span>
                  </div>
                </div>

                {/* Years to Maturity */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Restlaufzeit</label>
                    <span className="text-2xl font-bold gradient-text-warm">{calculatorData.years} Jahre</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={calculatorData.years}
                    onChange={(e) => setCalculatorData({ ...calculatorData, years: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-pink"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>1 Jahr</span>
                    <span>30 Jahre</span>
                  </div>
                </div>

                {/* Purchase Price */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold text-white/70">Kaufkurs (% vom Nennwert)</label>
                    <span className="text-2xl font-bold gradient-text-warm">{calculatorData.purchasePrice.toFixed(1)} %</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="120"
                    step="0.5"
                    value={calculatorData.purchasePrice}
                    onChange={(e) => setCalculatorData({ ...calculatorData, purchasePrice: Number(e.target.value) })}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-accent-pink"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>80 % (Abschlag)</span>
                    <span>120 % (Aufschlag)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 glass-effect rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-information-line text-xl text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{bondTypeInfo[calculatorData.bondType]?.name}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Risiko: {bondTypeInfo[calculatorData.bondType]?.risk}
                    </p>
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
              <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-accent-pink via-accent-pink-dark to-accent-purple shadow-glow-pink">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <i className="ri-money-euro-circle-line text-3xl text-white"></i>
                    <h3 className="text-2xl font-heading font-bold text-white">Ihre Rendite</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/70 text-sm mb-2">Gesamtertrag nach {calculatorData.years} Jahren</p>
                      <p className="text-5xl font-bold text-white">{result.totalReturn.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                    </div>

                    <div className="h-px bg-white/20"></div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-white/70 text-sm mb-2">Kuponzahlungen</p>
                        <p className="text-2xl font-bold text-success-light">+ {result.totalCoupons.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm mb-2">Kursgewinn/-verlust</p>
                        <p className={`text-2xl font-bold ${result.capitalGain >= 0 ? 'text-success-light' : 'text-red-400'}`}>
                          {result.capitalGain >= 0 ? '+ ' : '- '}
                          {Math.abs(result.capitalGain).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-white/20"></div>

                    <div>
                      <p className="text-white/70 text-sm mb-2">Effektivverzinsung (Yield to Maturity)</p>
                      <p className="text-3xl font-bold text-success-light">{result.yieldToMaturity.toFixed(2)} % p.a.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6">
                  <div className="w-12 h-12 bg-accent-pink/20 rounded-xl flex items-center justify-center mb-4">
                    <i className="ri-calendar-check-line text-2xl text-accent-pink"></i>
                  </div>
                  <p className="text-sm text-white/60 mb-2">Jahrlicher Kupon</p>
                  <p className="text-2xl font-bold text-white">{result.annualCoupon.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                </div>

                <div className="glass-card p-6">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mb-4">
                    <i className="ri-money-euro-circle-line text-2xl text-success"></i>
                  </div>
                  <p className="text-sm text-white/60 mb-2">Ruckzahlungswert</p>
                  <p className="text-2xl font-bold text-white">{result.redemptionValue.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} EUR</p>
                </div>
              </div>

              <div className="glass-card p-6">
                <h4 className="font-semibold text-white mb-4">Investitionsubersicht</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Kaufpreis</span>
                    <span className="font-bold text-white">{result.purchaseCost.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Nominalbetrag</span>
                    <span className="font-bold text-white">{calculatorData.bondAmount.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Laufzeit</span>
                    <span className="font-bold text-white">{calculatorData.years} Jahre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Kupon</span>
                    <span className="font-bold text-white">{calculatorData.couponRate.toFixed(2)} % p.a.</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-success">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-lightbulb-line text-xl text-success"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Kurs und Rendite</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {calculatorData.purchasePrice < 100
                        ? 'Sie kaufen unter Nennwert (Disagio). Die Effektivverzinsung ist hoher als der Kupon.'
                        : calculatorData.purchasePrice > 100
                        ? 'Sie kaufen uber Nennwert (Agio). Die Effektivverzinsung ist niedriger als der Kupon.'
                        : 'Sie kaufen zum Nennwert (Pari). Die Effektivverzinsung entspricht dem Kupon.'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bond Types */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Unser <span className="gradient-text-warm">Anleihen-Universum</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Zugang zu verschiedenen Anleihekategorien fur optimale Diversifikation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bondTypes.map((bond, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 card-hover-pink"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent-pink to-accent-pink-dark rounded-xl flex items-center justify-center mb-6 shadow-glow-pink">
                  <i className={`${bond.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{bond.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{bond.description}</p>
                <ul className="space-y-2">
                  {bond.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2 text-white/60">
                      <i className="ri-check-line text-accent-pink"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Ihre <span className="gradient-text-warm">Vorteile</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Profitieren Sie von umfassenden Vorteilen bei Ihrer Anleihenanlage
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
                className="glass-card p-6 card-hover-pink group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-2xl text-accent-pink`}></i>
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
              Fur wen sind <span className="gradient-text-warm">Anleihen</span> geeignet?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Entdecken Sie, ob Anleihen die richtige Anlageform fur Sie sind
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
                className="glass-card p-8 flex items-start space-x-6 card-hover-pink"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-pink to-accent-pink-dark rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-pink">
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
              Risiken <span className="gradient-text-warm">verstehen</span>
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
                    risk.level === 'Niedrig bis Mittel' ? 'bg-accent-cyan/20 text-accent-cyan' :
                    risk.level === 'Mittel' ? 'bg-highlight/20 text-highlight' :
                    risk.level === 'Mittel bis Hoch' ? 'bg-highlight/20 text-highlight' :
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

      {/* Investment Strategy */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Unsere <span className="gradient-text-warm">Anlagestrategie</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Systematischer Ansatz fur optimale Rendite-Risiko-Profile
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentStrategy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-pink to-accent-pink-dark rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-glow-pink">
                  <i className={`${item.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 via-accent-purple/10 to-primary-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-pink/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-accent-purple/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Interessiert an <span className="gradient-text-warm">Anleihen</span>?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Erfahren Sie mehr uber unsere Fixed Income Strategien und wie wir stabile Ertrage fur Ihr Portfolio generieren.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/kontakt" className="btn-primary flex items-center space-x-2">
                  <span>Beratung anfragen</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link to="/leistungen/festgeld" className="btn-outline flex items-center space-x-2">
                  <span>Festgeld entdecken</span>
                  <i className="ri-safe-line"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
