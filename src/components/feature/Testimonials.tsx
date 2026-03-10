'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "SPINONE CAPITAL hat unsere Erwartungen ubertroffen. Die professionelle Beratung und transparente Kommunikation schaffen Vertrauen. Unsere Kapitalanlagen sind in besten Handen.",
    author: "Dr. Michael Schneider",
    position: "CFO, TechVentures GmbH",
    rating: 5,
  },
  {
    quote: "Als institutioneller Anleger schatzen wir die regulatorische Konformitat und das exzellente Risikomanagement von SPINONE CAPITAL. Eine verlassliche Partnerschaft seit Jahren.",
    author: "Sandra Hoffmann",
    position: "Investment Director, Pension Fund AG",
    rating: 5,
  },
  {
    quote: "Die Kombination aus Flexibilitat und Sicherheit bei den Anlageprodukten ist beeindruckend. SPINONE CAPITAL versteht die Bedurfnisse qualifizierter Anleger perfekt.",
    author: "Thomas Weber",
    position: "Geschaftsfuhrer, Weber Capital Partners",
    rating: 5,
  },
  {
    quote: "Hervorragende Performance und transparente Berichterstattung. SPINONE CAPITAL setzt Massstabe im Vermogensmanagement. Absolute Empfehlung fur institutionelle Investoren.",
    author: "Julia Richter",
    position: "Head of Treasury, Global Industries SE",
    rating: 5,
  },
  {
    quote: "Die Expertise des Teams und die massgeschneiderten Anlagestrategien haben unsere Renditeerwartungen deutlich ubertroffen. SPINONE CAPITAL ist unser bevorzugter Partner fur komplexe Kapitalanlagen.",
    author: "Prof. Dr. Andreas Bauer",
    position: "Vorstandsvorsitzender, Innovation Capital AG",
    rating: 5,
  },
  {
    quote: "Seit uber 8 Jahren vertrauen wir SPINONE CAPITAL unsere Pensionsfonds an. Die Stabilitat, Sicherheit und kontinuierliche Wertentwicklung sprechen fur sich. Ein erstklassiger Partner.",
    author: "Martina Schroder",
    position: "Leiterin Finanzen, Deutsche Versorgungswerk eV",
    rating: 5,
  },
];

const accentColors = ['#6366F1', '#06B6D4', '#A855F7', '#EC4899'];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative bg-[#020617] py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6366F1] rounded-full blur-[250px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A855F7] rounded-full blur-[250px]"
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
          >
            <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm font-bold text-white/90 uppercase tracking-wider">Kundenstimmen</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Was unsere{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
              Kunden sagen
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Vertrauen durch Qualitat und Transparenz
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => {
            const accentColor = accentColors[index % accentColors.length];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-8'
                }`}
                style={{
                  boxShadow: `0 0 40px rgba(${accentColor === '#6366F1' ? '99, 102, 241' : accentColor === '#06B6D4' ? '6, 182, 212' : accentColor === '#A855F7' ? '168, 85, 247' : '236, 72, 153'}, 0.1)`,
                }}
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${accentColor}10, transparent)` }}
                />

                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}60)` }}
                />

                {/* Quote Icon */}
                <div className="relative mb-6">
                  <svg
                    className="w-12 h-12 opacity-30"
                    style={{ color: accentColor }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="relative text-lg text-white/80 italic leading-relaxed mb-6">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="relative flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}80)` }}
                    >
                      {testimonial.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-white/50">{testimonial.position}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        style={{ color: accentColor }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
