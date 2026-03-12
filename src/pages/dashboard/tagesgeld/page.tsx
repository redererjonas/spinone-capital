import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/useAuth';
import { motion } from 'framer-motion';
import DashboardHeader from '../components/DashboardHeader';
import CallUsModal from '../components/CallUsModal';

export default function TagesgeldDetailPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showCallModal, setShowCallModal] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const investment = user.investments?.find(inv => inv.type === 'tagesgeld');

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
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <i className="ri-calendar-line text-6xl text-white"></i>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-6">
              Tagesgeld-Anlage
            </h1>
            <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
              Sie haben derzeit keine aktive Tagesgeld-Investition.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-lg border border-slate-200 rounded-3xl p-8 md:p-12 mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-star-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Warum Tagesgeld?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <i className="ri-flashlight-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-emerald-600 mb-2 text-lg">Sofortige Verfügbarkeit</h3>
                  <p className="text-sm text-slate-500">Ihr Geld ist jederzeit und sofort abrufbar</p>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <i className="ri-percent-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-blue-600 mb-2 text-lg">Variable Zinsen</h3>
                  <p className="text-sm text-slate-500">Profitieren Sie von aktuellen Marktentwicklungen</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <i className="ri-wallet-3-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-blue-600 mb-2 text-lg">Keine Mindestanlage</h3>
                  <p className="text-sm text-slate-500">Starten Sie bereits mit kleinen Beträgen</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Interessiert an Tagesgeld?
                  </h3>
                  <p className="text-white/80 mb-6 text-lg">
                    Kontaktieren Sie uns für eine persönliche Beratung. Wir helfen Ihnen gerne, Ihre Liquiditätsreserve optimal anzulegen.
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
                      className="inline-flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg cursor-pointer"
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
  const daysSinceStart = Math.floor((new Date().getTime() - new Date(investment.startDate).getTime()) / (1000 * 60 * 60 * 24));
  const currentValue = investment.amount + investment.profit;

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
          <span className="text-blue-600 font-semibold">Tagesgeld</span>
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
                  <i className="ri-calendar-line text-4xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                    Tagesgeld-Anlage
                  </h1>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl mb-2 shadow-lg">
                  <p className="text-xs text-white/80 mb-1">Zinssatz</p>
                  <p className="text-2xl font-bold">{investment.interestRate}% p.a.</p>
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
                <p className="text-white/80 text-sm mb-2 font-medium">Investierter Betrag</p>
                <p className="text-2xl font-bold">{investment.amount.toLocaleString('de-DE')} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Aktueller Wert</p>
                <p className="text-2xl font-bold">{currentValue.toLocaleString('de-DE')} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Erzielter Gewinn</p>
                <p className="text-2xl font-bold text-sky-200">+{investment.profit.toLocaleString('de-DE')} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Rendite</p>
                <p className="text-2xl font-bold">+{profitPercentage}%</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-6"
            >
              <h2 className="text-xl font-heading font-bold text-slate-800 mb-4">Kontoinformationen</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Kontoeröffnung:</span>
                  <span className="font-semibold text-slate-800">{investment.startDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Tage seit Eröffnung:</span>
                  <span className="font-semibold text-emerald-600">{daysSinceStart} Tage</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Verfügbarkeit:</span>
                  <span className="font-semibold text-emerald-600">Sofort</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Kündigungsfrist:</span>
                  <span className="font-semibold text-slate-800">Keine</span>
                </div>
              </div>

              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <i className="ri-information-line text-emerald-600 text-xl mt-0.5"></i>
                  <div className="text-sm">
                    <p className="font-semibold text-slate-800 mb-1">Tagesgeld-Vorteil</p>
                    <p className="text-slate-500">
                      Ihr Geld ist täglich verfügbar. Sie können jederzeit Ein- und Auszahlungen vornehmen, ohne Kündigungsfristen oder Gebühren.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-6"
            >
              <h2 className="text-xl font-heading font-bold text-slate-800 mb-4">Zinsdetails</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <p className="text-sm text-slate-500 mb-1">Zinssatz p.a.</p>
                  <p className="text-2xl font-bold text-emerald-600">{investment.interestRate}%</p>
                </div>
                <div className="bg-sky-50 rounded-xl p-4 border border-sky-200">
                  <p className="text-sm text-slate-500 mb-1">Zinsertrag gesamt</p>
                  <p className="text-2xl font-bold text-blue-600">{investment.profit.toLocaleString('de-DE')} EUR</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-sm text-slate-500 mb-1">Monatlicher Zins</p>
                  <p className="text-2xl font-bold text-blue-600">{(investment.profit / (daysSinceStart / 30)).toFixed(2)} EUR</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <p className="text-sm text-slate-500 mb-1">Täglicher Zins</p>
                  <p className="text-2xl font-bold text-amber-600">{(investment.profit / daysSinceStart).toFixed(2)} EUR</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500 mb-1">Zinsgutschrift</p>
                  <p className="font-semibold text-slate-800">Monatlich</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-500 mb-1">Nächste Gutschrift</p>
                  <p className="font-semibold text-slate-800">01.01.2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-6"
            >
              <h2 className="text-xl font-heading font-bold text-slate-800 mb-4">Transaktionen</h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <i className="ri-arrow-down-line text-emerald-600"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Einzahlung</p>
                      <p className="text-xs text-slate-500">{investment.startDate}</p>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-600">+{investment.amount.toLocaleString('de-DE')} EUR</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-sky-50 rounded-xl border border-sky-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                      <i className="ri-percent-line text-blue-600"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Zinsgutschrift</p>
                      <p className="text-xs text-slate-500">Monatlich</p>
                    </div>
                  </div>
                  <span className="font-bold text-blue-600">+{(investment.profit / (daysSinceStart / 30)).toFixed(2)} EUR</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-slate-50 hover:bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200">
                <i className="ri-history-line"></i>
                <span>Alle Transaktionen anzeigen</span>
              </button>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-6"
            >
              <h3 className="text-lg font-heading font-bold text-slate-800 mb-4">Schnellübersicht</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <i className="ri-shield-check-line text-emerald-600"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Status</p>
                    <p className="font-semibold text-slate-800">Aktiv</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                    <i className="ri-percent-line text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Zinssatz</p>
                    <p className="font-semibold text-slate-800">{investment.interestRate}% p.a.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <i className="ri-time-line text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Verfügbarkeit</p>
                    <p className="font-semibold text-slate-800">Sofort</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-6"
            >
              <h3 className="text-lg font-heading font-bold text-slate-800 mb-4">Aktionen</h3>

              <div className="space-y-3">
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <i className="ri-add-line"></i>
                  <span>Neue Investition</span>
                </button>
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                >
                  <i className="ri-customer-service-2-line"></i>
                  <span>Beratung</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-emerald-200"
            >
              <div className="flex items-start gap-3">
                <i className="ri-lightbulb-line text-2xl text-emerald-600"></i>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Maximale Flexibilität</h3>
                  <p className="text-sm text-slate-500">
                    Tagesgeld bietet Ihnen höchste Flexibilität bei attraktiven Zinsen. Perfekt für Ihre Liquiditätsreserve.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
    </div>
  );
}
