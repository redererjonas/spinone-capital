import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Festgeld', path: '/leistungen/festgeld', icon: 'ri-safe-line' },
    { name: 'Flexgeld', path: '/leistungen/flexgeld', icon: 'ri-exchange-line' },
    { name: 'Tagesgeld', path: '/leistungen/tagesgeld', icon: 'ri-wallet-3-line' },
    { name: 'Aktien', path: '/leistungen/aktien', icon: 'ri-line-chart-line' },
    { name: 'Anleihen', path: '/leistungen/anleihen', icon: 'ri-stock-line' },
  ];

  const company = [
    { name: 'Über Uns', path: '/ueber-uns', icon: 'ri-building-line' },
    { name: 'Unser Team', path: '/team', icon: 'ri-team-line' },
    { name: 'Märkte', path: '/maerkte', icon: 'ri-stock-line' },
    { name: 'Blog & News', path: '/blog', icon: 'ri-newspaper-line' },
    { name: 'Kontakt', path: '/kontakt', icon: 'ri-mail-line' },
  ];

  const legal = [
    { name: 'Impressum', path: '/impressum' },
    { name: 'Datenschutz', path: '/datenschutz' },
    { name: 'Rechtliche Hinweise', path: '/rechtliche-hinweise' },
  ];

  return (
    <footer className="relative bg-secondary-900 text-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-mesh-subtle opacity-30"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-cyan rounded-xl blur-lg opacity-60"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-cyan rounded-xl flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold tracking-tight">SPINONE CAPITAL</span>
                <span className="text-sm font-semibold text-primary-300">Vermögensmanagement</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-md">
              Regulierte Vermögensmanagement GmbH nach KAGB mit Sitz in München. Professionelle Anlagelösungen für institutionelle und qualifizierte Anleger seit über 15 Jahren.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="ri-shield-check-line text-xl text-primary-400"></i>
                  <p className="text-xs font-bold text-white/90">KAGB Registriert</p>
                </div>
                <p className="text-xs text-white/50">§44 iVm §2 Abs.4</p>
              </div>
              <a
                href="https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=160251"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-primary-400/50 transition-all duration-300 block"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <i className="ri-shield-star-line text-xl text-accent-cyan"></i>
                  <p className="text-xs font-bold text-white/90">BaFin-ID</p>
                </div>
                <p className="text-xs text-white/50">10160251 | Bak.Nr.: 160251</p>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-3">
              {[
                { icon: 'ri-linkedin-fill', color: 'from-primary-500 to-primary-600' },
                { icon: 'ri-twitter-x-fill', color: 'from-primary-400 to-accent-cyan' },
                { icon: 'ri-mail-line', color: 'from-accent-cyan to-accent-cyan-dark' },
                { icon: 'ri-youtube-fill', color: 'from-red-500 to-red-600' },
              ].map((social, index) => (
                <a key={index} href="#" className="group relative">
                  <div className="relative w-11 h-11 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 border border-white/10">
                    <i className={`${social.icon} text-lg`}></i>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-heading font-bold mb-6 flex items-center space-x-2">
              <span className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <i className="ri-service-line text-sm"></i>
              </span>
              <span className="text-primary-300">Leistungen</span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="group flex items-center space-x-3 text-sm text-white/60 hover:text-white transition-all duration-300">
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-all duration-300 border border-white/5 group-hover:border-primary-400/30">
                      <i className={`${service.icon} text-sm group-hover:text-primary-400 transition-colors duration-300`}></i>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-heading font-bold mb-6 flex items-center space-x-2">
              <span className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-lg flex items-center justify-center">
                <i className="ri-building-4-line text-sm"></i>
              </span>
              <span className="text-accent-cyan-light">Unternehmen</span>
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="group flex items-center space-x-3 text-sm text-white/60 hover:text-white transition-all duration-300">
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-accent-cyan/20 transition-all duration-300 border border-white/5 group-hover:border-accent-cyan/30">
                      <i className={`${item.icon} text-sm group-hover:text-accent-cyan transition-colors duration-300`}></i>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-heading font-bold mb-6 flex items-center space-x-2">
              <span className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-cyan rounded-lg flex items-center justify-center">
                <i className="ri-customer-service-line text-sm"></i>
              </span>
              <span className="text-primary-300">Kontakt</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-lg text-primary-400"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/80 mb-1">Adresse</p>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Pienzenauerstraße 95<br />
                    81925 München<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-lg text-primary-400"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/80 mb-1">Telefon</p>
                  <p className="text-xs text-white/50">089 588088146</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-lg text-primary-400"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/80 mb-1">E-Mail</p>
                  <p className="text-xs text-white/50">info@spinone-asset.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Information */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <i className="ri-shield-check-line text-2xl text-primary-400"></i>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium mb-1">Registrierung</p>
                  <p className="text-sm text-white font-bold">§44 iVm §2 Abs.4 KAGB</p>
                </div>
              </div>
            </div>

            <a
              href="https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=160251"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent-cyan/50 transition-all duration-300 block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-accent-cyan/20 rounded-xl flex items-center justify-center">
                  <i className="ri-shield-star-line text-2xl text-accent-cyan"></i>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium mb-1">BaFin-ID</p>
                  <p className="text-sm text-white font-bold">10160251 | Bak.Nr.: 160251</p>
                </div>
              </div>
            </a>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary-400/20 rounded-xl flex items-center justify-center">
                  <i className="ri-global-line text-2xl text-primary-400"></i>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium mb-1">LEI-Code</p>
                  <p className="text-sm text-white font-bold">529900ABCDEFGHIJK123</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-sm text-white/40">
                © {currentYear} Spinone Capital GmbH
              </p>
              <div className="flex items-center space-x-6">
                {legal.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm text-white/40 hover:text-primary-400 transition-colors duration-300 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <span className="text-sm text-white/40 whitespace-nowrap">
              Projekt genehmigt durch BaFin
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
