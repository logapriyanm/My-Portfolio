import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section id="home" className="w-full mx-auto px-4 flex flex-col min-h-screen items-center justify-center md:bg-gradient-to-b md:from-primary md:to-secondary bg-gradient-to-l from-primary to-secondary relative overflow-hidden">
      {/* Background Animation - Same as Footer */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
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

      {/* Additional Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white text-sm sm:text-base mb-2 md:self-center md:mr-70 z-10"
      >
        HEY , I AM
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="headName z-10 mb-4"
      >
        LOGAPRIYAN
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="z-10"
      >
        <TypeAnimation
          sequence={[
            'A MERN STACK DEVELOPER',

            2000,
            'A FULL STACK DEVELOPER',
            2000,

            2000,
            'A JUNIOR WEB DEVELOPER',
            2000,
          ]}
          wrapper="h3"
          speed={50}
          repeat={Infinity}
          className="font-primary text-white text-xl md:text-2xl font-medium text-center"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home