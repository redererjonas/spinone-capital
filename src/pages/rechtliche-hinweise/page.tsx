import { motion } from 'framer-motion';

export default function RechtlicheHinweisePage() {
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
              <i className="ri-scales-3-line text-primary-600"></i>
              <span className="text-sm text-slate-700 font-medium">Rechtliche Informationen</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Rechtliche Hinweise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500"
            >
              Wichtige Informationen für Anleger
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
              {/* Risk Warning */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <i className="ri-alert-line text-2xl text-amber-600 flex-shrink-0 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-lg text-amber-800 mb-2">Risikohinweis</h3>
                    <p className="text-amber-700">
                      Kapitalanlagen sind mit Risiken verbunden. Der Wert von Anlagen kann sowohl steigen als auch fallen. Es besteht das Risiko, dass Anleger ihr eingesetztes Kapital ganz oder teilweise verlieren. Die Wertentwicklung in der Vergangenheit ist kein verlässlicher Indikator für zukünftige Ergebnisse.
                    </p>
                  </div>
                </div>
              </div>

              {/* General Information */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-information-line text-primary-600"></i>
                  <span>Allgemeine Hinweise</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>Die auf dieser Website bereitgestellten Informationen dienen ausschließlich Informationszwecken und stellen weder eine Anlageberatung noch eine Empfehlung zum Kauf oder Verkauf von Finanzinstrumenten dar. Sie ersetzen nicht die individuelle Beratung durch einen qualifizierten Anlageberater.</p>
                  <p>Die Spinone Capital GmbH ist als Vermögensmanagement nach 44 iVm 2 Abs.4 KAGB registriert und unterliegt der Aufsicht der Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin).</p>
                </div>
              </div>

              {/* Target Group */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-user-star-line text-primary-600"></i>
                  <span>Zielgruppe</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>Die auf dieser Website dargestellten Anlagemöglichkeiten richten sich ausschließlich an:</p>
                  <ul className="list-none space-y-2 ml-4">
                    {[
                      'Professionelle Anleger im Sinne des 1 Abs. 19 Nr. 32 KAGB',
                      'Semiprofessionelle Anleger im Sinne des 1 Abs. 19 Nr. 33 KAGB',
                      'Institutionelle Investoren',
                      'Qualifizierte Anleger gemäß den gesetzlichen Bestimmungen'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <i className="ri-checkbox-circle-line text-primary-600 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">Die Informationen sind nicht für Privatanleger bestimmt und dürfen nicht an diese weitergegeben werden.</p>
                </div>
              </div>

              {/* Investment Risks */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-error-warning-line text-primary-600"></i>
                  <span>Anlagerisiken</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>Jede Kapitalanlage ist mit Risiken verbunden. Zu den wesentlichen Risiken gehören unter anderem:</p>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      { label: 'Marktrisiko', desc: 'Wertschwankungen aufgrund von Marktbewegungen' },
                      { label: 'Kreditrisiko', desc: 'Ausfall von Schuldnern oder Emittenten' },
                      { label: 'Liquiditätsrisiko', desc: 'Eingeschränkte Handelbarkeit von Anlagen' },
                      { label: 'Währungsrisiko', desc: 'Wechselkursschwankungen bei Fremdwährungsanlagen' },
                      { label: 'Zinsänderungsrisiko', desc: 'Auswirkungen von Zinsänderungen auf den Wert' },
                      { label: 'Konzentrationsrisiko', desc: 'Abhängigkeit von einzelnen Anlagen oder Märkten' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <i className="ri-alert-line text-amber-500 mt-1"></i>
                        <span><span className="font-semibold text-slate-900">{item.label}:</span> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">Eine detaillierte Darstellung der Risiken finden Sie in den jeweiligen Anlagebedingungen und Verkaufsprospekten.</p>
                </div>
              </div>

              {/* No Guarantee */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-shield-cross-line text-primary-600"></i>
                  <span>Keine Garantie oder Gewährleistung</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>Die Spinone Capital GmbH übernimmt keine Garantie oder Gewährleistung für:</p>
                  <ul className="list-none space-y-2 ml-4">
                    {[
                      'Die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen',
                      'Die Erreichung bestimmter Anlageziele oder Renditen',
                      'Den Erhalt des eingesetzten Kapitals',
                      'Die steuerliche Behandlung von Anlagen'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <i className="ri-close-circle-line text-red-400 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Past Performance */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-line-chart-line text-primary-600"></i>
                  <span>Wertentwicklung</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>Angaben zur Wertentwicklung beziehen sich auf die Vergangenheit. Die frühere Wertentwicklung ist kein verlässlicher Indikator für künftige Ergebnisse. Der Wert von Anlagen und die daraus erzielten Erträge können sowohl steigen als auch fallen.</p>
                  <p>Simulierte oder prognostizierte Wertentwicklungen basieren auf Annahmen und Schätzungen, die sich als unzutreffend erweisen können. Sie sind kein verlässlicher Indikator für die tatsächliche zukünftige Wertentwicklung.</p>
                </div>
              </div>

              {/* Tax Information */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-money-euro-circle-line text-primary-600"></i>
                  <span>Steuerliche Behandlung</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>Die steuerliche Behandlung von Kapitalanlagen hängt von den individuellen Verhältnissen des jeweiligen Anlegers ab und kann künftigen Änderungen unterworfen sein. Die auf dieser Website enthaltenen Informationen stellen keine Steuerberatung dar.</p>
                  <p>Anleger sollten sich vor einer Anlageentscheidung von einem qualifizierten Steuerberater über die steuerlichen Auswirkungen beraten lassen.</p>
                </div>
              </div>

              {/* Regulatory Information */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-bank-line text-primary-600"></i>
                  <span>Regulatorische Informationen</span>
                </h2>
                <div className="space-y-2 text-slate-600">
                  <p><span className="font-semibold text-slate-900">Registrierung:</span> Die Spinone Capital GmbH ist registriert nach 44 iVm 2 Abs.4 KAGB als Verwaltungsgesellschaft für Spezial-AIF mit einem verwalteten Vermögen bis zu 500 Millionen Euro.</p>
                  <p><span className="font-semibold text-slate-900">Aufsicht:</span> Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin), Graurheindorfer Strasse 108, 53117 Bonn</p>
                  <p><span className="font-semibold text-slate-900">BaFin-ID:</span> <a href="https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=160251" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">10160251</a> | Bak.Nr.: 160251</p>
                  <p><span className="font-semibold text-slate-900">LEI-Code:</span> 529900ABCDEFGHIJK123</p>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-file-list-3-line text-primary-600"></i>
                  <span>Wesentliche Anlegerinformationen</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>Vor einer Anlageentscheidung sollten Anleger die folgenden Dokumente sorgfältig lesen:</p>
                  <ul className="list-none space-y-2 ml-4">
                    {[
                      'Verkaufsprospekt',
                      'Anlagebedingungen',
                      'Wesentliche Anlegerinformationen (Key Investor Information Document - KIID)',
                      'Jahres- und Halbjahresberichte'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <i className="ri-file-text-line text-primary-600 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">Diese Dokumente sind kostenlos bei der Spinone Capital GmbH erhältlich und können auf Anfrage zugesandt werden.</p>
                </div>
              </div>

              {/* Complaints */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-customer-service-2-line text-primary-600"></i>
                  <span>Beschwerdemanagement</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>Sollten Sie Anlass zu einer Beschwerde haben, können Sie sich jederzeit an uns wenden:</p>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p><span className="font-semibold text-slate-900">E-Mail:</span> info@spinone-asset.com</p>
                    <p><span className="font-semibold text-slate-900">Telefon:</span> +49 (0)89 588088170</p>
                    <p><span className="font-semibold text-slate-900">Schriftlich:</span> Spinone Capital GmbH, Pienzenauerstraße 95, 81925 München</p>
                  </div>
                  <p className="mt-4">Wir werden Ihre Beschwerde umgehend prüfen und uns bemühen, diese innerhalb angemessener Frist zu beantworten.</p>
                </div>
              </div>

              {/* Copyright */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-3">
                  <i className="ri-copyright-line text-primary-600"></i>
                  <span>Urheberrecht und Nutzungsrechte</span>
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken, Logos, etc.) sind urheberrechtlich geschützt. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der Spinone Capital GmbH.</p>
                </div>
              </div>

              {/* Contact Box */}
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100">
                <h3 className="font-semibold text-lg text-slate-900 mb-3">Fragen zu rechtlichen Hinweisen?</h3>
                <p className="text-slate-600 mb-4">Bei Fragen zu den rechtlichen Hinweisen oder für weitere Informationen kontaktieren Sie uns bitte:</p>
                <div className="space-y-2 text-slate-600">
                  <p><span className="font-semibold text-slate-900">E-Mail:</span> info@spinone-asset.com</p>
                  <p><span className="font-semibold text-slate-900">Telefon:</span> +49 (0)89 588088170</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
