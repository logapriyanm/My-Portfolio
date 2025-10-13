import { useState, useEffect } from 'react';
import { 
    RiMenuFoldFill, 
    RiCloseLine,
    RiHomeLine,
    RiUserLine,
    RiCodeSSlashLine,
    RiProjectorLine,
    RiContactsLine,
    RiGithubFill,
    RiLinkedinFill,
    RiInstagramFill,
    RiYoutubeFill
} from "react-icons/ri";
import Profile1 from '/portfolio.png'
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setToggleMenu(false);
        }
    };

    const navItems = [
        { 
            name: "Home", 
            id: "home", 
            icon: <RiHomeLine className="text-xl" /> 
        },
        { 
            name: "About", 
            id: "about", 
            icon: <RiUserLine className="text-xl" /> 
        },
        { 
            name: "Skills", 
            id: "skills", 
            icon: <RiCodeSSlashLine className="text-xl" /> 
        },
        { 
            name: "Projects", 
            id: "projects", 
            icon: <RiProjectorLine className="text-xl" /> 
        },
        { 
            name: "Contact", 
            id: "contact", 
            icon: <RiContactsLine className="text-xl" /> 
        }
    ];

    const socialLinks = [
        { icon: <RiLinkedinFill />, href: "https://www.linkedin.com/in/logapriyan-m/", color: "text-blue-400" },
        { icon: <RiGithubFill />, href: "https://github.com/logapriyanm", color: "text-gray-300" },
        { icon: <RiInstagramFill />, href: "https://www.instagram.com/distres_x.heart_/", color: "text-pink-400" },
        { icon: <RiYoutubeFill />, href: "https://www.youtube.com/@INFO_LOKI_TAMIL", color: "text-red-400" }
    ];

    const menuVariants = {
        open: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        closed: {
            scale: 0.9,
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                delay: 0.1
            }
        }
    };

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
            }
        },
        closed: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
            }
        }
    };

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`flex justify-between items-center py-2 px-4 fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/20' 
                    : 'bg-transparent'
            }`}
        >
            {/* Background Animation for Navbar */}
            {scrolled && (
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/5 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Animated Logo */}
            <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="relative z-10"
            >
                <motion.img 
                    src={Profile1} 
                    alt="Logo" 
                    className="h-10 w-10 rounded-full border-2 border-white cursor-pointer object-cover"
                    onClick={() => scrollToSection('home')}
                    whileHover={{ 
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" 
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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block relative z-10">
                <ul className="flex gap-4 items-center">
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={item.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button 
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 relative ${
                                    activeSection === item.id
                                        ? 'bg-blue-500 text-white '
                                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                                }`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {item.icon}
                                </motion.div>
                                <span className="font-medium text-xs">{item.name}</span>
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-blue-500 rounded-lg -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button 
                onClick={() => setToggleMenu(!toggleMenu)} 
                className="block md:hidden z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="relative w-6 h-6">
                    <AnimatePresence mode="wait">
                        {toggleMenu ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <RiCloseLine className="text-white text-xl" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <RiMenuFoldFill className="text-white text-xl" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.button>

            {/* Full Screen Mobile Navigation */}
            <AnimatePresence>
                {toggleMenu && (
                    <motion.nav 
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-2xl md:hidden z-40 p-4 flex flex-col relative overflow-hidden"
                    >
                        {/* Mobile Menu Background Animation */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0, 0.6, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 4 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Close Button - Smaller */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            onClick={() => setToggleMenu(false)}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <RiCloseLine className="text-white text-lg" />
                        </motion.button>

                        {/* Profile Section - Smaller */}
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center gap-3 mt-8 mb-6"
                        >
                            <motion.img 
                                src={Profile1} 
                                alt="Profile" 
                                className="h-16 w-16 rounded-full border-2 border-blue-400 object-cover"
                                whileHover={{ scale: 1.05 }}
                            />
                            <div className="text-center">
                                <h3 className="text-white font-bold text-lg">Logapriyan</h3>
                                <p className="text-blue-300 text-sm">MERN Stack Developer</p>
                            </div>
                        </motion.div>

                        {/* Navigation Items - Reduced Padding/Margin */}
                        <div className="flex flex-col gap-2 w-full px-2 mb-6 relative z-10">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    whileHover={{ scale: 1.02, y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`flex items-center gap-4 p-3 rounded-xl text-left transition-all duration-300 border ${
                                        activeSection === item.id
                                            ? 'bg-blue-500/20 text-white shadow-lg shadow-blue-500/30 border-blue-400'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-white border-white/5 hover:border-white/10'
                                    }`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className={`p-2 rounded-lg ${
                                            activeSection === item.id ? 'bg-blue-500' : 'bg-white/10'
                                        }`}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <span className="text-base font-medium flex-1">{item.name}</span>
                                    {activeSection === item.id && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-2 h-2 bg-blue-400 rounded-full"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Social Links - Smaller */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col items-center gap-3 mt-auto mb-4"
                        >
                            <p className="text-gray-400 text-sm font-medium">Connect with me</p>
                            <div className="flex justify-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 + 0.9 }}
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-lg ${social.color}`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Navbar;