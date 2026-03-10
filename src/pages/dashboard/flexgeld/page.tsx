import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import CallUsModal from '../components/CallUsModal';
import { motion } from 'framer-motion';

export default function FlexgeldPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawType, setWithdrawType] = useState<'instant' | 'planned'>('planned');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const investment = user.investments.find(inv => inv.type === 'flexgeld');

  if (!investment || investment.amount === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        <DashboardHeader />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 via-indigo-600 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <i className="ri-exchange-line text-6xl text-white"></i>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-6">
              Flexgeld-Anlage
            </h1>
            <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
              Sie haben derzeit keine aktive Flexgeld-Investition.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-lg border border-slate-200 rounded-3xl p-8 md:p-12 mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-star-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Warum Flexgeld?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <i className="ri-time-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-indigo-600 mb-2 text-lg">Tagliche Verfugbarkeit</h3>
                  <p className="text-sm text-slate-500">Ihr Geld ist jederzeit verfugbar - ohne Kundigungsfrist</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <i className="ri-percent-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-cyan-600 mb-2 text-lg">Attraktive Zinsen</h3>
                  <p className="text-sm text-slate-500">Bis zu 2,8% p.a. auf Ihre Einlagen</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-emerald-600 mb-2 text-lg">Maximale Sicherheit</h3>
                  <p className="text-sm text-slate-500">Einlagensicherung bis 100.000 EUR pro Kunde</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Interessiert an Flexgeld?
                  </h3>
                  <p className="text-white/80 mb-6 text-lg">
                    Kontaktieren Sie uns fur eine personliche Beratung. Wir helfen Ihnen gerne, die beste Anlagestrategie fur Ihre Bedurfnisse zu finden.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+4940334668098"
                      className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg"
                    >
                      <i className="ri-phone-line text-2xl"></i>
                      +49 40 334668098
                    </a>
                    <button
                      onClick={() => setShowCallModal(true)}
                      className="inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg cursor-pointer"
                    >
                      <i className="ri-customer-service-2-line text-2xl"></i>
                      Ruckruf anfordern
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
              Zuruck zum Dashboard
            </button>
          </motion.div>
        </div>
        <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
      </div>
    );
  }

  const startDate = new Date(investment.startDate);
  const endDate = new Date(investment.endDate);
  const today = new Date();
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const elapsedDays = Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const remainingDays = Math.max(0, totalDays - elapsedDays);
  const progress = Math.min((elapsedDays / totalDays) * 100, 100);

  const currentValue = investment.amount + investment.profit;
  const dailyInterest = (investment.amount * investment.interestRate / 100) / 365;
  const monthlyInterest = (investment.amount * investment.interestRate / 100) / 12;

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0 || amount > currentValue) {
      alert('Bitte geben Sie einen gultigen Betrag ein.');
      return;
    }

    if (withdrawType === 'instant') {
      const penalty = amount * 0.02;
      const netAmount = amount - penalty;
      alert(`Sofortauszahlung: ${netAmount.toLocaleString('de-DE')} EUR (nach 2% Abschlag)\nAbschlag: ${penalty.toLocaleString('de-DE')} EUR`);
    } else {
      alert(`Planmassige Auszahlung: ${amount.toLocaleString('de-DE')} EUR wird am ${endDate.toLocaleDateString('de-DE')} ausgezahlt.`);
    }
    setShowWithdrawModal(false);
    setWithdrawAmount('');
  };

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
          <span className="text-cyan-600 font-semibold">Flexgeld</span>
        </motion.div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-600 via-indigo-700 to-cyan-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-40 -mb-40"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                  <i className="ri-exchange-line text-4xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                    Flexgeld-Anlage
                  </h1>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl mb-2 shadow-lg">
                  <p className="text-xs text-white/80 mb-1">Zinssatz</p>
                  <p className="text-2xl font-bold">{investment.interestRate}% p.a.</p>
                </div>
                <div className="bg-cyan-500/30 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <p className="text-xs text-white/80 mb-1">Flexibilitat</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <p className="text-sm font-bold">Taglich verfugbar</p>
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
                <p className="text-2xl font-bold text-cyan-300">+{investment.profit.toLocaleString('de-DE')} EUR</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Verfugbar</p>
                <p className="text-2xl font-bold">Sofort</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Flexibility & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-flashlight-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Flexibilitat & Verfugbarkeit</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <i className="ri-time-line text-2xl text-white"></i>
                    </div>
                    <h3 className="text-lg font-bold text-indigo-600">Tagliche Verfugbarkeit</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">
                    Ihr Geld ist taglich verfugbar. Sie konnen jederzeit uber Ihr Kapital verfugen.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-500 space-y-1 border border-slate-200">
                    <p>- Keine Kundigungsfrist</p>
                    <p>- Flexible Teilauszahlungen</p>
                    <p>- Sofortige Verfugbarkeit</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <i className="ri-percent-line text-2xl text-white"></i>
                    </div>
                    <h3 className="text-lg font-bold text-cyan-600">Attraktive Verzinsung</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">
                    Trotz taglicher Verfugbarkeit erhalten Sie {investment.interestRate}% Zinsen pro Jahr.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-500 space-y-1 border border-slate-200">
                    <p>- Tagliche Zinsgutschrift</p>
                    <p>- Zinseszinseffekt</p>
                    <p>- Garantierter Zinssatz</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <i className="ri-information-line text-2xl text-white"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 mb-2">Laufzeit & Fortschritt</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Startdatum</p>
                        <p className="text-sm font-bold text-slate-800">{startDate.toLocaleDateString('de-DE')}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Planmassiges Ende</p>
                        <p className="text-sm font-bold text-slate-800">{endDate.toLocaleDateString('de-DE')}</p>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span>Fortschritt</span>
                        <span className="font-bold text-cyan-600">{progress.toFixed(1)}%</span>
                      </div>
                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500">
                      {remainingDays} Tage bis zum planmassigen Ende (vorzeitige Auszahlung jederzeit moglich)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interest Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-money-euro-circle-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Zinsdetails</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-200">
                  <p className="text-sm text-indigo-600 mb-2 font-medium">Taglicher Zins</p>
                  <p className="text-xl font-bold text-slate-800">
                    {dailyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
                  <p className="text-sm text-purple-600 mb-2 font-medium">Monatlicher Zins</p>
                  <p className="text-xl font-bold text-slate-800">
                    {monthlyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-200">
                  <p className="text-sm text-emerald-600 mb-2 font-medium">Bisheriger Gewinn</p>
                  <p className="text-xl font-bold text-emerald-600">
                    {investment.profit.toLocaleString('de-DE')} EUR
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <i className="ri-calculator-line text-cyan-600"></i>
                  Zinsberechnung
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500">Kapital:</span>
                    <span className="font-bold text-slate-800">{investment.amount.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500">Zinssatz:</span>
                    <span className="font-bold text-cyan-600">{investment.interestRate}% p.a.</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500">Bisherige Zinsen:</span>
                    <span className="font-bold text-emerald-600">+{investment.profit.toLocaleString('de-DE')} EUR</span>
                  </div>
                  <div className="flex items-center justify-between py-2 pt-3">
                    <span className="text-slate-700 font-semibold">Aktueller Gesamtwert:</span>
                    <span className="text-xl font-bold text-slate-800">{currentValue.toLocaleString('de-DE')} EUR</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payout Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white shadow-lg border border-slate-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-hand-coin-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-slate-800">Auszahlungsoptionen</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <i className="ri-flashlight-fill text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-amber-600">Sofortauszahlung</h3>
                      <p className="text-xs text-amber-500">Mit 2% Abschlag</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">
                    Erhalten Sie Ihr Geld sofort, jedoch mit einem Abschlag von 2% auf den Auszahlungsbetrag.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4 border border-amber-200">
                    <p className="text-xs text-amber-600 mb-2 font-semibold">Beispielrechnung:</p>
                    <div className="space-y-1 text-xs text-slate-500">
                      <div className="flex justify-between">
                        <span>Auszahlungsbetrag:</span>
                        <span className="font-bold text-slate-800">10.000 EUR</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Abschlag (2%):</span>
                        <span className="font-bold text-red-500">-200 EUR</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-slate-200">
                        <span className="font-bold">Sie erhalten:</span>
                        <span className="font-bold text-slate-800">9.800 EUR</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-amber-600">
                    <i className="ri-time-line"></i>
                    <span>Verfugbar: Sofort (1-2 Werktage)</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <i className="ri-calendar-check-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-indigo-600">Planmassige Auszahlung</h3>
                      <p className="text-xs text-indigo-500">Ohne Abschlag</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">
                    Warten Sie bis zum Laufzeitende und erhalten Sie den vollen Betrag ohne Abschlage.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4 border border-indigo-200">
                    <p className="text-xs text-indigo-600 mb-2 font-semibold">Beispielrechnung:</p>
                    <div className="space-y-1 text-xs text-slate-500">
                      <div className="flex justify-between">
                        <span>Auszahlungsbetrag:</span>
                        <span className="font-bold text-slate-800">10.000 EUR</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Abschlag:</span>
                        <span className="font-bold text-emerald-600">0 EUR</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-slate-200">
                        <span className="font-bold">Sie erhalten:</span>
                        <span className="font-bold text-slate-800">10.000 EUR</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-indigo-600">
                    <i className="ri-calendar-line"></i>
                    <span>Verfugbar: {endDate.toLocaleDateString('de-DE')}</span>
                  </div>
                </div>
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
                Schnellubersicht
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Investment-ID</span>
                  <span className="font-bold text-slate-800">{investment.id}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Typ</span>
                  <span className="font-bold text-cyan-600">Flexgeld</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-sm text-slate-500">Verfugbarkeit</span>
                  <span className="font-bold text-emerald-600">Taglich</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-slate-500">Rendite</span>
                  <span className="font-bold text-emerald-600">+{((investment.profit / investment.amount) * 100).toFixed(2)}%</span>
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
                  onClick={() => setShowWithdrawModal(true)}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3.5 px-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <i className="ri-hand-coin-line text-xl"></i>
                  Auszahlung beantragen
                </button>
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-3.5 px-4 rounded-xl font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                >
                  <i className="ri-customer-service-2-line text-xl"></i>
                  Beratung
                </button>
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-3.5 px-4 rounded-xl font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                >
                  <i className="ri-add-circle-line text-xl"></i>
                  Neue Investition
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
                  <span>Taglich verfugbar ohne Kundigungsfrist</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Sofortauszahlung mit 2% Abschlag moglich</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Planmassige Auszahlung ohne Abschlag</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-500 mt-0.5 flex-shrink-0"></i>
                  <span>Einlagensicherung bis 100.000 EUR pro Kunde</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call Us Modal */}
      <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-hand-coin-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Auszahlung beantragen</h3>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Auszahlungsbetrag
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Betrag eingeben"
                  max={currentValue}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">EUR</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Verfugbar: {currentValue.toLocaleString('de-DE')} EUR
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Auszahlungsart wahlen
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setWithdrawType('instant')}
                  className={`p-5 rounded-xl border-2 transition-all text-left cursor-pointer ${
                    withdrawType === 'instant'
                      ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50'
                      : 'border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      withdrawType === 'instant' ? 'border-amber-500' : 'border-slate-300'
                    }`}>
                      {withdrawType === 'instant' && (
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      )}
                    </div>
                    <span className="font-bold text-amber-600">Sofortauszahlung</span>
                  </div>
                  <p className="text-xs text-amber-500 mb-2">Mit 2% Abschlag</p>
                  <p className="text-xs text-slate-500">Verfugbar in 1-2 Werktagen</p>
                </button>

                <button
                  onClick={() => setWithdrawType('planned')}
                  className={`p-5 rounded-xl border-2 transition-all text-left cursor-pointer ${
                    withdrawType === 'planned'
                      ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50'
                      : 'border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      withdrawType === 'planned' ? 'border-indigo-500' : 'border-slate-300'
                    }`}>
                      {withdrawType === 'planned' && (
                        <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      )}
                    </div>
                    <span className="font-bold text-indigo-600">Planmassig</span>
                  </div>
                  <p className="text-xs text-indigo-500 mb-2">Ohne Abschlag</p>
                  <p className="text-xs text-slate-500">Am {endDate.toLocaleDateString('de-DE')}</p>
                </button>
              </div>
            </div>

            {withdrawAmount && (
              <div className="bg-slate-50 rounded-xl p-5 mb-6 border border-slate-200">
                <h4 className="font-bold text-slate-700 mb-3">Zusammenfassung</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Auszahlungsbetrag:</span>
                    <span className="font-bold text-slate-800">{parseFloat(withdrawAmount).toLocaleString('de-DE')} EUR</span>
                  </div>
                  {withdrawType === 'instant' && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Abschlag (2%):</span>
                      <span className="font-bold text-red-500">-{(parseFloat(withdrawAmount) * 0.02).toLocaleString('de-DE')} EUR</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-slate-200">
                    <span className="font-bold text-slate-700">Sie erhalten:</span>
                    <span className="text-lg font-bold text-slate-800">
                      {withdrawType === 'instant'
                        ? (parseFloat(withdrawAmount) * 0.98).toLocaleString('de-DE')
                        : parseFloat(withdrawAmount).toLocaleString('de-DE')} EUR
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowWithdrawModal(false);
                  setWithdrawAmount('');
                }}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3.5 rounded-xl font-semibold transition-all cursor-pointer"
              >
                Abbrechen
              </button>
              <button
                onClick={handleWithdraw}
                className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-indigo-500/30 cursor-pointer"
              >
                Auszahlung beantragen
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
