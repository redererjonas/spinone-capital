import { motion, AnimatePresence } from 'framer-motion';

interface CallUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallUsModal({ isOpen, onClose }: CallUsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-slate-200"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl text-slate-600"></i>
            </button>

            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-600/30">
                <i className="ri-phone-line text-4xl text-white"></i>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-bold text-slate-800 mb-3">
                Rufen Sie uns an
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-6">
                Unser Expertenteam steht Ihnen persönlich zur Verfügung. Wir beraten Sie gerne zu Ihrer nächsten Investition.
              </p>

              {/* Phone Number */}
              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-sm text-blue-600 mb-2 font-medium">Unsere Servicenummer</p>
                <a
                  href="tel:+4989588088170"
                  className="text-3xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  +49 (0)89 588088170
                </a>
                <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <i className="ri-time-line text-blue-500"></i>
                    <span>Mo-Fr: 9:00 - 18:00</span>
                  </div>
                </div>
              </div>

              {/* Additional Contact Options */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href="mailto:info@spinone-asset.com"
                  className="bg-slate-100 hover:bg-slate-200 rounded-xl p-4 transition-colors group"
                >
                  <i className="ri-mail-line text-2xl text-slate-500 group-hover:text-blue-500 transition-colors mb-2 block"></i>
                  <p className="text-sm font-medium text-slate-700">E-Mail</p>
                  <p className="text-xs text-slate-500">info@spinone-asset.com</p>
                </a>
                <a
                  href="https://wa.me/49XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-100 hover:bg-slate-200 rounded-xl p-4 transition-colors group"
                >
                  <i className="ri-whatsapp-line text-2xl text-slate-500 group-hover:text-green-500 transition-colors mb-2 block"></i>
                  <p className="text-sm font-medium text-slate-700">WhatsApp</p>
                  <p className="text-xs text-slate-500">Schreiben Sie uns</p>
                </a>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
