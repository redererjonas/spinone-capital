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
    { name: 'Festgeld', path: '/leistungen/festgeld', icon: 'ri-safe-line', desc: 'Stabile Renditen', color: 'from-primary-600 to-primary-700' },
    { name: 'Flexgeld', path: '/leistungen/flexgeld', icon: 'ri-exchange-line', desc: 'Flexible Laufzeiten', color: 'from-primary-500 to-accent-cyan' },
    { name: 'Tagesgeld', path: '/leistungen/tagesgeld', icon: 'ri-wallet-3-line', desc: 'Tägliche Verfügbarkeit', color: 'from-accent-cyan to-accent-cyan-dark' },
    { name: 'Aktien', path: '/leistungen/aktien', icon: 'ri-line-chart-line', desc: 'Globale Märkte', color: 'from-success to-success-dark' },
    { name: 'Anleihen', path: '/leistungen/anleihen', icon: 'ri-stock-line', desc: 'Fixed Income', color: 'from-highlight to-highlight-dark' },
  ];

  const navLinkClass = (path: string, exact = true) => {
    const isActive = exact ? location.pathname === path : location.pathname.startsWith(path);
    return `relative px-4 py-2 rounded-xl text-[13px] font-semibold tracking-wide transition-all duration-300 ${
      isActive
        ? 'text-primary-600 bg-primary-50/80 shadow-sm'
        : 'text-slate-500 hover:text-slate-900 hover:bg-white/60'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2'
          : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled
              ? 'bg-white/80 backdrop-blur-2xl border border-slate-200/60 shadow-[0_8px_32px_-8px_rgba(37,99,235,0.12)] rounded-2xl px-6 h-16'
              : 'bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_4px_24px_-4px_rgba(37,99,235,0.08)] rounded-2xl px-6 h-[68px]'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary-500/25">
                <span className="text-lg font-bold text-white tracking-tight">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-heading font-bold tracking-tight text-slate-900">
                SPINONE
              </span>
              <span className="text-[10px] font-semibold text-primary-500/80 tracking-widest uppercase -mt-0.5">CAPITAL GmbH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-50/50 rounded-xl p-1">
            <Link to="/" className={navLinkClass('/')}>
              Startseite
            </Link>

            <Link to="/ueber-uns" className={navLinkClass('/ueber-uns')}>
              Über Uns
            </Link>

            <Link to="/team" className={navLinkClass('/team')}>
              Team
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`${navLinkClass('/leistungen', false)} flex items-center space-x-1`}
              >
                <span>Leistungen</span>
                <motion.i
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ri-arrow-down-s-line text-sm"
                ></motion.i>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] bg-white/90 backdrop-blur-2xl border border-slate-200/60 rounded-2xl p-2 shadow-[0_20px_60px_-12px_rgba(37,99,235,0.15)]"
                  >
                    {/* Dropdown arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 border-l border-t border-slate-200/60 rotate-45 rounded-tl-sm"></div>

                    <div className="relative">
                      <div className="px-3 py-2 mb-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">Anlageprodukte</p>
                      </div>
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-primary-50/60 transition-all duration-200 group"
                        >
                          <div className={`w-9 h-9 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                            <i className={`${service.icon} text-base text-white`}></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-700 group-hover:text-primary-600 transition-colors duration-200">{service.name}</p>
                            <p className="text-[11px] text-slate-400">{service.desc}</p>
                          </div>
                          <i className="ri-arrow-right-s-line text-slate-300 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all duration-200"></i>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/maerkte" className={navLinkClass('/maerkte')}>
              Märkte
            </Link>

            <Link to="/blog" className={navLinkClass('/blog', false)}>
              Blog
            </Link>

            <Link to="/kontakt" className={navLinkClass('/kontakt')}>
              Kontakt
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <Link
              to="/login"
              className="px-4 py-2 text-[13px] font-semibold text-slate-500 hover:text-primary-600 rounded-xl transition-all duration-300 hover:bg-primary-50/60"
            >
              Anmelden
            </Link>
            <Link
              to="/kontakt"
              className="group relative px-5 py-2.5 text-[13px] font-bold rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"></div>
              <span className="relative text-white flex items-center space-x-1.5">
                <span>Jetzt starten</span>
                <i className="ri-arrow-right-up-line text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"></i>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/60 hover:bg-white border border-slate-200/60 transition-all duration-300"
          >
            <motion.i
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-lg text-slate-600`}
            ></motion.i>
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
            className="lg:hidden fixed inset-0 top-0 bg-slate-900/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200/60 shadow-[0_20px_60px_-12px_rgba(37,99,235,0.15)] rounded-2xl z-50"
            style={{ maxHeight: 'calc(100vh - 6rem)', overflowY: 'auto' }}
          >
            <div className="p-4 space-y-1">
              {[
                { to: '/', icon: 'ri-home-5-line', label: 'Startseite' },
                { to: '/ueber-uns', icon: 'ri-building-2-line', label: 'Über Uns' },
                { to: '/team', icon: 'ri-team-line', label: 'Team' },
                { to: '/maerkte', icon: 'ri-stock-line', label: 'Märkte' },
                { to: '/blog', icon: 'ri-newspaper-line', label: 'Blog' },
                { to: '/kontakt', icon: 'ri-mail-send-line', label: 'Kontakt' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    location.pathname === item.to
                      ? 'text-primary-600 bg-primary-50/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* Services Grid */}
              <div className="px-3 py-4 bg-slate-50/80 rounded-xl my-2">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-3 px-1">
                  Anlageprodukte
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`flex items-center space-x-2 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        location.pathname === service.path
                          ? 'bg-white shadow-sm'
                          : 'hover:bg-white/80'
                      }`}
                    >
                      <div className={`w-7 h-7 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${service.icon} text-xs text-white`}></i>
                      </div>
                      <span className="text-xs font-semibold text-slate-700">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-3 space-y-2 border-t border-slate-100 mt-2">
                <Link
                  to="/login"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 text-sm font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-200"
                >
                  <i className="ri-login-box-line"></i>
                  <span>Anmelden</span>
                </Link>
                <Link
                  to="/kontakt"
                  className="relative flex items-center justify-center space-x-2 w-full px-6 py-3 text-sm font-bold rounded-xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500"></div>
                  <i className="ri-rocket-line relative text-white"></i>
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
