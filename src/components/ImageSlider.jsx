import React from 'react';
import styles from './ImageSlider.module.css';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import lambdaBlog from '../image/lambdaBlog.png';
import nextNotes from '../image/nextNotes.png';
import patreonClone from '../image/patreonClone.png';
import splitSplit from '../image/splitSplit.png';

// Project data with actual images and technology badges
const slides = [
  {
    id: 1,
    title: 'Lambda Blog',
    description: 'A blog about functional programming in Javascript',
    image: lambdaBlog,
    technologies: ['Next.js', 'Supabase', 'Tailwind'],
    link: 'https://lambdablog.vercel.app/'
  },
  {
    id: 2,
    title: 'Next Notes',
    description: 'A note-taking application built with Next.js',
    image: nextNotes,
    technologies: ['Next.js', 'Supabase', 'Tailwind', 'Framer Motion'],
    link: 'https://nextnotes-three.vercel.app/'
  },
  {
    id: 3,
    title: 'Patreon Clone',
    description: 'A clone of the Patreon platform with key features',
    image: patreonClone,
    technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: 'https://patreon-clone-erga.vercel.app/'
  },
  {
    id: 4,
    title: 'Split Split',
    description: 'An expense splitting application for groups',
    image: splitSplit,
    technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: 'https://split-split.vercel.app/'
  }
];

const ImageSlider = () => {
  return (
    <section className={styles.sliderSection} id="projects">
      <motion.div
        className={styles.projectsTitleContainer} 
        initial={{ x: -200 }}
        transition={{ duration: 0.5 }}
        whileInView={{ x: 0 }}
      >
        <div className={styles.projectsTitleText}>PROJECTS</div> 
      </motion.div>
      
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={500}
          touchRatio={1.5}
          touchAngle={45}
          resistanceRatio={0.85}
          preventInteractionOnTransition={true}
          watchSlidesProgress={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((project) => (
            <SwiperSlide key={project.id}>
              <div className={styles.redSquare}>
                <div className={styles.imageArea}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage}
                    draggable="false"
                    onError={(e) => {
                      console.error(`Failed to load image: ${project.image}`);
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                    }}
                  />
                </div>
                <div className={styles.textArea}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.badgesContainer}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.badge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.projectLink}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSlider;
