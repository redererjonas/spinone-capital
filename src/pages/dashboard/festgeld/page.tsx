import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import CallUsModal from '../components/CallUsModal';
import { motion } from 'framer-motion';
import { Investment } from '@/data/users';

function FestgeldCard({ investment, index }: { investment: Investment; index: number }) {
  const startDate = new Date(investment.startDate);
  const endDate = new Date(investment.endDate);
  const today = new Date();
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const elapsedDays = Math.max(0, Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
  const remainingDays = Math.max(0, totalDays - elapsedDays);
  const progress = Math.min((elapsedDays / totalDays) * 100, 100);

  const durationInMonths = investment.duration;
  const expectedInterest = investment.amount * investment.interestRate / 100 * (durationInMonths / 12);
  const dailyInterest = expectedInterest / totalDays;
  const monthlyInterest = expectedInterest / durationInMonths;
  const bonus = investment.bonus || 0;
  const expectedTotalValue = investment.amount + expectedInterest + bonus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white shadow-lg border border-slate-200 rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full -ml-20 -mb-20"></div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-safe-2-line text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Festgeld #{index + 1}</h3>
                <p className="text-white/70 text-sm">ID: {investment.id}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/25 backdrop-blur-sm px-3 py-1.5 rounded-xl mb-2 shadow-lg">
                <p className="text-lg font-bold">{investment.interestRate}% p.a.</p>
              </div>
              <div className={`backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg ${
                investment.status === 'pending' ? 'bg-amber-500/30' : 'bg-emerald-500/30'
              }`}>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <p className="text-xs font-bold">
                    {investment.status === 'pending' ? 'Ausstehend' : 'Aktiv'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-white/70 text-xs mb-1">Kapital</p>
              <p className="text-lg font-bold">{investment.amount.toLocaleString('de-DE')} EUR</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-white/70 text-xs mb-1">Laufzeit</p>
              <p className="text-lg font-bold">{durationInMonths} Monate</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-white/70 text-xs mb-1">Gewinn</p>
              <p className="text-lg font-bold text-cyan-300">+{expectedInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-white/70 text-xs mb-1">Verbleibend</p>
              <p className="text-lg font-bold">{remainingDays} Tage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700">Laufzeit-Fortschritt</span>
            <span className="text-sm font-bold text-cyan-600">{progress.toFixed(1)}%</span>
          </div>
          <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full relative"
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </motion.div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{elapsedDays} Tage vergangen</span>
            <span>{remainingDays} Tage verbleibend</span>
          </div>
        </div>

        {/* Dates Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <i className="ri-calendar-check-line text-cyan-600"></i>
              <p className="text-xs text-slate-500 font-medium">Startdatum</p>
            </div>
            <p className="text-lg font-bold text-slate-800">
              {startDate.toLocaleDateString('de-DE')}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <i className="ri-calendar-event-line text-purple-600"></i>
              <p className="text-xs text-slate-500 font-medium">Enddatum</p>
            </div>
            <p className="text-lg font-bold text-slate-800">
              {endDate.toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>

        {/* Interest Details */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
          <h4 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
            <i className="ri-percent-line text-cyan-600"></i>
            Zinsdetails
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-1">Taglich</p>
              <p className="text-sm font-bold text-slate-800">
                {dailyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
              </p>
            </div>
            <div className="text-center border-x border-slate-200">
              <p className="text-xs text-slate-500 mb-1">Monatlich</p>
              <p className="text-sm font-bold text-slate-800">
                {monthlyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-1">Gesamt ({durationInMonths}M)</p>
              <p className="text-sm font-bold text-emerald-600">
                +{expectedInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
              </p>
            </div>
          </div>
        </div>

        {/* Payout */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <i className="ri-bank-line text-xl"></i>
              <span className="font-semibold text-sm">Auszahlung am {endDate.toLocaleDateString('de-DE')}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">Kapital:</span>
              <span className="font-bold">{investment.amount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">Zinsen ({investment.interestRate}% x {durationInMonths}M):</span>
              <span className="font-bold text-emerald-300">+{expectedInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</span>
            </div>
            {bonus > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Bonus:</span>
                <span className="font-bold text-amber-300">+{bonus.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</span>
              </div>
            )}
            <div className="border-t border-white/20 pt-2 mt-2">
              <div className="flex items-center justify-between">
                <span className="font-bold">Gesamtauszahlung:</span>
                <span className="text-xl font-bold">{expectedTotalValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FestgeldPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showCallModal, setShowCallModal] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const festgeldInvestments = user.investments.filter(inv => inv.type === 'festgeld' && inv.amount > 0);

  if (festgeldInvestments.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        <DashboardHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-white shadow-lg border border-slate-200 rounded-2xl flex items-center justify-center">
              <i className="ri-safe-2-line text-5xl text-slate-400"></i>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Keine Festgeld-Investition gefunden</h2>
            <p className="text-slate-500 mb-6">Sie haben noch keine aktive Festgeld-Anlage.</p>
            <button
              onClick={() => setShowCallModal(true)}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer"
            >
              Beratung anfordern
            </button>
          </div>
        </div>
        <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
      </div>
    );
  }

  const totalInvested = festgeldInvestments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalExpectedProfit = festgeldInvestments.reduce((sum, inv) => {
    const durationInMonths = inv.duration;
    return sum + (inv.amount * inv.interestRate / 100 * (durationInMonths / 12)) + (inv.bonus || 0);
  }, 0);
  const totalExpectedValue = totalInvested + totalExpectedProfit;
  const averageInterestRate = festgeldInvestments.reduce((sum, inv) => sum + (inv.interestRate * inv.amount / totalInvested), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm text-slate-500 mb-6"
        >
          <button onClick={() => navigate('/dashboard')} className="hover:text-cyan-600 transition-colors cursor-pointer">
            Dashboard
          </button>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-cyan-600 font-semibold">Festgeld</span>
        </motion.div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-40 -mb-40"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                  <i className="ri-safe-2-line text-4xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                    Festgeld-Anlagen
                  </h1>
                  <p className="text-white/80 text-lg">
                    {festgeldInvestments.length} aktive Festgeld-Position{festgeldInvestments.length > 1 ? 'en' : ''}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl mb-2 shadow-lg">
                  <p className="text-xs text-white/80 mb-1">Durchschnitt Zinssatz</p>
                  <p className="text-2xl font-bold">{averageInterestRate.toFixed(2)}% p.a.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Gesamt investiert</p>
                <p className="text-2xl font-bold">{totalInvested.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Erwartete Auszahlung</p>
                <p className="text-2xl font-bold">{totalExpectedValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Erwarteter Gewinn</p>
                <p className="text-2xl font-bold text-cyan-300">+{totalExpectedProfit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Anzahl Positionen</p>
                <p className="text-2xl font-bold">{festgeldInvestments.length}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid - Like Flexgeld */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Investment Cards */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-list-check-2 text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Ihre Festgeld-Positionen im Detail</h2>
              </div>

              <div className="space-y-6">
                {festgeldInvestments.map((investment, index) => (
                  <FestgeldCard key={investment.id} investment={investment} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Overview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <i className="ri-dashboard-line text-cyan-600"></i>
                Schnellübersicht
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Positionen</span>
                  <span className="font-bold text-slate-800">{festgeldInvestments.length}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Typ</span>
                  <span className="font-bold text-cyan-600">Festgeld</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Ø Zinssatz</span>
                  <span className="font-bold text-emerald-600">{averageInterestRate.toFixed(2)}% p.a.</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-slate-500">Ø Rendite</span>
                  <span className="font-bold text-emerald-600">+{((totalExpectedProfit / totalInvested) * 100).toFixed(2)}%</span>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-indigo-600 mb-4 flex items-center gap-2">
                <i className="ri-settings-3-line"></i>
                Aktionen
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3.5 px-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <i className="ri-add-circle-line text-xl"></i>
                  Neue Festgeld-Anlage
                </button>
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-3.5 px-4 rounded-xl font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                >
                  <i className="ri-customer-service-2-line text-xl"></i>
                  Beratung anfordern
                </button>
              </div>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-amber-600 mb-4 flex items-center gap-2">
                <i className="ri-information-line"></i>
                Wichtige Hinweise
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Festgeld ist bis zum Laufzeitende gebunden</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Zinsen werden am Ende der Laufzeit ausgezahlt</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Jede Position hat individuelle Konditionen</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Einlagensicherung bis 100.000 EUR</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call Us Modal */}
      <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
    </div>
  );
}
