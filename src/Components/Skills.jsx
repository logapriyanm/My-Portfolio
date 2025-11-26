// Skills.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SkillsData from "../Datas/SkillsData.jsx";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaGitAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiRedux, SiPostman, SiJsonwebtokens } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const MySkills = [
    { name: "HTML", label: "Structure", icon: <FaHtml5 /> },
    { name: "CSS", label: "User Interface", icon: <FaCss3Alt /> },
    { name: "TailwindCSS", label: "User Interface", icon: <SiTailwindcss /> },
    { name: "JavaScript", label: "Interaction", icon: <SiJavascript /> },
    { name: "React JS", label: "Js Library", icon: <FaReact /> },
    { name: "NodeJS", label: "Web Server", icon: <FaNodeJs /> },
    { name: "Express JS", label: "Server Framework", icon: <SiExpress /> },
    { name: "Mongo DB", label: "Database", icon: <DiMongodb /> },
    { name: "API Integration", label: "REST / JSON", icon: <SiPostman /> },
    { name: "JWT", label: "Auth / Tokens", icon: <SiJsonwebtokens /> },
    { name: "Git", label: "Version Control", icon: <FaGitAlt /> },
    { name: "Redux", label: "State Manage", icon: <SiRedux /> },
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.12 });
    const swiperRef = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    };

    const iconFloat = {
        hidden: { y: 0, scale: 1 },
        visible: { y: [0, -6, 0], transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } },
    };

    return (
        <section
            id="skills"
            ref={ref}
            className="min-h-screen bg-gradient-to-l from-primary to-secondary relative overflow-hidden"
        >
            {/* background dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(18)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/10 rounded-full"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                        animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                ))}
            </div>

            <div className="relative z-10 w-full mx-auto px-4 flex flex-col md:flex-row justify-center gap-6 items-center md:pt-30 py-10">
                {/* Left: Skills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="md:flex-1 w-full text-white text-3xl md:text-4xl font-bold font-poppins mb-4 md:m-4"
                >
                    <motion.h1 variants={itemVariants} className="text-center pt-5">
                        SKILLS
                    </motion.h1>

                    <div className="p-5">
                        {/* MOBILE: 2 columns; each card stacked (icon on top, text below).
                            Desktop (md+) returns to original (icon left, text right) */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {MySkills.map((skill, index) => (
                                <motion.button
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                    className={`
                                        flex flex-col md:flex-row      /* mobile: column (icon on top), md+: row (icon left) */
                                        items-center md:items-center
                                        gap-3
                                        p-4
                                        min-h-[72px]
                                        bg-[#334155]
                                        hover:bg-[#1f2937]
                                        rounded-xl
                                        transition-all
                                        border border-[#333]
                                        cursor-pointer
                                        text-center md:text-left
                                        w-full
                                    `}
                                    aria-label={`${skill.name} skill`}
                                >
                                    {/* icon container: centered on mobile (top) and left on md+ */}
                                    <motion.div
                                        variants={iconFloat}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        whileHover={{ scale: 1.15 }}
                                        className="w-12 h-12 flex items-center justify-center flex-shrink-0 mb-2 md:mb-0 md:mr-3"
                                        style={{ color: getColorForSkill(skill.name) }}
                                    >
                                        <span className="text-2xl md:text-2xl">{skill.icon}</span>
                                    </motion.div>

                                    <div className="flex-1 gap-2">
                                        <p className="font-medium text-base md:text-lg  text-white leading-tight">{skill.name}</p>
                                        <p className="text-xs md:text-sm font-normal text-gray-300">{skill.label}</p>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Certificates */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="w-full md:flex-1 text-white font-poppins pt-2 md:pt-6"
                >
                    <motion.h2
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-center pb-2 my-4"
                        whileInView={{ scale: 1.05 }}
                    >
                        CERTIFICATES
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.25 }}
                        className="w-full relative"
                    >
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={16}
                            navigation={true}
                            pagination={{ clickable: true, dynamicBullets: true }}
                            className="w-full max-w-2xl mx-auto custom-swiper"
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 8 },
                                640: { slidesPerView: 1, spaceBetween: 12 },
                                768: { slidesPerView: 1, spaceBetween: 14 },
                                1024: { slidesPerView: 1, spaceBetween: 16 },
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {SkillsData.map((d, idx) => (
                                <SwiperSlide key={idx}>
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        className="bg-[#334155] border md:h-auto h-100 border-gray-600 p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center hover:bg-[#1f2937] transition-all duration-300"
                                    >
                                        <motion.img
                                            src={d.image}
                                            alt={d.name}
                                            className="w-full max-w-[560px] h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[320px] object-cover rounded-lg mb-3 border border-white/10"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        />
                                        <p className="text-base sm:text-lg font-poppins mb-1 text-center">{d.name}</p>
                                        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300 text-center">
                                            {d.content}
                                        </p>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons - Outside Swiper */}
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <FaChevronLeft className="text-white text-lg" />
                        </button>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <FaChevronRight className="text-white text-lg" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Add CSS to hide default Swiper navigation */}
            <style jsx>{`
                .custom-swiper .swiper-button-next,
                .custom-swiper .swiper-button-prev {
                    display: none !important;
                }
            `}</style>
        </section>
    );
};

// helper to style icons with theme-ish colors (keeps your previous color idea)
function getColorForSkill(name) {
    switch (name.toLowerCase()) {
        case "html":
            return "#E44D26";
        case "css":
            return "#3b82f6";
        case "tailwindcss":
            return "#38bdf8";
        case "javascript":
            return "#facc15";
        case "react js":
        case "react":
            return "#06b6d4";
        case "nodejs":
            return "#16a34a";
        case "express js":
            return "#000000";
        case "mongo db":
            return "#4db33d";
        case "api integration":
            return "#FF6C37"; // postman-like orange
        case "jwt":
            return "#FF8C00"; // token/auth orange
        case "git":
            return "#ef4444";
        case "redux":
            return "#7c3aed";
        default:
            return "white";
    }
}

export default Skills;
