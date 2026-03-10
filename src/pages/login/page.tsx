import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Ungültige E-Mail oder Passwort');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">

      <div className="w-full max-w-md relative z-10">
        {/* Logo & Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors mb-6 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="text-sm font-medium">Zurück zur Startseite</span>
          </button>

          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-500/30">
              <i className="ri-line-chart-line text-3xl text-white"></i>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Willkommen zurück
          </h1>
          <p className="text-slate-500">
            Melden Sie sich an, um auf Ihr Portfolio zuzugreifen
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-primary-500/10 border border-slate-200 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-xl text-slate-400"></i>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="ihre@email.de"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Passwort
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-lock-line text-xl text-slate-400"></i>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-xl`}></i>
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3"
              >
                <i className="ri-error-warning-line text-xl text-red-500"></i>
                <p className="text-sm text-red-600 font-medium">{error}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
            >
              Anmelden
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-4 border border-primary-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-information-line text-white"></i>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Demo-Zugangsdaten
                  </p>
                  <div className="space-y-1 text-xs text-slate-600">
                    <p className="font-mono bg-white/80 px-2 py-1 rounded border border-slate-200">
                      E-Mail: demo@demo.com
                    </p>
                    <p className="font-mono bg-white/80 px-2 py-1 rounded border border-slate-200">
                      Passwort: demo123
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-slate-500">
            Noch kein Konto?{' '}
            <button
              onClick={() => navigate('/kontakt')}
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors cursor-pointer"
            >
              Jetzt Beratung anfragen
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
