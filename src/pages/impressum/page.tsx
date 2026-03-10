import { motion } from 'framer-motion';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A855F7]/15 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6"
            >
              <i className="ri-file-list-3-line text-[#06B6D4]"></i>
              <span className="text-sm text-white/90 font-medium">Rechtliche Angaben</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Impressum
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60"
            >
              Rechtliche Angaben gemass 5 TMG
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 space-y-8"
            >
              {/* Company Info */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-building-line text-[#6366F1]"></i>
                  <span>Angaben gemass 5 TMG</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p className="font-semibold text-lg text-white">Spinone Capital GmbH</p>
                  <p>Pienzenauerstraße 95</p>
                  <p>81925 München</p>
                  <p>Deutschland</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-contacts-line text-[#06B6D4]"></i>
                  <span>Kontakt</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p><span className="font-semibold text-white">Telefon:</span> +49 (0) XX XXX XXXXXX</p>
                  <p><span className="font-semibold text-white">E-Mail:</span> info@spinone-asset.com</p>
                </div>
              </div>

              {/* Registration */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-file-text-line text-[#A855F7]"></i>
                  <span>Registereintrag</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p><span className="font-semibold text-white">BaFin-ID:</span> <a href="https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=160251" target="_blank" rel="noopener noreferrer" className="text-[#06B6D4] hover:underline">10160251</a></p>
                  <p><span className="font-semibold text-white">Bak Nr.:</span> 160251</p>
                  <p><span className="font-semibold text-white">LEI-Code:</span> 529900ABCDEFGHIJK123</p>
                  <p><span className="font-semibold text-white">EUID:</span> DE.HRB.123456.HH</p>
                </div>
              </div>

              {/* Management */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-user-star-line text-[#6366F1]"></i>
                  <span>Vertretungsberechtigte Geschaftsfuhrer</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p>Dr. Michael Schneider</p>
                  <p>Thomas Weber</p>
                </div>
              </div>

              {/* Regulatory */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-shield-check-line text-[#06B6D4]"></i>
                  <span>Aufsichtsbehorde</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p className="font-semibold text-white">Bundesanstalt fur Finanzdienstleistungsaufsicht (BaFin)</p>
                  <p>Graurheindorfer Strasse 108</p>
                  <p>53117 Bonn</p>
                  <p>Deutschland</p>
                  <p className="mt-2"><span className="font-semibold text-white">Website:</span> <a href="https://www.bafin.de" target="_blank" rel="noopener noreferrer" className="text-[#06B6D4] hover:underline">www.bafin.de</a></p>
                </div>
              </div>

              {/* Registration Details */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-bank-line text-[#A855F7]"></i>
                  <span>Registrierung</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p>Die Spinone Capital GmbH ist registriert nach 44 iVm 2 Abs.4 KAGB (Kapitalanlagegesetzbuch) als Verwaltungsgesellschaft fur Spezial-AIF mit einem verwalteten Vermogen bis zu 500 Millionen Euro.</p>
                </div>
              </div>

              {/* VAT */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-money-euro-circle-line text-[#6366F1]"></i>
                  <span>Umsatzsteuer-ID</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p><span className="font-semibold text-white">Umsatzsteuer-Identifikationsnummer gemass 27 a Umsatzsteuergesetz:</span></p>
                  <p>DE123456789</p>
                </div>
              </div>

              {/* Responsible */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-user-settings-line text-[#06B6D4]"></i>
                  <span>Verantwortlich fur den Inhalt nach 55 Abs. 2 RStV</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p>Dr. Michael Schneider</p>
                  <p>Pienzenauerstraße 95</p>
                  <p>81925 München</p>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-scales-3-line text-[#A855F7]"></i>
                  <span>Streitschlichtung</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p>Die Europaische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#06B6D4] hover:underline">https://ec.europa.eu/consumers/odr</a></p>
                  <p className="mt-4">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
              </div>

              {/* Liability */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-error-warning-line text-[#6366F1]"></i>
                  <span>Haftungsausschluss</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Haftung fur Inhalte</h3>
                    <p>Als Diensteanbieter sind wir gemass 7 Abs.1 TMG fur eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, ubermittelte oder gespeicherte fremde Informationen zu uberwachen oder nach Umstanden zu forschen, die auf eine rechtswidrige Tatigkeit hinweisen.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Haftung fur Links</h3>
                    <p>Unser Angebot enthalt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb konnen wir fur diese fremden Inhalte auch keine Gewahr ubernehmen. Fur die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Urheberrecht</h3>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfaltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedurfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
