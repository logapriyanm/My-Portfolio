import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SkillsData from "../Datas/SkillsData.jsx";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const MySkills = [
    { name: "HTML", label: "Structure", icon: <FaHtml5 className="text-[#E44D26]" /> },
    { name: "CSS", label: "User Interface", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "TailwindCSS", label: "User Interface", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "JavaScript", label: "Interaction", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React JS", label: "Framework", icon: <FaReact className="text-cyan-400 " /> },
    { name: "NodeJS", label: "Web Server", icon: <FaNodeJs className="text-green-500  " /> },
    { name: "Express JS", label: "Server Framework", icon: <SiExpress size={40} className="text-white bg-black rounded-full p-2" /> },
    { name: "Mongo DB", label: " Database", icon: <DiMongodb className="text-[#4db33d] " /> },
]

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
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
            id='skills' 
            ref={ref}
            className="min-h-screen bg-gradient-to-r from-primary to-secondary relative overflow-hidden"
        >
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

            <div className="relative z-10 md:flex md:flex-row pb-5 sm:flex sm:flex-col items-center min-h-screen">
                {/* Skills Left side */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="md:w-1/2 text-white text-3xl md:text-4xl font-bold md:font-extra font-poppins mb-4 md:m-4"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-center pt-5"
                    >
                        SKILLS
                    </motion.h1>
                    <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {MySkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        scale: 1.05,
                                        y: -5,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                                    }}
                                    className="flex items-center gap-4 p-4 bg-[#334155] hover:bg-[#1f2937] rounded-xl transition-all border border-[#333] cursor-pointer"
                                >
                                    <motion.div 
                                        className="md:text-3xl"
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <div>
                                        <p className="md:font-semibold font-poppins font-medium text-lg">{skill.name}</p>
                                        <p className="text-base text-gray-400 md:font-extra font-poppins font-medium">{skill.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Certificates Right side */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="md:w-1/2 text-white text-3xl md:text-4xl font-bold md:font-extra font-poppins pt-2 md:m-4"
                >
                    <motion.h1 
                        className="text-center m-5"
                        whileInView={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        CERTIFICATES
                    </motion.h1>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={1}
                            slidesPerView={1}
                            navigation
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true 
                            }}
                            className="md:w-[400px] md:h-[350px] md:px-6 w-[280px] h-[350px] mx-auto"
                        >
                            {SkillsData.map((d, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div 
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-[#334155] border border-gray-600 md:w-[400px] p-4 rounded-xl h-full flex flex-col items-center hover:bg-[#1f2937] transition-all duration-300"
                                    >
                                        <motion.img 
                                            src={d.image} 
                                            alt={d.name} 
                                            className="w-[300px] h-48 object-fill rounded-lg mb-3 border border-white"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        />
                                        <p className="text-base font-poppins mb-1 text-center">{d.name}</p>
                                        <p className="text-sm md:text-base md:font-extra font-poppins font-medium text-gray-300 text-center">{d.content}</p>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills;