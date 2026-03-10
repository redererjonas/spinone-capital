import { useState } from 'react';
import { Investment } from '@/data/users';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

interface PerformanceChartProps {
  investments: Investment[];
}

export default function PerformanceChart({ investments }: PerformanceChartProps) {
  const [timeRange, setTimeRange] = useState('1Y');

  const activeInvestments = investments.filter(inv => inv.amount > 0);
  const totalInvested = activeInvestments.reduce((sum, inv) => sum + inv.amount, 0);

  if (activeInvestments.length === 0 || totalInvested === 0) {
    return (
      <div className="bg-white shadow-lg rounded-3xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-bar-chart-box-line text-2xl"></i>
              </div>
              <h2 className="text-2xl font-heading font-bold">Performance-Entwicklung</h2>
            </div>
          </div>
        </div>
        <div className="p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-2xl flex items-center justify-center">
            <i className="ri-line-chart-line text-4xl text-slate-400"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-700 mb-2">Noch keine Performance-Daten</h3>
          <p className="text-slate-500">
            Ihre Performance-Entwicklung wird hier angezeigt, sobald Ihre Investitionen Erträge generieren.
          </p>
        </div>
      </div>
    );
  }

  const calculateExpectedProfit = (inv: Investment) => {
    const durationInMonths = inv.duration || 12;
    return inv.amount * inv.interestRate / 100 * (durationInMonths / 12);
  };

  const expectedTotalProfit = activeInvestments.reduce((sum, inv) => {
    return sum + calculateExpectedProfit(inv) + (inv.bonus || 0);
  }, 0);

  const weightedInterestRate = activeInvestments.reduce((sum, inv) => {
    return sum + (inv.interestRate * inv.amount / totalInvested);
  }, 0);

  const generateMonthlyData = () => {
    const data = [];
    const startDates = activeInvestments
      .filter(inv => inv.startDate)
      .map(inv => new Date(inv.startDate));

    const earliestDate = startDates.length > 0
      ? new Date(Math.min(...startDates.map(d => d.getTime())))
      : new Date();

    const startYear = earliestDate.getFullYear();
    const startMonth = earliestDate.getMonth();

    for (let i = 0; i < 12; i++) {
      const monthDate = new Date(startYear, startMonth + i, 1);
      const monthName = monthDate.toLocaleDateString('de-DE', { month: 'short' });

      let cumulativeProfit = 0;
      activeInvestments.forEach(inv => {
        const durationInMonths = inv.duration || 12;
        const monthlyRate = inv.interestRate / 100 / 12;
        const effectiveMonths = Math.min(i, durationInMonths);
        cumulativeProfit += inv.amount * monthlyRate * effectiveMonths;
      });

      const value = totalInvested + cumulativeProfit;

      data.push({
        month: monthName,
        value: Math.round(value * 100) / 100,
        profit: Math.round(cumulativeProfit * 100) / 100,
        invested: totalInvested
      });
    }

    return data;
  };

  const allMonthlyData = generateMonthlyData();

  const timeRanges = [
    { label: '1M', value: '1M', months: 1 },
    { label: '3M', value: '3M', months: 3 },
    { label: '6M', value: '6M', months: 6 },
    { label: '1J', value: '1Y', months: 12 },
    { label: 'Alle', value: 'ALL', months: 12 },
  ];

  const getFilteredData = () => {
    const selectedRange = timeRanges.find(r => r.value === timeRange);
    const monthsToShow = selectedRange?.months || 12;
    return allMonthlyData.slice(-monthsToShow);
  };

  const monthlyData = getFilteredData();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xl">
          <p className="text-slate-600 text-sm mb-2">{label}</p>
          <p className="text-slate-800 font-bold text-lg">
            {payload[0].value.toLocaleString('de-DE')} EUR
          </p>
          <p className="text-emerald-500 text-sm font-semibold">
            +{payload[0].payload.profit.toLocaleString('de-DE')} EUR Gewinn
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white shadow-lg rounded-3xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-bar-chart-box-line text-2xl"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold">Performance-Entwicklung</h2>
              </div>
              <p className="text-white/80 text-base">
                Monatliche Wertentwicklung Ihres Portfolios
              </p>
            </div>

            {/* Time Range Selector */}
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-xl p-1.5 shadow-lg">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    timeRange === range.value
                      ? 'bg-blue-600 text-white shadow-lg shadow-sky-500/30'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/30">
                <i className="ri-wallet-3-line text-xl text-white"></i>
              </div>
              <p className="text-sm text-slate-600 font-medium">Investiert</p>
            </div>
            <p className="text-2xl font-bold text-slate-800">
              {totalInvested.toLocaleString('de-DE')} EUR
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {activeInvestments.length} Position{activeInvestments.length > 1 ? 'en' : ''}
            </p>
          </div>

          <div className="bg-sky-50 rounded-xl p-5 border border-sky-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/30">
                <i className="ri-percent-line text-xl text-white"></i>
              </div>
              <p className="text-sm text-slate-600 font-medium">Durchschnitt Zinssatz</p>
            </div>
            <p className="text-2xl font-bold text-slate-800">
              {weightedInterestRate.toFixed(2)}% p.a.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Gewichtet nach Kapital
            </p>
          </div>

          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <i className="ri-trophy-line text-xl text-white"></i>
              </div>
              <p className="text-sm text-slate-600 font-medium">Erw. Gesamtgewinn</p>
            </div>
            <p className="text-2xl font-bold text-emerald-500">
              +{expectedTotalProfit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Je nach Laufzeit
            </p>
          </div>
        </div>

        {/* Individual Positions Overview */}
        {activeInvestments.length > 1 && (
          <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
              <i className="ri-list-check text-blue-500"></i>
              Einzelne Positionen
            </h4>
            <div className="space-y-2">
              {activeInvestments.map((inv, index) => {
                const profit = calculateExpectedProfit(inv);
                const bonus = inv.bonus || 0;
                const totalProfit = profit + bonus;
                const durationInMonths = inv.duration || 12;

                const sameTypeCount = activeInvestments.filter(i => i.type === inv.type).length;
                const sameTypeBefore = activeInvestments.slice(0, index).filter(i => i.type === inv.type).length;
                const displayNumber = sameTypeCount > 1 ? ` #${sameTypeBefore + 1}` : '';

                const typeName: Record<string, string> = {
                  festgeld: 'Festgeld',
                  flexgeld: 'Flexgeld',
                  tagesgeld: 'Tagesgeld',
                  aktien: 'Aktien',
                  anleihen: 'Anleihen'
                };

                return (
                  <div key={inv.id} className="flex items-center justify-between bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {typeName[inv.type] || inv.type}{displayNumber}
                        </p>
                        <p className="text-xs text-slate-500">
                          {inv.amount.toLocaleString('de-DE')} EUR - {inv.interestRate}% - {durationInMonths}M
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-emerald-500">
                        +{totalProfit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                      </p>
                      {bonus > 0 && (
                        <p className="text-xs text-amber-500">inkl. {bonus.toLocaleString('de-DE')} EUR Bonus</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Chart */}
        <div className="h-80 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis
                dataKey="month"
                stroke="#94A3B8"
                tick={{ fill: '#64748B', fontSize: 12 }}
                axisLine={{ stroke: '#CBD5E1' }}
              />
              <YAxis
                stroke="#94A3B8"
                tick={{ fill: '#64748B', fontSize: 12 }}
                axisLine={{ stroke: '#CBD5E1' }}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={(value) => <span className="text-slate-700 text-sm">{value}</span>}
              />
              <Area
                type="monotone"
                dataKey="invested"
                name="Investiert"
                stroke="#0EA5E9"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorInvested)"
              />
              <Area
                type="monotone"
                dataKey="value"
                name="Portfoliowert"
                stroke="#2563EB"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded"></div>
              <span className="text-sm text-slate-600 font-medium">Portfoliowert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded"></div>
              <span className="text-sm text-slate-600 font-medium">Investiertes Kapital</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-information-line text-blue-500"></i>
              <span className="text-sm text-slate-500">Hover für Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
