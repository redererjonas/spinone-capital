'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Types
interface MarketItem {
  id: string;
  name: string;
  symbol: string;
  value: number;
  change: number;
  icon: string;
  color: string;
  sparkline: number[];
}

interface ForexRates {
  rates: {
    [key: string]: number;
  };
}

// Sparkline Mini Chart Component
const SparklineChart = ({ data, positive }: { data: number[]; positive: boolean }) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((value - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(' ');

  const gradientId = `gradient-${positive ? 'up' : 'down'}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg viewBox="0 0 100 100" className="w-full h-12" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={positive ? '#0EA5E9' : '#EF4444'} stopOpacity="0.4" />
          <stop offset="100%" stopColor={positive ? '#0EA5E9' : '#EF4444'} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,100 ${points} 100,100`}
        fill={`url(#${gradientId})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={positive ? '#0EA5E9' : '#EF4444'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Generate random sparkline data
const generateSparkline = (baseValue: number, volatility: number = 0.02): number[] => {
  const points: number[] = [];
  let current = baseValue;
  for (let i = 0; i < 20; i++) {
    current = current * (1 + (Math.random() - 0.5) * volatility);
    points.push(current);
  }
  return points;
};

// Initial data for stocks and indices
const stocksData: MarketItem[] = [
  { id: 'aapl', name: 'Apple', symbol: 'AAPL', value: 185.92, change: 1.24, icon: '', color: 'from-gray-500 to-gray-700', sparkline: generateSparkline(185) },
  { id: 'msft', name: 'Microsoft', symbol: 'MSFT', value: 378.45, change: 0.87, icon: '', color: 'from-primary-600 to-primary-400', sparkline: generateSparkline(378) },
  { id: 'googl', name: 'Google', symbol: 'GOOGL', value: 141.23, change: -0.32, icon: '', color: 'from-accent-cyan to-highlight', sparkline: generateSparkline(141) },
  { id: 'amzn', name: 'Amazon', symbol: 'AMZN', value: 178.56, change: 2.15, icon: '', color: 'from-orange-500 to-orange-700', sparkline: generateSparkline(178) },
  { id: 'tsla', name: 'Tesla', symbol: 'TSLA', value: 248.34, change: -1.45, icon: '', color: 'from-red-500 to-red-700', sparkline: generateSparkline(248) },
  { id: 'nvda', name: 'NVIDIA', symbol: 'NVDA', value: 495.22, change: 3.67, icon: '', color: 'from-accent-cyan to-primary-600', sparkline: generateSparkline(495) },
];

const indicesData: MarketItem[] = [
  { id: 'dax', name: 'DAX 40', symbol: 'DE40', value: 16845.32, change: 0.85, icon: 'DE', color: 'from-yellow-500 to-red-600', sparkline: generateSparkline(16845) },
  { id: 'sp500', name: 'S&P 500', symbol: 'US500', value: 4783.45, change: 1.24, icon: 'US', color: 'from-primary-600 to-red-600', sparkline: generateSparkline(4783) },
  { id: 'nasdaq', name: 'Nasdaq 100', symbol: 'US100', value: 16892.35, change: 1.56, icon: 'US', color: 'from-accent-cyan to-primary-600', sparkline: generateSparkline(16892) },
  { id: 'ftse', name: 'FTSE 100', symbol: 'UK100', value: 7689.12, change: -0.32, icon: 'GB', color: 'from-primary-600 to-red-700', sparkline: generateSparkline(7689) },
  { id: 'nikkei', name: 'Nikkei 225', symbol: 'JP225', value: 33464.17, change: 0.67, icon: 'JP', color: 'from-red-600 to-white', sparkline: generateSparkline(33464) },
  { id: 'cac', name: 'CAC 40', symbol: 'FR40', value: 7543.28, change: 0.43, icon: 'FR', color: 'from-primary-600 to-red-500', sparkline: generateSparkline(7543) },
];

// Currency info
const currencyInfo: { [key: string]: { name: string; icon: string; color: string } } = {
  USD: { name: 'US Dollar', icon: '$', color: 'from-accent-cyan to-primary-600' },
  GBP: { name: 'British Pound', icon: 'P', color: 'from-primary-500 to-primary-600' },
  JPY: { name: 'Japanese Yen', icon: 'Y', color: 'from-accent-cyan to-primary-500' },
  CHF: { name: 'Swiss Franc', icon: 'F', color: 'from-red-500 to-white' },
  TRY: { name: 'Turkish Lira', icon: 'T', color: 'from-red-600 to-red-800' },
  CNY: { name: 'Chinese Yuan', icon: 'Y', color: 'from-red-600 to-yellow-500' },
};

const LiveMarketTicker = () => {
  const [activeTab, setActiveTab] = useState('indizes');
  const [stocks, setStocks] = useState<MarketItem[]>(stocksData);
  const [indices, setIndices] = useState<MarketItem[]>(indicesData);
  const [currencies, setCurrencies] = useState<MarketItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Fetch forex data from Frankfurter
  const fetchForexData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.frankfurter.app/latest?from=EUR&to=USD,GBP,JPY,CHF,TRY,CNY'
      );
      const data: ForexRates = await response.json();

      const forexItems: MarketItem[] = Object.entries(data.rates).map(([currency, rate]) => ({
        id: currency.toLowerCase(),
        name: currencyInfo[currency]?.name || currency,
        symbol: `EUR/${currency}`,
        value: rate,
        change: (Math.random() - 0.5) * 2,
        icon: currencyInfo[currency]?.icon || currency[0],
        color: currencyInfo[currency]?.color || 'from-gray-500 to-gray-700',
        sparkline: generateSparkline(rate, 0.01),
      }));

      setCurrencies(forexItems);
    } catch (error) {
      console.error('Error fetching forex data:', error);
      // Fallback data
      setCurrencies([
        { id: 'usd', name: 'US Dollar', symbol: 'EUR/USD', value: 1.0892, change: 0.15, icon: '$', color: 'from-accent-cyan to-primary-600', sparkline: generateSparkline(1.089, 0.01) },
        { id: 'gbp', name: 'British Pound', symbol: 'EUR/GBP', value: 0.8567, change: -0.08, icon: 'P', color: 'from-primary-500 to-primary-600', sparkline: generateSparkline(0.856, 0.01) },
        { id: 'jpy', name: 'Japanese Yen', symbol: 'EUR/JPY', value: 158.45, change: 0.32, icon: 'Y', color: 'from-accent-cyan to-primary-500', sparkline: generateSparkline(158, 0.01) },
        { id: 'chf', name: 'Swiss Franc', symbol: 'EUR/CHF', value: 0.9456, change: -0.12, icon: 'F', color: 'from-red-500 to-white', sparkline: generateSparkline(0.945, 0.01) },
        { id: 'try', name: 'Turkish Lira', symbol: 'EUR/TRY', value: 32.45, change: 1.24, icon: 'T', color: 'from-red-600 to-red-800', sparkline: generateSparkline(32.45, 0.02) },
        { id: 'cny', name: 'Chinese Yuan', symbol: 'EUR/CNY', value: 7.82, change: 0.05, icon: 'Y', color: 'from-red-600 to-yellow-500', sparkline: generateSparkline(7.82, 0.01) },
      ]);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      await fetchForexData();
      setIsLoading(false);
      setLastUpdate(new Date());
    };

    fetchAllData();
  }, [fetchForexData]);

  // Real-time simulation updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prev => prev.map(stock => {
        const newSparkline = [...stock.sparkline.slice(1), stock.value * (1 + (Math.random() - 0.5) * 0.01)];
        return {
          ...stock,
          value: stock.value * (1 + (Math.random() - 0.5) * 0.005),
          change: stock.change + (Math.random() - 0.5) * 0.1,
          sparkline: newSparkline,
        };
      }));

      setIndices(prev => prev.map(index => {
        const newSparkline = [...index.sparkline.slice(1), index.value * (1 + (Math.random() - 0.5) * 0.005)];
        return {
          ...index,
          value: index.value * (1 + (Math.random() - 0.5) * 0.002),
          change: index.change + (Math.random() - 0.5) * 0.05,
          sparkline: newSparkline,
        };
      }));

      setCurrencies(prev => prev.map(currency => {
        const newSparkline = [...currency.sparkline.slice(1), currency.value * (1 + (Math.random() - 0.5) * 0.005)];
        return {
          ...currency,
          value: currency.value * (1 + (Math.random() - 0.5) * 0.001),
          change: currency.change + (Math.random() - 0.5) * 0.05,
          sparkline: newSparkline,
        };
      }));

      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'indizes', label: 'Indizes', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', count: indices.length },
    { id: 'aktien', label: 'Aktien', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', count: stocks.length },
    { id: 'waehrungen', label: 'Währungen', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', count: currencies.length },
  ];

  const getActiveData = (): MarketItem[] => {
    switch (activeTab) {
      case 'aktien': return stocks;
      case 'indizes': return indices;
      case 'waehrungen': return currencies;
      default: return indices;
    }
  };

  const formatValue = (value: number, category: string): string => {
    if (category === 'waehrungen') {
      return value.toFixed(4);
    } else if (value >= 1000) {
      return value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return value.toFixed(2);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 -left-4 w-96 h-96 bg-primary-300 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.06, 0.04] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-0 -right-4 w-96 h-96 bg-accent-cyan rounded-full blur-[150px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.05, 0.03] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute -bottom-8 left-20 w-96 h-96 bg-primary-400 rounded-full blur-[150px]"
          />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="w-3 h-3 bg-accent-cyan rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-accent-cyan rounded-full relative shadow-[0_0_10px_#0EA5E9]" />
              </div>
              <span className="text-accent-cyan text-sm font-medium uppercase tracking-wider">Live</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              Live-<span className="bg-gradient-to-r from-primary-600 to-accent-cyan bg-clip-text text-transparent">Marktdaten</span>
            </h2>
            <p className="text-lg text-slate-500">Echtzeit-Übersicht der wichtigsten Märkte</p>
            <p className="text-sm text-slate-400 mt-2">
              Letzte Aktualisierung: {lastUpdate.toLocaleTimeString('de-DE')}
            </p>
          </motion.div>

          <Link
            to="/maerkte"
            className="mt-6 lg:mt-0 group flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 rounded-full text-slate-800 font-semibold hover:bg-slate-50 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
          >
            <span>Alle Märkte ansehen</span>
            <motion.span
              className="inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </Link>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-primary-300'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} />
              </svg>
              <span>{tab.label}</span>
              <span className={`ml-1 text-xs px-2 py-0.5 rounded-full ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-slate-100'
              }`}>
                {tab.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-slate-700">
              <svg className="animate-spin h-8 w-8 text-primary-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span className="text-lg text-slate-500">Marktdaten werden geladen...</span>
            </div>
          </div>
        )}

        {/* Market Cards */}
        <AnimatePresence mode="wait">
          {!isLoading && (
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {getActiveData().map((item) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 400 }
                  }}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary-300 transition-all duration-300 overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover"
                >
                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Header */}
                  <div className="relative flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                        <span className="text-sm text-slate-400">{item.symbol}</span>
                      </div>
                    </div>

                    {/* Live Indicator */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_8px_#0EA5E9]" />
                      <span className="text-xs text-slate-400">LIVE</span>
                    </div>
                  </div>

                  {/* Sparkline Chart */}
                  <div className="relative mb-4 -mx-2">
                    <SparklineChart data={item.sparkline} positive={item.change >= 0} />
                  </div>

                  {/* Value & Change */}
                  <div className="relative flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold text-slate-900">
                        {activeTab === 'waehrungen' ? '' : 'EUR '}{formatValue(item.value, activeTab)}
                      </p>
                    </div>
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold ${
                        item.change >= 0
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-red-50 text-red-500'
                      }`}
                    >
                      <span>{item.change >= 0 ? '+' : ''}</span>
                      <span>{Math.abs(item.change).toFixed(2)}%</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Gehandelte Märkte', value: '50+', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: '#2563EB' },
            { label: 'Echtzeit-Updates', value: '< 3s', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: '#0EA5E9' },
            { label: 'Anlageprodukte', value: '5', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: '#3B82F6' },
            { label: 'Währungspaare', value: '30+', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', color: '#0EA5E9' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200 hover:border-primary-300 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}08)` }}
              >
                <svg className="w-5 h-5" style={{ color: stat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveMarketTicker;
