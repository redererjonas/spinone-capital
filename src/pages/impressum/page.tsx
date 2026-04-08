import { motion } from 'framer-motion';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
          {/* Subtle Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white shadow-sm rounded-full border border-slate-200 mb-6"
            >
              <i className="ri-file-list-3-line text-primary-600"></i>
              <span className="text-sm text-slate-700 font-medium">Rechtliche Angaben</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Impressum
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500"
            >
              Rechtliche Angaben gemäß 5 TMG
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
              className="bg-white shadow-sm rounded-3xl p-8 md:p-12 border border-slate-200 space-y-8"
            >
              {/* Company Info */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-building-line text-primary-600"></i>
                  <span>Angaben gemäß 5 TMG</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p className="font-semibold text-lg text-slate-900">Spinone Capital GmbH</p>
                  <p>Pienzenauerstraße 95</p>
                  <p>81925 München</p>
                  <p>Deutschland</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-contacts-line text-primary-600"></i>
                  <span>Kontakt</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p><span className="font-semibold text-slate-900">Telefon:</span> 089 588088146</p>
                  <p><span className="font-semibold text-slate-900">E-Mail:</span> info@spinone-asset.com</p>
                </div>
              </div>

              {/* Registration */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-file-text-line text-primary-600"></i>
                  <span>Registereintrag</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p><span className="font-semibold text-slate-900">BaFin-ID:</span> <a href="https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=160251" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">10160251</a></p>
                  <p><span className="font-semibold text-slate-900">Bak Nr.:</span> 160251</p>
                  <p><span className="font-semibold text-slate-900">LEI-Code:</span> 529900ABCDEFGHIJK123</p>
                  <p><span className="font-semibold text-slate-900">EUID:</span> DE.HRB.123456.HH</p>
                </div>
              </div>

              {/* Management */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-user-star-line text-primary-600"></i>
                  <span>Vertretungsberechtigte Geschäftsführer</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p>Dr. Michael Schneider</p>
                  <p>Thomas Weber</p>
                </div>
              </div>

              {/* Regulatory */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-shield-check-line text-primary-600"></i>
                  <span>Aufsichtsbehörde</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p className="font-semibold text-slate-900">Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)</p>
                  <p>Graurheindorfer Strasse 108</p>
                  <p>53117 Bonn</p>
                  <p>Deutschland</p>
                  <p className="mt-2"><span className="font-semibold text-slate-900">Website:</span> <a href="https://www.bafin.de" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.bafin.de</a></p>
                </div>
              </div>

              {/* Registration Details */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-bank-line text-primary-600"></i>
                  <span>Registrierung</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p>Die Spinone Capital GmbH ist registriert nach 44 iVm 2 Abs.4 KAGB (Kapitalanlagegesetzbuch) als Verwaltungsgesellschaft für Spezial-AIF mit einem verwalteten Vermögen bis zu 500 Millionen Euro.</p>
                </div>
              </div>

              {/* VAT */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-money-euro-circle-line text-primary-600"></i>
                  <span>Umsatzsteuer-ID</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p><span className="font-semibold text-slate-900">Umsatzsteuer-Identifikationsnummer gemäß 27 a Umsatzsteuergesetz:</span></p>
                  <p>DE123456789</p>
                </div>
              </div>

              {/* Responsible */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-user-settings-line text-primary-600"></i>
                  <span>Verantwortlich für den Inhalt nach 55 Abs. 2 RStV</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p>Dr. Michael Schneider</p>
                  <p>Pienzenauerstraße 95</p>
                  <p>81925 München</p>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-scales-3-line text-primary-600"></i>
                  <span>Streitschlichtung</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://ec.europa.eu/consumers/odr</a></p>
                  <p className="mt-4">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
              </div>

              {/* Liability */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-error-warning-line text-primary-600"></i>
                  <span>Haftungsausschluss</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Haftung für Inhalte</h3>
                    <p>Als Diensteanbieter sind wir gemäß 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Haftung für Links</h3>
                    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Urheberrecht</h3>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
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
