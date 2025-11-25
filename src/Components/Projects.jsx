import { useState, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProjectsData from "../Datas/ProjectsData";
import { motion } from 'framer-motion';

// ------------------- PROJECT CARD -------------------
const ProjectCard = ({ title, description, image, tags, demoLink, codeLink }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-[#334155] hover:bg-[#1f2937] rounded-xl overflow-hidden shadow-md p-4 flex flex-col h-[580px] md:h-[500px] lg:h-[520px] transition-all duration-300"
  >
    <div className="relative w-full group">
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        src={image} 
        alt={title} 
        className="rounded-lg w-full object-cover md:h-[200px]" 
      />
      <div className="absolute inset-0 bg-blue-400 hover:rounded flex justify-center items-center gap-4 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="bg-white text-black p-3 cursor-pointer rounded-full shadow"
            >
              <FaExternalLinkAlt />
            </motion.button>
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="bg-white text-black p-3 cursor-pointer rounded-full shadow"
            >
              <FaGithub />
            </motion.button>
          </a>
        )}
      </div>
    </div>
    <h3 className="text-white text-lg text-center font-poppins font-semibold mt-4">{title}</h3>
    <p className="text-gray-300 mt-4 flex-1 text-center">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2 justify-center">
      {tags.map((tag, i) => (
        <motion.span 
          key={i}
          whileHover={{ scale: 1.1 }}
          className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const swiperRef = useRef(null);

  const slideOnce = (direction) => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    direction === "left" ? swiper.slidePrev() : swiper.slideNext();
  };

  const filteredProjects =
    selectedCategory === "all"
      ? ProjectsData
      : ProjectsData.filter((project) => project.category === selectedCategory);

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-r from-primary to-secondary md:p-10 py-10 flex flex-col items-center relative overflow-hidden">
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

      <div className="relative z-10 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-4xl text-3xl font-bold text-white text-center mb-4"
        >
          Projects
        </motion.h1>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:flex justify-center gap-4 mb-10 text-white font-medium"
        >
          {["all", "fullstack", "frontend"].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-md cursor-pointer transition-all duration-200 ${
                selectedCategory === cat 
                  ? "bg-blue-500 text-white shadow-lg " 
                  : "hover:text-blue-300 hover:bg-white/10"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Display */}
        <div className="relative container mx-auto px-4 overflow-hidden">
          {filteredProjects.length > 1 ? (
            <>
              {/* Left Hover Zone */}
              <div
                onClick={() => slideOnce("left")}
                className="absolute left-0 top-0 h-full w-[50px] z-10 cursor-w-resize"
              />

              {/* Swiper */}
              <Swiper
                modules={[Navigation]}
                navigation
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                {filteredProjects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-full flex justify-center p-2">
                      <ProjectCard {...project} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Right Hover Zone */}
              <div
                onClick={() => slideOnce("right")}
                className="absolute right-0 top-0 h-full w-[50px] z-10 cursor-pointer"
              />
            </>
          ) : filteredProjects.length === 1 ? (
            <div className="flex justify-center">
              <div className="max-w-[400px] w-full">
                <ProjectCard {...filteredProjects[0]} />
              </div>
            </div>
          ) : (
            <p className="text-white text-lg text-center">No projects found in this category.</p>
          )}
        </div>

        {/* View All Projects Button - Centered and Improved */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center items-center mt-12 mb-8"
        >
          <a href="https://github.com/logapriyanm?tab=repositories" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 border-2 border-blue-500 rounded-xl cursor-pointer text-white font-semibold text-lg transition-all duration-300"
            >
              <FaGithub className="text-base" />
              View All Projects on GitHub
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;