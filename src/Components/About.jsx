import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MdFileDownload } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Resume from '/Logapriyan.Resume.pdf';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id='about' 
      ref={ref}
      className="flex flex-col w-full py-10 px-4 min-h-screen justify-between 
      md:bg-[repeating-conic-gradient(#87ACCA_0deg_0deg,_#1E293B_120deg_0deg)] 
      bg-gradient-to-r from-primary to-secondary relative overflow-hidden"
    >
      {/* Background Animation */}
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

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex justify-center flex-col md:flex-row items-center md:items-start w-full relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 mx-10 md:m-15 flex flex-col items-center text-center md:text-left px-4"
        >
          <motion.h1 
            variants={itemVariants}
            className='text-3xl md:text-4xl font-bold md:font-extra font-poppins self-start text-white mb-4 text-left'
          >
            ABOUT ME
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className='text-sm md:text-base md:font-poppins text-white mb-6 leading-6 text-left'
          >
            <span className='text-blue-800 font-bold'>MERN Stack Developer</span> with hands-on experience in building responsive, user-friendly 
            web applications using HTML, CSS, JavaScript, Tailwind CSS, React.js, Node.js, Express.js, and MongoDB.
            Strong understanding of modern web development principles, RESTful APIs, and UI/UX best practices.
            Passionate about continuous learning and staying updated with evolving full-stack technologies.
            Seeking an opportunity to contribute to impactful projects and grow as a developer in a collaborative environment.
          </motion.p>

          <motion.a 
            variants={itemVariants}
            href={Resume} 
            download={Resume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button 
              className='flex items-center px-4 py-2 mb-5 bg-blue-600 text-white rounded-lg hover:bg-blue-800  transition-all duration-300 cursor-pointer'
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" 
              }}
            >
              RESUME
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <MdFileDownload className='ml-2 h-5 w-5' />
              </motion.span>
            </motion.button>
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 flex justify-center md:m-10 md:justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <motion.img 
              src={'/portfolio.png'} 
              alt="profile" 
              className='w-80 h-80 md:w-80 md:h-80 rounded-full border-4 border-white p-2 object-cover'
              whileHover={{ 
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" 
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity }
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Social links */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-5 md:mb-10 text-center relative z-10"
      >
        <motion.h1 
          className="text-white text-xl md:font-extra font-poppins mb-2"
          whileInView={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Check Out My
        </motion.h1>
        <motion.hr 
          className='w-45 mx-auto border-white mb-4'
          initial={{ width: 0 }}
          animate={isInView ? { width: "180px" } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        />

        <div className="flex justify-center items-center flex-wrap gap-4">
          {[
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/logapriyan-m/", color: "text-linkedin" },
            { Icon: FaGithub, href: "https://github.com/logapriyanm", color: "text-black" },
            { Icon: FaInstagram, href: "https://www.instagram.com/distres_x.heart_/", color: "text-instagram" },
            { Icon: FaYoutube, href: "https://www.youtube.com/@INFO_LOKI_TAMIL", color: "text-youtube" }
          ].map((social, index) => (
            <motion.button
              key={index}
              className={`link-btn ${social.color} bg-white hover:bg-transparent`}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                backgroundColor: "transparent"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.Icon size={20} />
              </a>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About