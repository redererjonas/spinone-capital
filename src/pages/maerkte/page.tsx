import { motion } from 'framer-motion';
import { useState } from 'react';

interface MarketData {
  name: string;
  symbol: string;
  price: string;
  change: number;
  changePercent: number;
}

const MaerktePage = () => {
  const [activeTab, setActiveTab] = useState('indices');

  // Sample market data
  const indices: MarketData[] = [
    { name: 'DAX', symbol: 'DAX', price: '18.456,23', change: 125.45, changePercent: 0.68 },
    { name: 'MDAX', symbol: 'MDAX', price: '27.123,89', change: -89.23, changePercent: -0.33 },
    { name: 'Euro Stoxx 50', symbol: 'SX5E', price: '4.987,12', change: 45.67, changePercent: 0.92 },
    { name: 'S&P 500', symbol: 'SPX', price: '5.234,56', change: 32.18, changePercent: 0.62 },
    { name: 'Dow Jones', symbol: 'DJI', price: '39.156,78', change: -156.32, changePercent: -0.40 },
    { name: 'Nasdaq 100', symbol: 'NDX', price: '18.345,67', change: 234.56, changePercent: 1.29 },
  ];

  const currencies: MarketData[] = [
    { name: 'EUR/USD', symbol: 'EUR/USD', price: '1.0856', change: 0.0023, changePercent: 0.21 },
    { name: 'EUR/GBP', symbol: 'EUR/GBP', price: '0.8567', change: -0.0012, changePercent: -0.14 },
    { name: 'EUR/CHF', symbol: 'EUR/CHF', price: '0.9456', change: 0.0034, changePercent: 0.36 },
    { name: 'USD/JPY', symbol: 'USD/JPY', price: '149.23', change: 0.89, changePercent: 0.60 },
    { name: 'GBP/USD', symbol: 'GBP/USD', price: '1.2678', change: 0.0045, changePercent: 0.36 },
    { name: 'USD/CHF', symbol: 'USD/CHF', price: '0.8712', change: -0.0018, changePercent: -0.21 },
  ];

  const bonds: MarketData[] = [
    { name: 'Bund 10Y', symbol: 'DE10Y', price: '2,456', change: 0.023, changePercent: 0.95 },
    { name: 'Bund 2Y', symbol: 'DE2Y', price: '2,834', change: -0.012, changePercent: -0.42 },
    { name: 'Euro Corp IG', symbol: 'ERIG', price: '3,125', change: 0.034, changePercent: 1.10 },
    { name: 'US Treasury 10Y', symbol: 'US10Y', price: '4,234', change: 0.045, changePercent: 1.07 },
    { name: 'Euro High Yield', symbol: 'ERHY', price: '5,678', change: -0.089, changePercent: -1.54 },
    { name: 'Euro Inflation', symbol: 'ERIL', price: '2,123', change: 0.015, changePercent: 0.71 },
  ];

  const getMarketData = () => {
    switch (activeTab) {
      case 'indices': return indices;
      case 'currencies': return currencies;
      case 'bonds': return bonds;
      default: return indices;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-slate-50">
          {/* Subtle Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white shadow-sm rounded-full border border-slate-200 mb-8"
            >
              <i className="ri-line-chart-line text-primary-600"></i>
              <span className="text-sm text-slate-700 font-medium">Live Marktdaten</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Markt<span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">übersicht</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Aktuelle Kurse und Marktentwicklungen in Echtzeit
            </motion.p>

            {/* Live Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-600 text-sm font-medium">Live-Daten</span>
            </motion.div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Market Tabs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-12"
            >
              {[
                { id: 'indices', label: 'Indizes', icon: 'ri-bar-chart-grouped-line' },
                { id: 'currencies', label: 'Währungen', icon: 'ri-exchange-dollar-line' },
                { id: 'bonds', label: 'Anleihen', icon: 'ri-stock-line' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                </button>
              ))}
            </motion.div>

            {/* Market Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getMarketData().map((item, index) => (
                <motion.div
                  key={item.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-white shadow-sm rounded-2xl p-6 border border-slate-200 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                      <p className="text-slate-400 text-sm">{item.symbol}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.changePercent >= 0
                        ? 'bg-green-50 text-green-500'
                        : 'bg-red-50 text-red-500'
                    }`}>
                      <i className={item.changePercent >= 0 ? 'ri-arrow-up-line text-xl' : 'ri-arrow-down-line text-xl'}></i>
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-slate-900">{item.price}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${item.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.changePercent >= 0 ? '+' : ''}{item.change.toLocaleString('de-DE')}
                      </p>
                      <p className={`text-lg font-bold ${item.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
                      </p>
                    </div>
                  </div>

                  {/* Mini Chart Placeholder */}
                  <div className="mt-4 h-12 rounded-lg bg-slate-50 flex items-end justify-between px-2 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-t ${item.changePercent >= 0 ? 'bg-green-300' : 'bg-red-300'}`}
                        style={{ height: `${Math.random() * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Market Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { label: 'Gewinner', value: '156', icon: 'ri-arrow-up-circle-line', color: 'text-green-500', bg: 'bg-green-50' },
                { label: 'Verlierer', value: '89', icon: 'ri-arrow-down-circle-line', color: 'text-red-500', bg: 'bg-red-50' },
                { label: 'Unverändert', value: '34', icon: 'ri-subtract-line', color: 'text-slate-500', bg: 'bg-slate-50' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.bg} rounded-2xl p-6 border border-slate-200`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 text-sm mb-1">{stat.label}</p>
                      <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                    <i className={`${stat.icon} text-4xl ${stat.color}`}></i>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Professionelle Marktanalysen
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Unsere Experten analysieren täglich die globalen Finanzmärkte und identifizieren Chancen und Risiken für Ihr Portfolio.
                </p>
                <ul className="space-y-4">
                  {[
                    'Echtzeit-Kursdaten',
                    'Detaillierte Chartanalysen',
                    'Makroökonomische Indikatoren',
                    'Regulatorische Updates',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white shadow-sm rounded-3xl p-8 border border-slate-200"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                    <i className="ri-customer-service-2-line text-4xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Persönliche Beratung</h3>
                  <p className="text-slate-600 mb-6">
                    Sprechen Sie mit unseren Experten über Ihre individuellen Anlageziele.
                  </p>
                  <a
                    href="/kontakt"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  >
                    <span>Beratung anfragen</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MaerktePage;
