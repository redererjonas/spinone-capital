import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-blue-100/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-sky-100/40 to-primary-100/40 rounded-full blur-3xl"
        />
      </div>

      {/* Large 404 Background Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute text-[15rem] md:text-[20rem] font-black text-slate-100 select-none pointer-events-none z-0"
      >
        404
      </motion.h1>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center shadow-xl shadow-primary-500/20">
            <i className="ri-file-unknow-line text-5xl text-white"></i>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
        >
          Seite nicht gefunden
        </motion.h2>

        {/* Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-slate-500 mb-2">Die angeforderte Seite existiert nicht:</p>
          <code className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-primary-600 font-mono text-sm">
            {location.pathname}
          </code>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-500 text-lg mb-8 max-w-md mx-auto"
        >
          Die Seite, die Sie suchen, wurde möglicherweise entfernt, umbenannt oder ist vorübergehend nicht verfügbar.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            <i className="ri-home-line text-xl"></i>
            <span>Zur Startseite</span>
          </Link>

          <Link
            to="/kontakt"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300"
          >
            <i className="ri-customer-service-2-line text-xl"></i>
            <span>Kontakt</span>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <p className="text-slate-400 text-sm mb-4">Vielleicht interessieren Sie sich für:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Leistungen', path: '/leistungen' },
              { label: 'Über uns', path: '/about' },
              { label: 'Blog', path: '/blog' },
              { label: 'Märkte', path: '/maerkte' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-sm hover:bg-slate-100 hover:text-slate-900 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
