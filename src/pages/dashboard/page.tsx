import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DashboardHeader from './components/DashboardHeader';
import PortfolioOverview from './components/PortfolioOverview';
import PerformanceChart from './components/PerformanceChart';
import CallUsModal from './components/CallUsModal';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showCallModal, setShowCallModal] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const investments = user.investments || [];
  const activeInvestments = investments.filter(inv => inv.amount > 0);
  const totalInvested = activeInvestments.reduce((sum, inv) => sum + inv.amount, 0);

  const calculateExpectedProfit = (inv: { amount: number; interestRate: number; duration: number; bonus?: number }) => {
    const durationInMonths = inv.duration || 12;
    const interestProfit = inv.amount * inv.interestRate / 100 * (durationInMonths / 12);
    return interestProfit;
  };

  const expectedTotalInterest = activeInvestments.reduce((sum, inv) => {
    return sum + calculateExpectedProfit(inv);
  }, 0);

  const totalBonus = activeInvestments.reduce((sum, inv) => {
    return sum + (inv.bonus || 0);
  }, 0);

  const totalValue = totalInvested + expectedTotalInterest + totalBonus;
  const totalProfit = expectedTotalInterest + totalBonus;

  const averageReturn = totalInvested > 0
    ? activeInvestments.reduce((sum, inv) => sum + (inv.interestRate * inv.amount / totalInvested), 0)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-40 -mb-40"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-hand-heart-line text-3xl"></i>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">Willkommen zuruck,</p>
                      <h1 className="text-3xl md:text-4xl font-heading font-bold">
                        {user.firstName} {user.lastName}
                        {user.spouse && (
                          <span className="text-white/80"> & {user.spouse.firstName} {user.spouse.lastName}</span>
                        )}
                      </h1>
                    </div>
                  </div>
                  <p className="text-white/80 text-base md:text-lg max-w-2xl">
                    Ihr Portfolio entwickelt sich hervorragend. Hier ist Ihre aktuelle Ubersicht.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowCallModal(true)}
                    className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <i className="ri-add-circle-line text-xl"></i>
                    Neue Investition
                  </button>
                  <button
                    onClick={() => setShowCallModal(true)}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/30 transition-all border border-white/30 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <i className="ri-customer-service-2-line text-xl"></i>
                    Beratung
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white shadow-lg shadow-indigo-500/10 border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-wallet-3-line text-2xl text-white"></i>
              </div>
              <div className="bg-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-xs font-bold">
                Gesamt
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-2">Erwarteter Gesamtwert</p>
            <p className="text-3xl font-bold text-slate-800 mb-1">
              {totalValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
            </p>
            <div className="flex items-center gap-1 text-emerald-400 text-sm font-semibold">
              <i className="ri-arrow-up-line"></i>
              <span>+{averageReturn.toFixed(2)}% p.a.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white shadow-lg shadow-indigo-500/10 border border-slate-200 rounded-2xl p-6 hover:border-cyan-300 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-money-euro-circle-line text-2xl text-white"></i>
              </div>
              <div className="bg-cyan-100 text-cyan-600 px-3 py-1.5 rounded-full text-xs font-bold">
                Investiert
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-2">Investiertes Kapital</p>
            <p className="text-3xl font-bold text-slate-800 mb-1">
              {totalInvested.toLocaleString('de-DE')} EUR
            </p>
            <div className="flex items-center gap-1 text-slate-500 text-sm font-semibold">
              <i className="ri-funds-line"></i>
              <span>{activeInvestments.length} Position{activeInvestments.length !== 1 ? 'en' : ''}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white shadow-lg shadow-indigo-500/10 border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-line-chart-line text-2xl text-white"></i>
              </div>
              <div className="bg-emerald-100 text-emerald-600 px-3 py-1.5 rounded-full text-xs font-bold">
                Gewinn
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-2">Erwarteter Gewinn</p>
            <p className="text-3xl font-bold text-emerald-400 mb-1">
              +{totalProfit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
            </p>
            {totalBonus > 0 ? (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-100 rounded-lg px-2 py-1">
                  <span className="flex items-center gap-1">
                    <i className="ri-percent-line text-emerald-500"></i>
                    Zinsen:
                  </span>
                  <span className="font-semibold text-emerald-600">
                    +{expectedTotalInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-amber-600 bg-amber-50 rounded-lg px-2 py-1 border border-amber-200">
                  <span className="flex items-center gap-1">
                    <i className="ri-gift-line"></i>
                    Bonus:
                  </span>
                  <span className="font-bold">
                    +{totalBonus.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                <i className="ri-calendar-check-line"></i>
                <span>Je nach Laufzeit</span>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white shadow-lg shadow-indigo-500/10 border border-slate-200 rounded-2xl p-6 hover:border-purple-300 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-percent-line text-2xl text-white"></i>
              </div>
              <div className="bg-purple-100 text-purple-600 px-3 py-1.5 rounded-full text-xs font-bold">
                Rendite
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-2">Durchschn. Zinssatz</p>
            <p className="text-3xl font-bold text-slate-800 mb-1">
              {averageReturn.toFixed(2)}% p.a.
            </p>
            <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold">
              <i className="ri-shield-check-line"></i>
              <span>Garantiert</span>
            </div>
          </motion.div>
        </div>

        {/* Important Notification - Only for user-003 (Nicolas & Evagelia Madarlis) */}
        {user.id === 'user-003' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="bg-white shadow-lg shadow-indigo-500/10 border border-slate-200 rounded-2xl border-2 border-red-300 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <i className="ri-alert-line text-3xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Wichtige Benachrichtigung zu Ihrem Konto</h3>
                    <p className="text-white/80 text-sm">Bitte beachten Sie folgende Information</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-6">
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-time-line text-2xl text-orange-500"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-orange-600 mb-2 text-lg">Status Ihrer Kapitalanlage</h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          Ihr Konto wurde auf Ihren ausdrucklichen Wunsch hin eingerichtet. Wir mochten Sie jedoch darauf hinweisen, dass die vereinbarte Kapitaleinlage in Hohe von <span className="font-bold text-slate-800">300.000 EUR</span> bislang noch nicht auf unserem Konto eingegangen ist.
                        </p>
                        <div className="bg-white rounded-lg p-4 border border-orange-200">
                          <div className="flex items-center gap-2 mb-2">
                            <i className="ri-information-line text-orange-500"></i>
                            <span className="text-sm font-semibold text-orange-600">Aktueller Status:</span>
                          </div>
                          <p className="text-sm text-slate-500">
                            Die Kapitaluberweisung steht derzeit noch aus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-calendar-close-line text-2xl text-red-500"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-red-600 mb-2 text-lg">Wichtiger Hinweis zur Kontolaufzeit</h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          Gemass unseren Geschaftsbedingungen und Ihrer Kontovereinbarung muss die Kapitaleinlage innerhalb von <span className="font-bold text-slate-800">48 Stunden nach Kontoerstellung</span> erfolgen. Sollte die Uberweisung nicht innerhalb dieser Frist bei uns eingehen, sind wir leider gezwungen, Ihr Konto aus administrativen Grunden zu schliessen und alle damit verbundenen Daten zu loschen.
                        </p>
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-red-600">Verbleibende Zeit:</span>
                            <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg shadow-red-500/30">
                              <i className="ri-time-line"></i>
                              <span className="font-bold">48 Stunden</span>
                            </div>
                          </div>
                          <p className="text-xs text-red-500 italic">
                            Nach Ablauf dieser Frist wird das Konto automatisch deaktiviert und geloscht.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-customer-service-2-line text-2xl text-cyan-500"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-cyan-600 mb-2">Wir sind fur Sie da</h4>
                        <p className="text-slate-600 text-sm mb-4">
                          Bei Fragen zur Uberweisung oder wenn Sie Unterstutzung benotigen, stehen wir Ihnen gerne zur Verfugung.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href="tel:+49XXXXXXXXXX"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                          >
                            <i className="ri-phone-line text-xl"></i>
                            +49 (0) XX XXX XXXXXX
                          </a>
                          <a
                            href="mailto:info@spinone-asset.com"
                            className="inline-flex items-center justify-center gap-2 bg-white text-cyan-600 border border-cyan-200 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-all"
                          >
                            <i className="ri-mail-line text-xl"></i>
                            E-Mail senden
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <PerformanceChart investments={investments} />
        </motion.div>

        {/* Portfolio Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <PortfolioOverview investments={investments} />
        </motion.div>
      </div>

      {/* Call Us Modal */}
      <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
    </div>
  );
}
