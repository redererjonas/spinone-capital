import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Investment } from '@/data/users';

const MotionLink = motion(Link);

interface PortfolioOverviewProps {
  investments: Investment[];
}

export default function PortfolioOverview({ investments }: PortfolioOverviewProps) {
  const activeInvestments = investments.filter(inv => inv.amount > 0);
  const totalInvested = activeInvestments.reduce((sum, inv) => sum + inv.amount, 0);

  const getTypeName = (type: string) => {
    const names: Record<string, string> = {
      festgeld: 'Festgeld',
      flexgeld: 'Flexgeld',
      tagesgeld: 'Tagesgeld',
      aktien: 'Aktien',
      anleihen: 'Anleihen'
    };
    return names[type] || type;
  };

  const getIcon = (type: string) => {
    const icons: Record<string, string> = {
      festgeld: 'ri-safe-2-line',
      flexgeld: 'ri-exchange-line',
      tagesgeld: 'ri-calendar-check-line',
      aktien: 'ri-stock-line',
      anleihen: 'ri-file-chart-line'
    };
    return icons[type] || 'ri-money-euro-circle-line';
  };

  const getGradient = (type: string) => {
    const gradients: Record<string, string> = {
      festgeld: 'from-indigo-500 to-indigo-600',
      flexgeld: 'from-purple-500 to-purple-600',
      tagesgeld: 'from-cyan-500 to-cyan-600',
      aktien: 'from-emerald-500 to-emerald-600',
      anleihen: 'from-amber-500 to-amber-600'
    };
    return gradients[type] || 'from-slate-500 to-slate-600';
  };

  const getBorderColor = (type: string) => {
    const colors: Record<string, string> = {
      festgeld: 'border-indigo-500/30 hover:border-indigo-500/50',
      flexgeld: 'border-purple-500/30 hover:border-purple-500/50',
      tagesgeld: 'border-cyan-500/30 hover:border-cyan-500/50',
      aktien: 'border-emerald-500/30 hover:border-emerald-500/50',
      anleihen: 'border-amber-500/30 hover:border-amber-500/50'
    };
    return colors[type] || 'border-slate-500/30 hover:border-slate-500/50';
  };

  const calculateExpectedProfit = (inv: Investment) => {
    const durationInMonths = inv.duration || 12;
    return (inv.amount * inv.interestRate / 100 * (durationInMonths / 12)) + (inv.bonus || 0);
  };

  const calculateProgress = (inv: Investment) => {
    if (!inv.startDate || !inv.endDate) return 0;
    const start = new Date(inv.startDate).getTime();
    const end = new Date(inv.endDate).getTime();
    const now = Date.now();
    const total = end - start;
    const elapsed = now - start;
    return Math.min(Math.max((elapsed / total) * 100, 0), 100);
  };

  const calculateRemainingDays = (inv: Investment) => {
    if (!inv.endDate) return 0;
    const end = new Date(inv.endDate).getTime();
    const now = Date.now();
    const diff = end - now;
    return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
  };

  const countByType = activeInvestments.reduce((acc, inv) => {
    acc[inv.type] = (acc[inv.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white shadow-lg rounded-3xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
              <i className="ri-pie-chart-line text-2xl"></i>
            </div>
            <h2 className="text-2xl font-heading font-bold">Portfolio-Ubersicht</h2>
          </div>
          <p className="text-white/80 text-base">
            Alle Ihre Investitionen im Uberblick
          </p>
        </div>
      </div>

      <div className="p-8">
        {/* Investment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {activeInvestments.map((investment, index) => {
            const percentage = totalInvested > 0 ? (investment.amount / totalInvested) * 100 : 0;
            const expectedProfit = calculateExpectedProfit(investment);
            const progress = calculateProgress(investment);
            const remainingDays = calculateRemainingDays(investment);
            const durationInMonths = investment.duration || 12;

            const sameTypeCount = countByType[investment.type] || 1;
            const sameTypeBefore = activeInvestments
              .slice(0, index)
              .filter(inv => inv.type === investment.type).length;
            const displayNumber = sameTypeCount > 1 ? ` #${sameTypeBefore + 1}` : '';

            return (
              <MotionLink
                key={investment.id}
                to={`/dashboard/${investment.type}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group cursor-pointer"
              >
                <div className={`bg-white shadow-lg rounded-2xl border ${getBorderColor(investment.type)} transition-all hover:shadow-xl overflow-hidden`}>
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${getGradient(investment.type)} px-4 py-3 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <i className={`${getIcon(investment.type)} text-lg`}></i>
                        <span className="font-bold text-sm">
                          {getTypeName(investment.type)}{displayNumber}
                        </span>
                      </div>
                      <div className="bg-white/25 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold">
                        {investment.interestRate}% p.a.
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Amount and Profit */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-between mb-2">
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Investiert</p>
                          <p className="text-xl font-bold text-slate-800">
                            {investment.amount.toLocaleString('de-DE')} EUR
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-500 mb-1">Erw. Gewinn</p>
                          <p className="text-lg font-bold text-emerald-500">
                            +{expectedProfit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Duration Info */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div className="bg-slate-100 rounded-lg p-2 border border-slate-200">
                        <p className="text-slate-500 mb-0.5">Laufzeit</p>
                        <p className="font-bold text-slate-700">{durationInMonths} Monate</p>
                      </div>
                      <div className="bg-slate-100 rounded-lg p-2 border border-slate-200">
                        <p className="text-slate-500 mb-0.5">Verbleibend</p>
                        <p className="font-bold text-slate-700">{remainingDays} Tage</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
                        <span className="font-medium">Fortschritt</span>
                        <span className="font-bold text-cyan-600">{progress.toFixed(0)}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${getGradient(investment.type)} rounded-full`}
                        />
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span>
                        <i className="ri-calendar-check-line mr-1"></i>
                        {new Date(investment.startDate).toLocaleDateString('de-DE')}
                      </span>
                      <i className="ri-arrow-right-line text-slate-400"></i>
                      <span>
                        <i className="ri-calendar-event-line mr-1"></i>
                        {new Date(investment.endDate).toLocaleDateString('de-DE')}
                      </span>
                    </div>

                    {/* Portfolio Share */}
                    <div className="bg-slate-100 rounded-lg p-2 border border-slate-200">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">Portfolio-Anteil</span>
                        <span className="font-bold text-cyan-600">{percentage.toFixed(1)}%</span>
                      </div>
                    </div>

                    {/* Details Link */}
                    <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Details ansehen</span>
                      <i className="ri-arrow-right-line text-lg text-cyan-500 group-hover:translate-x-2 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </MotionLink>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <i className="ri-funds-line text-2xl text-white"></i>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium mb-1">Gesamtes Portfolio</p>
                <p className="text-2xl font-bold text-slate-800">
                  {totalInvested.toLocaleString('de-DE')} EUR
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-600 mb-1 font-medium">Anlageklassen</p>
                <p className="text-lg font-bold text-slate-800">{Object.keys(countByType).length}</p>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-600 mb-1 font-medium">Positionen</p>
                <p className="text-lg font-bold text-slate-800">{activeInvestments.length}</p>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-600 mb-1 font-medium">Erw. Gewinn</p>
                <p className="text-lg font-bold text-emerald-500">
                  +{activeInvestments.reduce((sum, inv) => sum + calculateExpectedProfit(inv), 0).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
