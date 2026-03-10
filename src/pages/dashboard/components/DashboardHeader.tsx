import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { path: '/dashboard', label: 'Ubersicht', icon: 'ri-dashboard-3-line' },
    { path: '/dashboard/festgeld', label: 'Festgeld', icon: 'ri-safe-2-line' },
    { path: '/dashboard/flexgeld', label: 'Flexgeld', icon: 'ri-exchange-line' },
    { path: '/dashboard/tagesgeld', label: 'Tagesgeld', icon: 'ri-calendar-check-line' },
    { path: '/dashboard/aktien', label: 'Aktien', icon: 'ri-stock-line' },
    { path: '/dashboard/anleihen', label: 'Anleihen', icon: 'ri-file-chart-line' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-indigo-500/30">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                SPINONE CAPITAL
              </span>
              <p className="text-xs text-indigo-600 font-semibold -mt-1">Kundenportal</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = window.location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap group ${
                    isActive
                      ? 'text-indigo-600'
                      : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <i className={`${item.icon} text-lg`}></i>
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-indigo-50 rounded-xl border border-indigo-200 -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <i className={`${showMobileMenu ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-slate-700`}></i>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-3 hover:bg-slate-100 rounded-xl px-3 py-2 transition-all cursor-pointer group"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
                  <span className="text-white font-bold text-sm">
                    {user.firstName[0]}{user.lastName[0]}
                  </span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-semibold text-slate-800">{user.firstName} {user.lastName}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
                <i className={`ri-arrow-down-s-line text-slate-500 transition-transform hidden md:block ${showMenu ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {showMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
                  >
                    <div className="p-5 border-b border-slate-200 bg-gradient-to-br from-indigo-50 to-purple-50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold">
                            {user.firstName[0]}{user.lastName[0]}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">{user.firstName} {user.lastName}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="bg-slate-100 backdrop-blur-sm rounded-lg p-2 text-xs text-slate-600 flex items-center gap-1">
                        <i className="ri-shield-check-line text-indigo-600"></i>
                        <span>Verifiziertes Konto</span>
                      </div>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={() => {
                          navigate('/dashboard/profil');
                          setShowMenu(false);
                        }}
                        className="w-full px-5 py-3 text-left text-sm text-slate-700 hover:bg-indigo-50 flex items-center gap-3 transition-all cursor-pointer whitespace-nowrap group"
                      >
                        <div className="w-9 h-9 bg-slate-100 group-hover:bg-indigo-100 rounded-lg flex items-center justify-center transition-colors">
                          <i className="ri-user-line text-lg text-slate-500 group-hover:text-indigo-600"></i>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">Mein Profil</p>
                          <p className="text-xs text-slate-500">Einstellungen verwalten</p>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          navigate('/');
                          setShowMenu(false);
                        }}
                        className="w-full px-5 py-3 text-left text-sm text-slate-700 hover:bg-indigo-50 flex items-center gap-3 transition-all cursor-pointer whitespace-nowrap group"
                      >
                        <div className="w-9 h-9 bg-slate-100 group-hover:bg-indigo-100 rounded-lg flex items-center justify-center transition-colors">
                          <i className="ri-home-line text-lg text-slate-500 group-hover:text-indigo-600"></i>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">Zur Startseite</p>
                          <p className="text-xs text-slate-500">Hauptwebsite besuchen</p>
                        </div>
                      </button>
                    </div>

                    <div className="border-t border-slate-200 bg-slate-50">
                      <button
                        onClick={handleLogout}
                        className="w-full px-5 py-3.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-all cursor-pointer whitespace-nowrap group"
                      >
                        <div className="w-9 h-9 bg-red-100 group-hover:bg-red-200 rounded-lg flex items-center justify-center transition-colors">
                          <i className="ri-logout-box-line text-lg"></i>
                        </div>
                        <div>
                          <p className="font-semibold">Abmelden</p>
                          <p className="text-xs text-red-500">Sicher ausloggen</p>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = window.location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-indigo-100' : 'bg-slate-100'
                    }`}>
                      <i className={`${item.icon} text-lg`}></i>
                    </div>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
