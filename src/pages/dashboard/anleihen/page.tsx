import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import DashboardHeader from '../components/DashboardHeader';
import CallUsModal from '../components/CallUsModal';

export default function AnleihenDetailPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showCallModal, setShowCallModal] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [user, navigate]);

  if (!user) return null;

  const investment = user.investments?.find(inv => inv.type === 'anleihen');

  if (!investment || investment.amount === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <DashboardHeader />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <i className="ri-file-chart-line text-6xl text-white"></i>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-6">
              Anleihen-Portfolio
            </h1>
            <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
              Sie haben derzeit kein aktives Anleihen-Portfolio.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-lg border border-slate-200 rounded-3xl p-8 md:p-12 mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-file-chart-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Warum Anleihen?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <i className="ri-shield-star-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-blue-600 mb-2 text-lg">Hohe Sicherheit</h3>
                  <p className="text-sm text-slate-500">Staatsanleihen mit AAA-Rating für maximale Sicherheit</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <i className="ri-calendar-check-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-blue-600 mb-2 text-lg">Regelmäßige Zinsen</h3>
                  <p className="text-sm text-slate-500">Planbare Erträge durch feste Zinszahlungen</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <i className="ri-balance-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-emerald-600 mb-2 text-lg">Portfolio-Stabilität</h3>
                  <p className="text-sm text-slate-500">Ausgleich von Aktienschwankungen</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Interessiert an Anleihen?
                  </h3>
                  <p className="text-white/80 mb-6 text-lg">
                    Kontaktieren Sie uns für eine persönliche Beratung. Wir stellen für Sie ein optimales Anleihen-Portfolio zusammen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+4989588088170"
                      className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg"
                    >
                      <i className="ri-phone-line text-2xl"></i>
                      +49 (0)89 588088170
                    </a>
                    <button
                      onClick={() => setShowCallModal(true)}
                      className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg cursor-pointer"
                    >
                      <i className="ri-customer-service-2-line text-2xl"></i>
                      Rückruf anfordern
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
              Zurück zum Dashboard
            </button>
          </motion.div>
        </div>
        <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
      </div>
    );
  }

  const profitPercentage = ((investment.profit / investment.amount) * 100).toFixed(2);
  const startDate = new Date(investment.startDate);
  const endDate = new Date(investment.endDate);
  const today = new Date();
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const elapsedDays = Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const remainingDays = Math.max(0, totalDays - elapsedDays);
  const progress = Math.min((elapsedDays / totalDays) * 100, 100);
  const currentValue = investment.amount + investment.profit;
  const dailyInterest = (investment.amount * (investment.interestRate || 4.5) / 100) / 365;
  const monthlyInterest = (investment.amount * (investment.interestRate || 4.5) / 100) / 12;

  const bondPositions = [
    { name: 'Deutsche Bundesanleihe', type: 'Staatsanleihe', rating: 'AAA', yield: 3.25, maturity: '2028', allocation: 30 },
    { name: 'BMW Finance', type: 'Unternehmensanleihe', rating: 'A', yield: 4.15, maturity: '2027', allocation: 20 },
    { name: 'Siemens AG', type: 'Unternehmensanleihe', rating: 'A+', yield: 3.85, maturity: '2026', allocation: 18 },
    { name: 'EU-Anleihe', type: 'Staatsanleihe', rating: 'AAA', yield: 3.45, maturity: '2029', allocation: 15 },
    { name: 'Deutsche Bank', type: 'Unternehmensanleihe', rating: 'BBB+', yield: 4.75, maturity: '2027', allocation: 10 },
    { name: 'Volkswagen Finance', type: 'Unternehmensanleihe', rating: 'A-', yield: 4.25, maturity: '2028', allocation: 7 },
  ];

  const monthlyHistory = [];
  for (let i = 0; i < 12; i++) {
    const month = new Date(2025, i, 1);
    const monthName = month.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
    const cumulativeInterest = monthlyInterest * (i + 1);
    monthlyHistory.push({
      month: monthName,
      interest: monthlyInterest,
      cumulative: cumulativeInterest,
      value: investment.amount + cumulativeInterest
    });
  }

  const avgYield = bondPositions.reduce((sum, b) => sum + b.yield * b.allocation / 100, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm text-slate-500 mb-6"
        >
          <button onClick={() => navigate('/dashboard')} className="hover:text-blue-600 transition-colors cursor-pointer">
            Dashboard
          </button>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-blue-600 font-semibold">Anleihen</span>
        </motion.div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-10 text-white shadow-2xl mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-40 -mb-40"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                  <i className="ri-file-chart-line text-4xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                    Anleihen-Portfolio
                  </h1>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl mb-2 shadow-lg">
                  <p className="text-xs text-white/80 mb-1">Durchschnitt Rendite</p>
                  <p className="text-2xl font-bold">{avgYield.toFixed(2)}% p.a.</p>
                </div>
                <div className="bg-emerald-500/30 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <p className="text-xs text-white/80 mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <p className="text-sm font-bold">Aktiv</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Investiert</p>
                <p className="text-2xl font-bold">{investment.amount.toLocaleString('de-DE')} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Aktueller Wert</p>
                <p className="text-2xl font-bold">{currentValue.toLocaleString('de-DE')} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Zinserträge</p>
                <p className="text-2xl font-bold text-sky-200">+{investment.profit.toLocaleString('de-DE')} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Verbleibend</p>
                <p className="text-2xl font-bold">{remainingDays} Tage</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Duration & Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Laufzeit & Status</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-5 border border-blue-200">
                    <p className="text-sm text-blue-600 mb-2 font-medium flex items-center gap-2">
                      <i className="ri-calendar-check-line"></i>
                      Startdatum
                    </p>
                    <p className="text-xl font-bold text-slate-800">
                      {startDate.toLocaleDateString('de-DE')}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-5 border border-blue-200">
                    <p className="text-sm text-blue-600 mb-2 font-medium flex items-center gap-2">
                      <i className="ri-calendar-event-line"></i>
                      Enddatum
                    </p>
                    <p className="text-xl font-bold text-slate-800">
                      {endDate.toLocaleDateString('de-DE')}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-700">Fortschritt</span>
                    <span className="text-sm font-bold text-blue-600">{progress.toFixed(1)}%</span>
                  </div>
                  <div className="h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                    <span>{elapsedDays} Tage vergangen</span>
                    <span>{remainingDays} Tage verbleibend</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500 mb-1 font-medium">Gesamtlaufzeit</p>
                      <p className="text-2xl font-bold text-slate-800">{totalDays} Tage</p>
                      <p className="text-sm text-slate-500 mt-1">ungefähr {Math.round(totalDays / 365)} Jahre</p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <i className="ri-calendar-2-line text-3xl text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bond Positions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-pie-chart-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Portfolio-Positionen</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-500">Anleihe</th>
                      <th className="text-center py-4 px-4 text-sm font-bold text-slate-500">Rating</th>
                      <th className="text-right py-4 px-4 text-sm font-bold text-slate-500">Rendite</th>
                      <th className="text-right py-4 px-4 text-sm font-bold text-slate-500">Fälligkeit</th>
                      <th className="text-right py-4 px-4 text-sm font-bold text-slate-500">Anteil</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bondPositions.map((bond, index) => (
                      <motion.tr
                        key={bond.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-sky-50/50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md ${
                              bond.type === 'Staatsanleihe'
                                ? 'bg-gradient-to-br from-blue-600 to-blue-700'
                                : 'bg-gradient-to-br from-blue-500 to-blue-600'
                            }`}>
                              {bond.type === 'Staatsanleihe' ? 'ST' : 'UN'}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-800">{bond.name}</p>
                              <p className="text-xs text-slate-500">{bond.type}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            bond.rating === 'AAA' ? 'bg-emerald-100 text-emerald-600' :
                            bond.rating.startsWith('A') ? 'bg-amber-100 text-blue-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            {bond.rating}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-emerald-600">
                          {bond.yield.toFixed(2)}%
                        </td>
                        <td className="py-4 px-4 text-right font-medium text-slate-600">
                          {bond.maturity}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"
                                style={{ width: `${bond.allocation}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-bold text-slate-600">{bond.allocation}%</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Interest Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-percent-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Zinsdetails</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-5 border border-blue-200">
                  <p className="text-sm text-blue-600 mb-2 font-medium">Täglicher Zins</p>
                  <p className="text-xl font-bold text-slate-800">
                    {dailyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-5 border border-blue-200">
                  <p className="text-sm text-blue-600 mb-2 font-medium">Monatlicher Zins</p>
                  <p className="text-xl font-bold text-slate-800">
                    {monthlyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-200">
                  <p className="text-sm text-emerald-600 mb-2 font-medium">Gesamtertrag</p>
                  <p className="text-xl font-bold text-emerald-600">
                    +{investment.profit.toLocaleString('de-DE')} EUR
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <i className="ri-information-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Auszahlung bei Fälligkeit</h3>
                    <p className="text-sm text-slate-500 mb-3">
                      Am {endDate.toLocaleDateString('de-DE')} erhalten Sie Ihr Kapital plus alle aufgelaufenen Zinsen zurück.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-500">Kapital:</span>
                        <span className="font-bold text-slate-800">{investment.amount.toLocaleString('de-DE')} EUR</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-500">Zinsen:</span>
                        <span className="font-bold text-emerald-600">+{investment.profit.toLocaleString('de-DE')} EUR</span>
                      </div>
                      <div className="border-t border-slate-200 pt-2 mt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-700">Auszahlung gesamt:</span>
                          <span className="text-xl font-bold text-slate-800">{currentValue.toLocaleString('de-DE')} EUR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Monthly Interest Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-line-chart-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Monatliche Zinsentwicklung</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-500">Monat</th>
                      <th className="text-right py-4 px-4 text-sm font-bold text-slate-500">Monatszins</th>
                      <th className="text-right py-4 px-4 text-sm font-bold text-slate-500">Kumuliert</th>
                      <th className="text-right py-4 px-4 text-sm font-bold text-slate-500">Portfoliowert</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyHistory.map((item, index) => (
                      <motion.tr
                        key={item.month}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-sky-50/50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md">
                              {index + 1}
                            </div>
                            <span className="font-medium text-slate-600">{item.month}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-emerald-600">
                          +{item.interest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-blue-600">
                          {item.cumulative.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-slate-800">
                          {item.value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
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
                <i className="ri-flashlight-line text-blue-600"></i>
                Schnellübersicht
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Investment-ID</span>
                  <span className="font-bold text-slate-800">{investment.id}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Typ</span>
                  <span className="font-bold text-blue-600">Anleihen</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Positionen</span>
                  <span className="font-bold text-slate-800">{bondPositions.length} Anleihen</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Durchschnitt Rating</span>
                  <span className="font-bold text-emerald-600">A+</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-slate-500">Rendite</span>
                  <span className="font-bold text-emerald-600">+{profitPercentage}%</span>
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
              <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                <i className="ri-settings-3-line"></i>
                Aktionen
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-slate-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-slate-700 hover:text-white py-3.5 px-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-slate-200 hover:border-transparent"
                >
                  <i className="ri-add-circle-line text-xl"></i>
                  Neue Investition
                </button>
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-slate-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-slate-700 hover:text-white py-3.5 px-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-slate-200 hover:border-transparent"
                >
                  <i className="ri-customer-service-2-line text-xl"></i>
                  Beratung
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
              <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                <i className="ri-information-line"></i>
                Wichtige Hinweise
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Anleihen bieten regelmäßige Zinszahlungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Staatsanleihen gelten als besonders sicher</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Rating zeigt die Bonität des Emittenten</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Diversifikation über verschiedene Emittenten</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
    </div>
  );
}
