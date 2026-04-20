import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const LegalModal = ({ isOpen, onClose, title, content }: LegalModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h2 className="text-xl font-bold tracking-widest text-[#D32F2F] uppercase">
                {title}
              </h2>
              <button 
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar font-light text-white/70 text-sm leading-relaxed space-y-6">
              {content}
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
