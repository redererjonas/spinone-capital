'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AktienPage() {
  const [investmentAmount, setInvestmentAmount] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [selectedStrategy, setSelectedStrategy] = useState('balanced');
  const [selectedSector, setSelectedSector] = useState<string[]>(['technology']);

  const totalMonthlyContributions = monthlyContribution * investmentPeriod * 12;
  const totalInvested = investmentAmount + totalMonthlyContributions;
  const averageReturn = expectedReturn / 100;
  const futureValue = investmentAmount * Math.pow(1 + averageReturn, investmentPeriod) +
    monthlyContribution * ((Math.pow(1 + averageReturn / 12, investmentPeriod * 12) - 1) / (averageReturn / 12));
  const totalReturn = futureValue - totalInvested;
  const returnPercentage = ((futureValue - totalInvested) / totalInvested) * 100;

  const strategies = [
    {
      id: 'conservative',
      name: 'Konservativ',
      icon: 'ri-shield-check-line',
      color: 'from-success to-success-dark',
      risk: 'Niedrig',
      expectedReturn: '4-6%',
      description: 'Blue-Chip Aktien, Dividendenfokus',
      allocation: { stocks: 60, bonds: 30, cash: 10 }
    },
    {
      id: 'balanced',
      name: 'Ausgewogen',
      icon: 'ri-scales-line',
      color: 'from-primary-500 to-primary-600',
      risk: 'Mittel',
      expectedReturn: '6-9%',
      description: 'Diversifiziertes Portfolio',
      allocation: { stocks: 70, bonds: 20, cash: 10 }
    },
    {
      id: 'growth',
      name: 'Wachstum',
      icon: 'ri-rocket-line',
      color: 'from-accent-purple to-accent-purple-dark',
      risk: 'Mittel-Hoch',
      expectedReturn: '8-12%',
      description: 'Wachstumsaktien, Innovation',
      allocation: { stocks: 85, bonds: 10, cash: 5 }
    },
    {
      id: 'aggressive',
      name: 'Aggressiv',
      icon: 'ri-fire-line',
      color: 'from-highlight to-highlight-dark',
      risk: 'Hoch',
      expectedReturn: '10-15%',
      description: 'Small-Caps, Emerging Markets',
      allocation: { stocks: 95, bonds: 0, cash: 5 }
    }
  ];

  const sectors = [
    { id: 'technology', name: 'Technologie', icon: 'ri-computer-line', color: 'bg-primary-500' },
    { id: 'healthcare', name: 'Gesundheit', icon: 'ri-heart-pulse-line', color: 'bg-accent-pink' },
    { id: 'finance', name: 'Finanzen', icon: 'ri-bank-line', color: 'bg-success' },
    { id: 'consumer', name: 'Konsum', icon: 'ri-shopping-cart-line', color: 'bg-accent-purple' },
    { id: 'industry', name: 'Industrie', icon: 'ri-factory-line', color: 'bg-highlight' },
    { id: 'energy', name: 'Energie', icon: 'ri-flashlight-line', color: 'bg-yellow-500' },
    { id: 'realestate', name: 'Immobilien', icon: 'ri-building-line', color: 'bg-accent-cyan' },
    { id: 'materials', name: 'Rohstoffe', icon: 'ri-oil-line', color: 'bg-amber-600' }
  ];

  const marketData = [
    { index: 'DAX', value: '17.845,32', change: '+1.24%', positive: true },
    { index: 'S&P 500', value: '5.123,41', change: '+0.87%', positive: true },
    { index: 'NASDAQ', value: '16.274,94', change: '+1.45%', positive: true },
    { index: 'EURO STOXX 50', value: '4.892,15', change: '-0.32%', positive: false }
  ];

  const topStocks = [
    { name: 'SAP SE', price: '142,85 EUR', change: '+2.1%', sector: 'Tech', positive: true },
    { name: 'Siemens AG', price: '178,42 EUR', change: '+1.8%', sector: 'Industrie', positive: true },
    { name: 'Allianz SE', price: '245,30 EUR', change: '-0.5%', sector: 'Finanzen', positive: false },
    { name: 'BASF SE', price: '48,92 EUR', change: '+0.9%', sector: 'Chemie', positive: true },
    { name: 'Deutsche Telekom', price: '22,15 EUR', change: '+1.2%', sector: 'Telekom', positive: true },
    { name: 'Volkswagen AG', price: '112,68 EUR', change: '-1.1%', sector: 'Auto', positive: false }
  ];

  const toggleSector = (sectorId: string) => {
    setSelectedSector(prev =>
      prev.includes(sectorId)
        ? prev.filter(id => id !== sectorId)
        : [...prev, sectorId]
    );
  };

  const selectedStrategyData = strategies.find(s => s.id === selectedStrategy);

  const benefits = [
    { icon: 'ri-global-line', title: 'Globale Diversifikation', description: 'Zugang zu internationalen Aktienmarkten und fuhrenden Unternehmen weltweit' },
    { icon: 'ri-line-chart-line', title: 'Langfristiges Wachstum', description: 'Historisch hochste Renditen unter allen Anlageklassen uber lange Zeitraume' },
    { icon: 'ri-shield-check-line', title: 'Professionelles Management', description: 'Aktives Portfolio-Management durch erfahrene Investmentexperten' },
    { icon: 'ri-pie-chart-line', title: 'Flexible Strategien', description: 'Von konservativ bis aggressiv - passend zu Ihrem Risikoprofil' },
    { icon: 'ri-funds-line', title: 'Dividendenertrage', description: 'Zusatzliche Einnahmen durch regelmassige Dividendenzahlungen' },
    { icon: 'ri-refresh-line', title: 'Liquiditat', description: 'Borsentagliche Handelbarkeit fur maximale Flexibilitat' }
  ];

  const targetGroups = [
    { icon: 'ri-time-line', title: 'Langfristige Anleger', description: 'Investoren mit einem Anlagehorizont von mindestens 5-10 Jahren' },
    { icon: 'ri-rocket-line', title: 'Wachstumsorientierte', description: 'Anleger, die hohere Renditen als bei festverzinslichen Anlagen anstreben' },
    { icon: 'ri-pulse-line', title: 'Risikobereite Investoren', description: 'Bereitschaft, kurzfristige Schwankungen fur langfristiges Wachstum zu akzeptieren' },
    { icon: 'ri-building-line', title: 'Institutionelle Anleger', description: 'Pensionsfonds, Stiftungen und Versorgungswerke mit Wachstumszielen' }
  ];

  const risks = [
    { icon: 'ri-arrow-up-down-line', title: 'Kursschwankungen', description: 'Aktienkurse unterliegen taglichen Schwankungen und konnen auch langerfristig fallen', level: 'Hoch' },
    { icon: 'ri-global-line', title: 'Marktrisiko', description: 'Gesamtmarktentwicklungen konnen alle Aktien negativ beeinflussen', level: 'Mittel-Hoch' },
    { icon: 'ri-building-line', title: 'Unternehmensrisiko', description: 'Einzelne Unternehmen konnen in Schwierigkeiten geraten oder insolvent werden', level: 'Mittel' },
    { icon: 'ri-exchange-line', title: 'Wahrungsrisiko', description: 'Bei internationalen Investments konnen Wechselkursschwankungen die Rendite beeinflussen', level: 'Mittel' }
  ];

  return (
    <div className="min-h-screen bg-secondary-950">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-success/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-highlight/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-success to-success-dark rounded-xl flex items-center justify-center">
                <i className="ri-line-chart-line text-xl text-white"></i>
              </div>
              <span className="text-sm font-semibold text-white/80">Aktieninvestments</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Langfristiger Vermogensaufbau durch{' '}
              <span className="gradient-text">strategische Aktienanlagen</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              Profitieren Sie von den Wachstumschancen der globalen Aktienmarkte mit professionellem Portfolio-Management und individueller Risikokontrolle.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-primary flex items-center space-x-2">
                <span>Beratung anfragen</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
              <button className="btn-outline flex items-center space-x-2">
                <i className="ri-play-circle-line"></i>
                <span>Strategien entdecken</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Market Data */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-950 to-highlight/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-highlight rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-heading font-bold text-white">Live Marktdaten</h3>
            </div>
            <div className="text-white/60 text-sm">Aktualisiert: {new Date().toLocaleTimeString('de-DE')}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {marketData.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect-strong rounded-2xl p-6 card-hover"
              >
                <div className="text-white/60 text-sm mb-2">{market.index}</div>
                <div className="text-3xl font-bold text-white mb-2">{market.value}</div>
                <div className={`flex items-center space-x-2 ${market.positive ? 'text-success' : 'text-accent-pink'}`}>
                  <i className={`${market.positive ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} text-xl`}></i>
                  <span className="font-semibold">{market.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect-strong rounded-2xl p-8"
          >
            <h4 className="text-xl font-heading font-bold text-white mb-6">Top Aktien</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topStocks.map((stock, index) => (
                <div key={index} className="glass-effect rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">{stock.name}</span>
                    <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">{stock.sector}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{stock.price}</span>
                    <span className={`flex items-center space-x-1 ${stock.positive ? 'text-success' : 'text-accent-pink'}`}>
                      <i className={`${stock.positive ? 'ri-arrow-up-line' : 'ri-arrow-down-line'}`}></i>
                      <span className="text-sm font-semibold">{stock.change}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Strategy Selector */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-40 left-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-40 w-96 h-96 bg-highlight/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-6">
              <i className="ri-compass-line text-primary-400 text-xl"></i>
              <span className="text-sm font-bold text-primary-400 uppercase tracking-wider">Anlagestrategie</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Wahlen Sie Ihre <span className="gradient-text">Strategie</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Individuelle Anlagestrategien fur jeden Risikotyp und jedes Anlageziel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedStrategy(strategy.id)}
                className={`relative cursor-pointer group ${
                  selectedStrategy === strategy.id ? 'ring-2 ring-highlight' : ''
                }`}
              >
                <div className="glass-card p-6 h-full card-hover">
                  <div className={`w-16 h-16 bg-gradient-to-br ${strategy.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${strategy.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{strategy.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-white/60">Risiko:</span>
                    <span className="text-sm font-semibold text-primary-400">{strategy.risk}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-white/60">Rendite:</span>
                    <span className="text-sm font-semibold text-highlight">{strategy.expectedReturn}</span>
                  </div>
                  <p className="text-sm text-white/60 mb-4">{strategy.description}</p>

                  {selectedStrategy === strategy.id && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="text-xs font-semibold text-white/70 mb-2">Asset Allocation:</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white/60">Aktien</span>
                          <span className="font-semibold text-primary-400">{strategy.allocation.stocks}%</span>
                        </div>
                        <div className="w-full bg-secondary-800 rounded-full h-2">
                          <div className="bg-gradient-to-r from-primary-500 to-highlight h-2 rounded-full" style={{ width: `${strategy.allocation.stocks}%` }}></div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white/60">Anleihen</span>
                          <span className="font-semibold text-primary-400">{strategy.allocation.bonds}%</span>
                        </div>
                        <div className="w-full bg-secondary-800 rounded-full h-2">
                          <div className="bg-gradient-to-r from-success to-success-dark h-2 rounded-full" style={{ width: `${strategy.allocation.bonds}%` }}></div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white/60">Cash</span>
                          <span className="font-semibold text-primary-400">{strategy.allocation.cash}%</span>
                        </div>
                        <div className="w-full bg-secondary-800 rounded-full h-2">
                          <div className="bg-gradient-to-r from-secondary-400 to-secondary-600 h-2 rounded-full" style={{ width: `${strategy.allocation.cash}%` }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {selectedStrategy === strategy.id && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-highlight rounded-full flex items-center justify-center shadow-lg">
                    <i className="ri-check-line text-white text-lg"></i>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sector Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Branchenfokus wahlen</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((sector) => (
                <div
                  key={sector.id}
                  onClick={() => toggleSector(sector.id)}
                  className={`cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 ${
                    selectedSector.includes(sector.id)
                      ? 'border-highlight bg-highlight/10'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`w-12 h-12 ${sector.color} rounded-xl flex items-center justify-center mb-3`}>
                    <i className={`${sector.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="font-semibold text-white text-sm">{sector.name}</div>
                  {selectedSector.includes(sector.id) && (
                    <div className="mt-2">
                      <i className="ri-check-line text-highlight text-lg"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Calculator */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-950 to-highlight/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-highlight rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Investitions<span className="gradient-text">rechner</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Berechnen Sie Ihre potenzielle Rendite mit unserem erweiterten Aktien-Rechner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect-strong rounded-3xl p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-8">Parameter einstellen</h3>

              <div className="space-y-8">
                {/* Initial Investment */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-white font-semibold flex items-center space-x-2">
                      <i className="ri-money-euro-circle-line text-highlight text-xl"></i>
                      <span>Anfangsinvestition</span>
                    </label>
                    <span className="text-2xl font-bold text-highlight">{investmentAmount.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-highlight"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>10.000 EUR</span>
                    <span>1.000.000 EUR</span>
                  </div>
                </div>

                {/* Monthly Contribution */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-white font-semibold flex items-center space-x-2">
                      <i className="ri-calendar-line text-highlight text-xl"></i>
                      <span>Monatliche Sparrate</span>
                    </label>
                    <span className="text-2xl font-bold text-highlight">{monthlyContribution.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-highlight"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>0 EUR</span>
                    <span>10.000 EUR</span>
                  </div>
                </div>

                {/* Investment Period */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-white font-semibold flex items-center space-x-2">
                      <i className="ri-time-line text-highlight text-xl"></i>
                      <span>Anlagedauer</span>
                    </label>
                    <span className="text-2xl font-bold text-highlight">{investmentPeriod} Jahre</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-highlight"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>1 Jahr</span>
                    <span>30 Jahre</span>
                  </div>
                </div>

                {/* Expected Return */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-white font-semibold flex items-center space-x-2">
                      <i className="ri-line-chart-line text-highlight text-xl"></i>
                      <span>Erwartete Rendite p.a.</span>
                    </label>
                    <span className="text-2xl font-bold text-highlight">{expectedReturn}%</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="15"
                    step="0.5"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full h-3 bg-secondary-800 rounded-full appearance-none cursor-pointer accent-highlight"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>3%</span>
                    <span>15%</span>
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
              {/* Main Result Card */}
              <div className="bg-gradient-to-br from-highlight via-highlight-dark to-accent-pink rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="ri-trophy-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">Prognostizierter Endwert</h3>
                </div>
                <div className="text-6xl font-bold text-white mb-4">
                  {futureValue.toLocaleString('de-DE', { maximumFractionDigits: 0 })} EUR
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <i className="ri-arrow-up-line text-2xl"></i>
                  <span className="text-xl font-semibold">+{returnPercentage.toFixed(1)}% Gesamtrendite</span>
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect-strong rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <i className="ri-wallet-line text-highlight text-xl"></i>
                    <span className="text-white/60 text-sm">Gesamtinvestition</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{totalInvested.toLocaleString('de-DE')} EUR</div>
                </div>

                <div className="glass-effect-strong rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <i className="ri-funds-line text-highlight text-xl"></i>
                    <span className="text-white/60 text-sm">Kapitalgewinn</span>
                  </div>
                  <div className="text-3xl font-bold text-success">+{totalReturn.toLocaleString('de-DE', { maximumFractionDigits: 0 })} EUR</div>
                </div>

                <div className="glass-effect-strong rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <i className="ri-hand-coin-line text-highlight text-xl"></i>
                    <span className="text-white/60 text-sm">Anfangsinvestition</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{investmentAmount.toLocaleString('de-DE')} EUR</div>
                </div>

                <div className="glass-effect-strong rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <i className="ri-repeat-line text-highlight text-xl"></i>
                    <span className="text-white/60 text-sm">Sparraten gesamt</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{totalMonthlyContributions.toLocaleString('de-DE')} EUR</div>
                </div>
              </div>

              {/* Strategy Info */}
              {selectedStrategyData && (
                <div className="glass-effect-strong rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${selectedStrategyData.color} rounded-xl flex items-center justify-center`}>
                      <i className={`${selectedStrategyData.icon} text-xl text-white`}></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Gewahlte Strategie</div>
                      <div className="text-highlight text-sm">{selectedStrategyData.name}</div>
                    </div>
                  </div>
                  <div className="text-white/60 text-sm mb-3">{selectedStrategyData.description}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Risiko: <span className="text-white font-semibold">{selectedStrategyData.risk}</span></span>
                    <span className="text-white/60">Erwartete Rendite: <span className="text-highlight font-semibold">{selectedStrategyData.expectedReturn}</span></span>
                  </div>
                </div>
              )}

              {/* Info Box */}
              <div className="glass-effect rounded-2xl p-6 border border-primary-500/30">
                <div className="flex items-start space-x-3">
                  <i className="ri-information-line text-primary-400 text-2xl mt-1"></i>
                  <div className="text-white/70 text-sm leading-relaxed">
                    <strong className="text-white">Cost-Average-Effekt:</strong> Durch regelmassige monatliche Investitionen kaufen Sie bei niedrigen Kursen mehr Anteile und bei hohen Kursen weniger, was langfristig zu einem gunstigeren Durchschnittspreis fuhrt.
                  </div>
                </div>
              </div>
            </motion.div>
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
              Profitieren Sie von umfassenden Vorteilen bei Ihrer Aktienanlage
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
                <div className="w-12 h-12 bg-gradient-to-br from-success/20 to-highlight/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-2xl text-success`}></i>
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
              Fur wen eignen sich <span className="gradient-text">Aktieninvestments</span>?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Entdecken Sie, ob Aktien die richtige Anlageform fur Sie sind
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
                <div className="w-16 h-16 bg-gradient-to-br from-success to-success-dark rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
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
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <i className={`${risk.icon} text-xl text-white`}></i>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white">{risk.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    risk.level === 'Sehr Niedrig' ? 'bg-success/20 text-success-light' :
                    risk.level === 'Niedrig' ? 'bg-accent-cyan/20 text-accent-cyan' :
                    risk.level === 'Mittel' ? 'bg-highlight/20 text-highlight' :
                    risk.level === 'Mittel-Hoch' ? 'bg-highlight/20 text-highlight' :
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

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-success/10 via-highlight/10 to-primary-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-success/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-highlight/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Bereit fur Ihr <span className="gradient-text">Aktieninvestment</span>?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Unsere Experten beraten Sie gerne zu den optimalen Aktienstrategien fur Ihre Anlageziele.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/kontakt" className="btn-primary flex items-center space-x-2">
                  <span>Beratungstermin vereinbaren</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link to="/leistungen/anleihen" className="btn-outline flex items-center space-x-2">
                  <span>Anleihen entdecken</span>
                  <i className="ri-stock-line"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
