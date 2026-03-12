import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  color: string;
  glowColor: string;
}

const stats: Stat[] = [
  {
    value: 180,
    suffix: ' Mio. EUR',
    label: 'Verwaltetes Volumen',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#2563EB',
    glowColor: '37, 99, 235'
  },
  {
    value: 15,
    suffix: '+',
    label: 'Jahre Erfahrung',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: '#0EA5E9',
    glowColor: '14, 165, 233'
  },
  {
    value: 120,
    suffix: '+',
    label: 'Institutionelle Kunden',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    color: '#3B82F6',
    glowColor: '59, 130, 246'
  },
  {
    value: 8,
    suffix: '',
    label: 'Internationale Märkte',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#0EA5E9',
    glowColor: '14, 165, 233'
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-slate-50 bg-filigree py-24 px-6 lg:px-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-96 h-96 bg-primary-300 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent-cyan rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-200 rounded-full blur-[200px]"
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Card Background */}
              <div
                className="absolute inset-0 bg-white rounded-3xl border border-slate-200 group-hover:border-primary-300 transition-all duration-500 shadow-card group-hover:shadow-card-hover"
              />

              {/* Gradient Glow Effect on Hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                style={{ background: `linear-gradient(135deg, ${stat.color}10, transparent)` }}
              />

              {/* Content */}
              <div className="relative p-8 text-center">
                {/* Icon with Gradient Background */}
                <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-15 group-hover:opacity-25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${stat.color}40, ${stat.color}10)` }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-15 group-hover:opacity-25 transition-all duration-500"
                    style={{ background: `linear-gradient(135deg, ${stat.color}50, ${stat.color}20)` }}
                  />
                  <svg
                    className="w-10 h-10 relative z-10 group-hover:scale-110 transition-transform duration-500"
                    style={{ color: stat.color }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>

                {/* Number with CountUp */}
                <div className="mb-3">
                  <div
                    className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 inline-block"
                    style={{ backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stat.color}90)` }}
                  >
                    {isVisible ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                        separator="."
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                </div>

                {/* Label */}
                <p className="text-slate-600 text-base font-semibold leading-tight group-hover:text-slate-800 transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 mx-auto w-16 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-primary-300 transition-all duration-500 rounded-full" />
              </div>

              {/* Corner Accents */}
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-30 group-hover:opacity-70 group-hover:scale-150 transition-all duration-500"
                style={{ background: stat.color, boxShadow: `0 0 10px ${stat.color}` }}
              />
              <div
                className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-30 group-hover:opacity-70 group-hover:scale-150 transition-all duration-500"
                style={{ background: stat.color, boxShadow: `0 0 10px ${stat.color}` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
