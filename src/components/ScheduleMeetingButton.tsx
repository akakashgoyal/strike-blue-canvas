import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const ScheduleMeetingButton = () => {
  return (
    <motion.a
      href="https://calendly.com/akash-digitace/30min"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-primary/40 transition-all group"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Calendar size={24} />
      </motion.div>
      <span className="hidden sm:inline">Schedule a Meeting</span>
      <span className="sm:hidden">Book Call</span>
      
      {/* Pulse ring effect */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-primary/30 -z-10"
      />
    </motion.a>
  );
};

export default ScheduleMeetingButton;
