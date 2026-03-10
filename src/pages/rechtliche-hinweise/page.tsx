import { motion } from 'framer-motion';

export default function RechtlicheHinweisePage() {
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
              <i className="ri-scales-3-line text-[#06B6D4]"></i>
              <span className="text-sm text-white/90 font-medium">Rechtliche Informationen</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Rechtliche Hinweise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60"
            >
              Wichtige Informationen fur Anleger
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
              {/* Risk Warning */}
              <div className="bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <i className="ri-alert-line text-2xl text-amber-400 flex-shrink-0 mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-lg text-amber-300 mb-2">Risikohinweis</h3>
                    <p className="text-amber-200/80">
                      Kapitalanlagen sind mit Risiken verbunden. Der Wert von Anlagen kann sowohl steigen als auch fallen. Es besteht das Risiko, dass Anleger ihr eingesetztes Kapital ganz oder teilweise verlieren. Die Wertentwicklung in der Vergangenheit ist kein verlasslicher Indikator fur zukunftige Ergebnisse.
                    </p>
                  </div>
                </div>
              </div>

              {/* General Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-information-line text-[#6366F1]"></i>
                  <span>Allgemeine Hinweise</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Die auf dieser Website bereitgestellten Informationen dienen ausschliesslich Informationszwecken und stellen weder eine Anlageberatung noch eine Empfehlung zum Kauf oder Verkauf von Finanzinstrumenten dar. Sie ersetzen nicht die individuelle Beratung durch einen qualifizierten Anlageberater.</p>
                  <p>Die Spinone Capital GmbH ist als Vermögensmanagement nach 44 iVm 2 Abs.4 KAGB registriert und unterliegt der Aufsicht der Bundesanstalt fur Finanzdienstleistungsaufsicht (BaFin).</p>
                </div>
              </div>

              {/* Target Group */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-user-star-line text-[#06B6D4]"></i>
                  <span>Zielgruppe</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Die auf dieser Website dargestellten Anlagemoglichkeiten richten sich ausschliesslich an:</p>
                  <ul className="list-none space-y-2 ml-4">
                    {[
                      'Professionelle Anleger im Sinne des 1 Abs. 19 Nr. 32 KAGB',
                      'Semiprofessionelle Anleger im Sinne des 1 Abs. 19 Nr. 33 KAGB',
                      'Institutionelle Investoren',
                      'Qualifizierte Anleger gemass den gesetzlichen Bestimmungen'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <i className="ri-checkbox-circle-line text-[#06B6D4] mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">Die Informationen sind nicht fur Privatanleger bestimmt und durfen nicht an diese weitergegeben werden.</p>
                </div>
              </div>

              {/* Investment Risks */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-error-warning-line text-[#A855F7]"></i>
                  <span>Anlagerisiken</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Jede Kapitalanlage ist mit Risiken verbunden. Zu den wesentlichen Risiken gehoren unter anderem:</p>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      { label: 'Marktrisiko', desc: 'Wertschwankungen aufgrund von Marktbewegungen' },
                      { label: 'Kreditrisiko', desc: 'Ausfall von Schuldnern oder Emittenten' },
                      { label: 'Liquiditatsrisiko', desc: 'Eingeschrankte Handelbarkeit von Anlagen' },
                      { label: 'Wahrungsrisiko', desc: 'Wechselkursschwankungen bei Fremdwahrungsanlagen' },
                      { label: 'Zinsanderungsrisiko', desc: 'Auswirkungen von Zinsanderungen auf den Wert' },
                      { label: 'Konzentrationsrisiko', desc: 'Abhangigkeit von einzelnen Anlagen oder Markten' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <i className="ri-alert-line text-amber-400 mt-1"></i>
                        <span><span className="font-semibold text-white">{item.label}:</span> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">Eine detaillierte Darstellung der Risiken finden Sie in den jeweiligen Anlagebedingungen und Verkaufsprospekten.</p>
                </div>
              </div>

              {/* No Guarantee */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-shield-cross-line text-[#6366F1]"></i>
                  <span>Keine Garantie oder Gewahrleistung</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Die Spinone Capital GmbH ubernimmt keine Garantie oder Gewahrleistung fur:</p>
                  <ul className="list-none space-y-2 ml-4">
                    {[
                      'Die Richtigkeit, Vollstandigkeit oder Aktualitat der bereitgestellten Informationen',
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
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-line-chart-line text-[#06B6D4]"></i>
                  <span>Wertentwicklung</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Angaben zur Wertentwicklung beziehen sich auf die Vergangenheit. Die fruhere Wertentwicklung ist kein verlasslicher Indikator fur kunftige Ergebnisse. Der Wert von Anlagen und die daraus erzielten Ertrage konnen sowohl steigen als auch fallen.</p>
                  <p>Simulierte oder prognostizierte Wertentwicklungen basieren auf Annahmen und Schatzungen, die sich als unzutreffend erweisen konnen. Sie sind kein verlasslicher Indikator fur die tatsachliche zukunftige Wertentwicklung.</p>
                </div>
              </div>

              {/* Tax Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-money-euro-circle-line text-[#A855F7]"></i>
                  <span>Steuerliche Behandlung</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Die steuerliche Behandlung von Kapitalanlagen hangt von den individuellen Verhaltnissen des jeweiligen Anlegers ab und kann kunftigen Anderungen unterworfen sein. Die auf dieser Website enthaltenen Informationen stellen keine Steuerberatung dar.</p>
                  <p>Anleger sollten sich vor einer Anlageentscheidung von einem qualifizierten Steuerberater uber die steuerlichen Auswirkungen beraten lassen.</p>
                </div>
              </div>

              {/* Regulatory Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-bank-line text-[#6366F1]"></i>
                  <span>Regulatorische Informationen</span>
                </h2>
                <div className="space-y-2 text-white/70">
                  <p><span className="font-semibold text-white">Registrierung:</span> Die Spinone Capital GmbH ist registriert nach 44 iVm 2 Abs.4 KAGB als Verwaltungsgesellschaft fur Spezial-AIF mit einem verwalteten Vermogen bis zu 500 Millionen Euro.</p>
                  <p><span className="font-semibold text-white">Aufsicht:</span> Bundesanstalt fur Finanzdienstleistungsaufsicht (BaFin), Graurheindorfer Strasse 108, 53117 Bonn</p>
                  <p><span className="font-semibold text-white">BaFin-ID:</span> <a href="https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=160251" target="_blank" rel="noopener noreferrer" className="text-[#06B6D4] hover:underline">10160251</a> | Bak.Nr.: 160251</p>
                  <p><span className="font-semibold text-white">LEI-Code:</span> 529900ABCDEFGHIJK123</p>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-file-list-3-line text-[#06B6D4]"></i>
                  <span>Wesentliche Anlegerinformationen</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Vor einer Anlageentscheidung sollten Anleger die folgenden Dokumente sorgfaltig lesen:</p>
                  <ul className="list-none space-y-2 ml-4">
                    {[
                      'Verkaufsprospekt',
                      'Anlagebedingungen',
                      'Wesentliche Anlegerinformationen (Key Investor Information Document - KIID)',
                      'Jahres- und Halbjahresberichte'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <i className="ri-file-text-line text-[#06B6D4] mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">Diese Dokumente sind kostenlos bei der Spinone Capital GmbH erhaltlich und konnen auf Anfrage zugesandt werden.</p>
                </div>
              </div>

              {/* Complaints */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-customer-service-2-line text-[#A855F7]"></i>
                  <span>Beschwerdemanagement</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Sollten Sie Anlass zu einer Beschwerde haben, konnen Sie sich jederzeit an uns wenden:</p>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p><span className="font-semibold text-white">E-Mail:</span> info@spinone-asset.de</p>
                    <p><span className="font-semibold text-white">Telefon:</span> +49 (0) XX XXX XXXXXX</p>
                    <p><span className="font-semibold text-white">Schriftlich:</span> Spinone Capital GmbH, Pienzenauerstraße 95, 81925 München</p>
                  </div>
                  <p className="mt-4">Wir werden Ihre Beschwerde umgehend prufen und uns bemuhen, diese innerhalb angemessener Frist zu beantworten.</p>
                </div>
              </div>

              {/* Copyright */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-copyright-line text-[#6366F1]"></i>
                  <span>Urheberrecht und Nutzungsrechte</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Alle auf dieser Website veroffentlichten Inhalte (Texte, Bilder, Grafiken, Logos, etc.) sind urheberrechtlich geschutzt. Die Vervielfaltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedurfen der schriftlichen Zustimmung der Spinone Capital GmbH.</p>
                </div>
              </div>

              {/* Contact Box */}
              <div className="bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-lg text-white mb-3">Fragen zu rechtlichen Hinweisen?</h3>
                <p className="text-white/70 mb-4">Bei Fragen zu den rechtlichen Hinweisen oder fur weitere Informationen kontaktieren Sie uns bitte:</p>
                <div className="space-y-2 text-white/70">
                  <p><span className="font-semibold text-white">E-Mail:</span> info@spinone-asset.de</p>
                  <p><span className="font-semibold text-white">Telefon:</span> +49 (0) XX XXX XXXXXX</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
