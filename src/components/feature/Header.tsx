import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const services = [
    { name: 'Festgeld', path: '/leistungen/festgeld', icon: 'ri-safe-line', desc: 'Stabile Renditen', color: 'from-primary-500 to-primary-600' },
    { name: 'Flexgeld', path: '/leistungen/flexgeld', icon: 'ri-exchange-line', desc: 'Flexible Laufzeiten', color: 'from-accent-purple to-accent-purple-dark' },
    { name: 'Tagesgeld', path: '/leistungen/tagesgeld', icon: 'ri-wallet-3-line', desc: 'Tägliche Verfügbarkeit', color: 'from-accent-cyan to-accent-cyan-dark' },
    { name: 'Aktien', path: '/leistungen/aktien', icon: 'ri-line-chart-line', desc: 'Globale Märkte', color: 'from-success to-success-dark' },
    { name: 'Anleihen', path: '/leistungen/anleihen', icon: 'ri-stock-line', desc: 'Fixed Income', color: 'from-highlight to-highlight-dark' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-secondary-950/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-purple to-accent-cyan rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 via-accent-purple to-accent-cyan rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold tracking-tight text-white">
                SPINONE CAPITAL
              </span>
              <span className="text-xs font-semibold gradient-text">Vermögensmanagement</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                location.pathname === '/'
                  ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Startseite
            </Link>

            <Link
              to="/ueber-uns"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                location.pathname === '/ueber-uns'
                  ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Über Uns
            </Link>

            <Link
              to="/team"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                location.pathname === '/team'
                  ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Unser Team
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center space-x-1 ${
                  location.pathname.startsWith('/leistungen')
                    ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Leistungen</span>
                <i className={`ri-arrow-down-s-line text-base transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}></i>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 glass-effect-strong rounded-2xl py-3 overflow-hidden"
                  >
                    <div className="px-4 py-2 border-b border-white/10">
                      <p className="text-xs font-bold text-white/50 uppercase tracking-wider">Unsere Anlageprodukte</p>
                    </div>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                          <i className={`${service.icon} text-lg text-white`}></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-white group-hover:text-primary-400 transition-colors duration-300">{service.name}</p>
                          <p className="text-xs text-white/50">{service.desc}</p>
                        </div>
                        <i className="ri-arrow-right-line text-base text-white/30 group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300"></i>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/maerkte"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                location.pathname === '/maerkte'
                  ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Märkte
            </Link>

            <Link
              to="/blog"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                location.pathname === '/blog'
                  ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Blog & News
            </Link>

            <Link
              to="/kontakt"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                location.pathname === '/kontakt'
                  ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-5 py-2.5 text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              Anmelden
            </Link>
            <Link
              to="/kontakt"
              className="relative group px-6 py-2.5 text-sm font-bold rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan animate-gradient bg-[length:200%_200%]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-purple-light to-accent-cyan-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white">Jetzt starten</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl text-white`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-0 right-0 bg-secondary-950/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl z-50"
            style={{ maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto' }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              <Link
                to="/"
                className={`flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  location.pathname === '/'
                    ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="ri-home-line text-lg"></i>
                <span>Startseite</span>
              </Link>

              <Link
                to="/ueber-uns"
                className={`flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  location.pathname === '/ueber-uns'
                    ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="ri-building-line text-lg"></i>
                <span>Über Uns</span>
              </Link>

              <Link
                to="/team"
                className={`flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  location.pathname === '/team'
                    ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="ri-team-line text-lg"></i>
                <span>Unser Team</span>
              </Link>

              <div className="px-4 py-4 glass-card my-3">
                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <i className="ri-service-line"></i>
                  <span>Leistungen</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`flex items-center space-x-2 px-3 py-3 rounded-xl transition-all duration-300 ${
                        location.pathname === service.path
                          ? 'bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${service.icon} text-sm text-white`}></i>
                      </div>
                      <span className="text-sm font-semibold text-white">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/maerkte"
                className={`flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  location.pathname === '/maerkte'
                    ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="ri-stock-line text-lg"></i>
                <span>Märkte</span>
              </Link>

              <Link
                to="/blog"
                className={`flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  location.pathname === '/blog'
                    ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="ri-newspaper-line text-lg"></i>
                <span>Blog & News</span>
              </Link>

              <Link
                to="/kontakt"
                className={`flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  location.pathname === '/kontakt'
                    ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border border-primary-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="ri-mail-line text-lg"></i>
                <span>Kontakt</span>
              </Link>

              <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
                <Link
                  to="/login"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 text-sm font-bold text-white border-2 border-white/20 rounded-xl hover:border-primary-500 hover:bg-white/5 transition-all duration-300"
                >
                  <i className="ri-login-box-line text-lg"></i>
                  <span>Anmelden</span>
                </Link>
                <Link
                  to="/kontakt"
                  className="relative flex items-center justify-center space-x-2 w-full px-6 py-3 text-sm font-bold rounded-xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan"></div>
                  <i className="ri-rocket-line text-lg relative text-white"></i>
                  <span className="relative text-white">Jetzt starten</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
