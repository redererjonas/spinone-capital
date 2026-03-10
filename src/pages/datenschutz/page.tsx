import { motion } from 'framer-motion';

export default function DatenschutzPage() {
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
              <i className="ri-shield-keyhole-line text-[#06B6D4]"></i>
              <span className="text-sm text-white/90 font-medium">Datenschutz</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Datenschutzerklarung
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60"
            >
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten
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
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-information-line text-[#6366F1]"></i>
                  <span>1. Datenschutz auf einen Blick</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <h3 className="font-semibold text-lg text-white">Allgemeine Hinweise</h3>
                  <p>Die folgenden Hinweise geben einen einfachen Uberblick daruber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie personlich identifiziert werden konnen. Ausfuhrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgefuhrten Datenschutzerklarung.</p>
                </div>
              </div>

              {/* Data Collection */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-database-2-line text-[#06B6D4]"></i>
                  <span>2. Datenerfassung auf dieser Website</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Wer ist verantwortlich fur die Datenerfassung auf dieser Website?</h3>
                    <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten konnen Sie dem Impressum dieser Website entnehmen.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Wie erfassen wir Ihre Daten?</h3>
                    <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                    <p className="mt-2">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Wofur nutzen wir Ihre Daten?</h3>
                    <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewahrleisten. Andere Daten konnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Welche Rechte haben Sie bezuglich Ihrer Daten?</h3>
                    <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft uber Herkunft, Empfanger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben ausserdem ein Recht, die Berichtigung oder Loschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, konnen Sie diese Einwilligung jederzeit fur die Zukunft widerrufen. Ausserdem haben Sie das Recht, unter bestimmten Umstanden die Einschrankung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zustandigen Aufsichtsbehorde zu.</p>
                  </div>
                </div>
              </div>

              {/* Hosting */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-server-line text-[#A855F7]"></i>
                  <span>3. Hosting</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                  <h3 className="font-semibold text-lg text-white">Externes Hosting</h3>
                  <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die uber eine Website generiert werden, handeln.</p>
                  <p className="mt-2">Das externe Hosting erfolgt zum Zwecke der Vertragserfullung gegenuber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p>
                </div>
              </div>

              {/* General Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-file-shield-2-line text-[#6366F1]"></i>
                  <span>4. Allgemeine Hinweise und Pflichtinformationen</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Datenschutz</h3>
                    <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer personlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklarung.</p>
                    <p className="mt-2">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie personlich identifiziert werden konnen. Die vorliegende Datenschutzerklarung erlautert, welche Daten wir erheben und wofur wir sie nutzen. Sie erlautert auch, wie und zu welchem Zweck das geschieht.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Hinweis zur verantwortlichen Stelle</h3>
                    <p>Die verantwortliche Stelle fur die Datenverarbeitung auf dieser Website ist:</p>
                    <div className="mt-2 p-4 bg-white/5 rounded-xl border border-white/10">
                      <p>Spinone Capital GmbH</p>
                      <p>Pienzenauerstraße 95</p>
                      <p>81925 München</p>
                      <p>Deutschland</p>
                      <p className="mt-2">Telefon: +49 (0) XX XXX XXXXXX</p>
                      <p>E-Mail: info@spinone-asset.de</p>
                    </div>
                    <p className="mt-2">Verantwortliche Stelle ist die naturliche oder juristische Person, die allein oder gemeinsam mit anderen uber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. A.) entscheidet.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Speicherdauer</h3>
                    <p>Soweit innerhalb dieser Datenschutzerklarung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck fur die Datenverarbeitung entfallt. Wenn Sie ein berechtigtes Loschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten geloscht, sofern wir keine anderen rechtlich zulassigen Grunde fur die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Loschung nach Fortfall dieser Grunde.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p>Viele Datenverarbeitungsvorgange sind nur mit Ihrer ausdrucklichen Einwilligung moglich. Sie konnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmassigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberuhrt.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Beschwerderecht bei der zustandigen Aufsichtsbehorde</h3>
                    <p>Im Falle von Verstossen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehorde, insbesondere in dem Mitgliedstaat ihres gewohnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmasslichen Verstosses zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                  </div>
                </div>
              </div>

              {/* Data Collection on Website */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-cookies-line text-[#06B6D4]"></i>
                  <span>5. Datenerfassung auf dieser Website</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Cookies</h3>
                    <p>Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerat keinen Schaden an. Sie werden entweder vorubergehend fur die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerat gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch geloscht. Permanente Cookies bleiben auf Ihrem Endgerat gespeichert, bis Sie diese selbst loschen oder eine automatische Loschung durch Ihren Webbrowser erfolgt.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Kontaktformular</h3>
                    <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und fur den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                    <p className="mt-2">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfullung eines Vertrags zusammenhangt oder zur Durchfuhrung vorvertraglicher Massnahmen erforderlich ist. In allen ubrigen Fallen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
                    <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                  </div>
                </div>
              </div>

              {/* SSL/TLS */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <i className="ri-lock-line text-[#A855F7]"></i>
                  <span>6. SSL- bzw. TLS-Verschlusselung</span>
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Diese Seite nutzt aus Sicherheitsgrunden und zum Schutz der Ubertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlusselung. Eine verschlusselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                  <p className="mt-2">Wenn die SSL- bzw. TLS-Verschlusselung aktiviert ist, konnen die Daten, die Sie an uns ubermitteln, nicht von Dritten mitgelesen werden.</p>
                </div>
              </div>

              {/* Contact Box */}
              <div className="bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-lg text-white mb-3">Fragen zum Datenschutz?</h3>
                <p className="text-white/70 mb-4">Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskunften, Berichtigung, Sperrung oder Loschung von Daten wenden Sie sich bitte an:</p>
                <p className="text-white/70">
                  <span className="font-semibold text-white">E-Mail:</span> info@spinone-asset.de<br />
                  <span className="font-semibold text-white">Telefon:</span> +49 (0) XX XXX XXXXXX
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
