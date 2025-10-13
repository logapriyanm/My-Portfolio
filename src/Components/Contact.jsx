import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaYoutube } from 'react-icons/fa';
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef(); 
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_h9nl995",
        "template_c0mgz0u",
        form.current,
        "8ezN_K_IPP9NEpqac"
      )
      .then(
        (result) => {
          setLoading(false);
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          setLoading(false);
          setStatusMessage("❌ Failed to send message. Try again later.");
          console.error(error.text);
          setTimeout(() => setStatusMessage(""), 5000);
        }
      );
  };

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-4 md:px-24 relative overflow-hidden" id="contact">
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

      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-4xl text-3xl font-bold text-center mb-4 md:font-extra font-poppins"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-200 max-w-xl mx-auto mb-10"
        >
          Ready to start your next project? Let's work together to create something amazing
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-200 mb-6">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!
            </p>

            <div className="space-y-4">
              {[
                { icon: FaEnvelope, label: "Email", value: "logapriyanvky@gmail.com" },
                { icon: FaPhoneAlt, label: "Phone", value: "+91 7904074107" },
                { icon: FaMapMarkerAlt, label: "Location", value: "Erode" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="bg-blue-600 p-3 rounded-full"
                  >
                    <item.icon className="text-white" />
                  </motion.div>
                  <div>
                    <p className="font-bold">{item.label}</p>
                    <p className="text-gray-200">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="font-bold mb-2 md:text-left text-center">Say Hello On</p>
              <div className="flex gap-4 md:justify-start justify-center">
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
            </div>
          </motion.div>

          {/* Right side: form */}
          <motion.form 
            ref={form} 
            onSubmit={sendEmail} 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1e293b] p-8 rounded-2xl space-y-4 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="first_name"
                placeholder="First Name"
                className="bg-transparent border border-gray-600 p-3 rounded-lg text-white focus:outline-blue-600 focus:outline-1 transition-all duration-300"
                required
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="bg-transparent border border-gray-600 p-3 rounded-lg text-white focus:outline-blue-600 focus:outline-1 transition-all duration-300"
                required
              />
            </div>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-transparent border border-gray-600 p-3 rounded-lg w-full text-white focus:outline-blue-600 focus:outline-1 transition-all duration-300"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-transparent border border-gray-600 p-3 rounded-lg w-full text-white focus:outline-blue-600 focus:outline-1 transition-all duration-300"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              rows="4"
              placeholder="Your Message"
              className="bg-transparent border border-gray-600 p-3 rounded-lg w-full text-white focus:outline-blue-600 focus:outline-1 transition-all duration-300 resize-none"
              required
            ></motion.textarea>
            
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              } text-white px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300 cursor-pointer w-full justify-center`}
            >
              {loading ? "Sending..." : "Send Message"} 
              <motion.span
                animate={loading ? { rotate: 360 } : {}}
                transition={loading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
              >
                <FaPaperPlane />
              </motion.span>
            </motion.button>
            
            {statusMessage && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm mt-2 ${
                  statusMessage.includes("") ? "text-green-400" : "text-red-400"
                }`}
              >
                {statusMessage}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;