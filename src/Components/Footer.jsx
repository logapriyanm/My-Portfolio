// Components/FooterMinimal.jsx
import { motion } from 'framer-motion';

const FooterMinimal = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-primary to-secondary border-t border-white/10 py-4 relative overflow-hidden"
    >
      {/* Background Animation - Same as About page */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-2">
          {/* Main copyright text with gradient */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-1 text-sm text-white/80"
          >
            <span>© {currentYear} All Rights Reserved</span>
            
            <motion.span
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
              className="text-blue-400 font-bold mx-1"
            >
              @
            </motion.span>
            
            <motion.span
              whileHover={{
                background: "linear-gradient(45deg, #60A5FA, #3B82F6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              className="font-semibold text-white transition-all duration-300"
            >
              Logapriyan
            </motion.span>
          </motion.div>

          {/* Subtle decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-2"
          />

          
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterMinimal;