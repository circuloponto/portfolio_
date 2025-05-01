import React, { useState, useRef, useEffect } from 'react';
import styles from './ImageSlider.module.css';
import { motion } from 'framer-motion';

// Project data with actual images and technology badges
const slides = [
  {
    id: 1,
    title: 'Lambda Blog',
    description: 'A blog about functional programming in Javascript',
    image: '/src/image/lambdaBlog.png',
    technologies: ['Next.js', 'Supabase', 'Tailwind'],
    link: 'https://lambda-blog-q7mz.vercel.app/'
  },
  {
    id: 2,
    title: 'Next Notes',
    description: 'A note-taking application built with Next.js',
    image: '/src/image/nextNotes.png',
    technologies: ['Next.js', 'Supabase', 'Tailwind', 'Framer Motion'],
    link: 'https://nextnotes-three.vercel.app/'
  },
  {
    id: 3,
    title: 'Patreon Clone',
    description: 'A clone of the Patreon platform with key features',
    image: '/src/image/patreonClone.png',
    technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: 'https://patreon-clone-erga.vercel.app/'
  },
  {
    id: 4,
    title: 'Split Split',
    description: 'An expense splitting application for groups',
    image: '/src/image/splitSplit.png',
    technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: 'https://split-split.vercel.app/'
  }
];

const ImageSlider = () => {
  // Create a circular array for infinite scrolling
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  
  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 (first real slide)
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(-100); // Start at -100% (first real slide)
  const [prevTranslate, setPrevTranslate] = useState(-100);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const sliderRef = useRef(null);

  // Handle transition end for infinite scrolling
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      
      // If we're at a clone slide, jump to the real slide without animation
      if (currentIndex === 0) {
        // At the first clone (which is a copy of the last slide)
        // Jump to the real last slide
        setCurrentIndex(slides.length);
        setCurrentTranslate(-slides.length * 100);
        setPrevTranslate(-slides.length * 100);
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          sliderRef.current.style.transform = `translateX(${-slides.length * 100}%)`;
        }
      } else if (currentIndex === extendedSlides.length - 1) {
        // At the last clone (which is a copy of the first slide)
        // Jump to the real first slide
        setCurrentIndex(1);
        setCurrentTranslate(-100);
        setPrevTranslate(-100);
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          sliderRef.current.style.transform = `translateX(-100%)`;
        }
      }
    };
    
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        slider.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [currentIndex, extendedSlides.length]);

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.3s ease';
    }
    
    setCurrentIndex(prev => prev + 1);
    setCurrentTranslate(-(currentIndex + 1) * 100);
    setPrevTranslate(-(currentIndex + 1) * 100);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.3s ease';
    }
    
    setCurrentIndex(prev => prev - 1);
    setCurrentTranslate(-(currentIndex - 1) * 100);
    setPrevTranslate(-(currentIndex - 1) * 100);
  };

  const goToSlide = (slideIndex) => {
    if (isTransitioning) return;
    
    // Convert to extended slide index (add 1 because of the clone at the beginning)
    const targetIndex = slideIndex + 1;
    
    setIsTransitioning(true);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.3s ease';
    }
    
    setCurrentIndex(targetIndex);
    setCurrentTranslate(-targetIndex * 100);
    setPrevTranslate(-targetIndex * 100);
  };

  // Drag functionality
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.type === 'mousedown' ? e.clientX : e.touches[0].clientX);
    
    // Disable transition during drag for smoother movement
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const currentPosition = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const diff = currentPosition - startPos;
    
    // Calculate how far to translate based on drag distance
    const sliderWidth = sliderRef.current ? sliderRef.current.offsetWidth : 1;
    const dragPercentage = (diff / sliderWidth) * 100;
    
    // Update current translate value
    const translate = prevTranslate + dragPercentage;
    setCurrentTranslate(translate);
    
    // Apply the transform
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${translate}%)`;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Re-enable transition for snap effect
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.3s ease';
    }
    
    // Determine which slide to snap to based on drag distance
    // Reduced threshold to 10% of slide width for easier transitions
    const draggedPercentage = currentTranslate - prevTranslate;
    
    if (draggedPercentage > 10) {
      // Dragged right (previous slide)
      goToPrevious();
    } else if (draggedPercentage < -10) {
      // Dragged left (next slide)
      goToNext();
    } else {
      // Not enough movement, snap back to current slide
      setCurrentTranslate(prevTranslate);
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(${prevTranslate}%)`;
      }
    }
  };

  // Add mouse event listeners
  useEffect(() => {
    const handleMouseMove = (e) => handleDragMove(e);
    const handleMouseUp = () => handleDragEnd();
    const handleTouchMove = (e) => handleDragMove(e);
    const handleTouchEnd = () => handleDragEnd();
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, currentTranslate, prevTranslate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isTransitioning]);

  // Get the real slide index (accounting for clones)
  const getRealIndex = (index) => {
    if (index === 0) return slides.length - 1;
    if (index === extendedSlides.length - 1) return 0;
    return index - 1;
  };

  return (
    <section className={styles.sliderSection} id="projects">
      {/* Updated Title with Animation */}
      <motion.div
        className={styles.projectsTitleContainer} 
        initial={{ x: -200 }}
        transition={{ duration: 0.5 }}
        whileInView={{ x: 0 }}
      >
        <div className={styles.projectsTitleText}>PROJECTS</div> 
      </motion.div>
      
      <div className={styles.sliderContainer}>
        <button className={styles.leftArrow} onClick={goToPrevious}>&#10094;</button>
        <button className={styles.rightArrow} onClick={goToNext}>&#10095;</button>
        
        <div 
          className={styles.slider}
          ref={sliderRef}
          style={{ transform: `translateX(${currentTranslate}%)` }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          {extendedSlides.map((project, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.redSquare}>
                <div 
                  className={styles.imageArea}
                  onMouseDown={handleDragStart}
                  onTouchStart={handleDragStart}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage}
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                    draggable="false"
                  />
                </div>
                <div 
                  className={styles.textArea}
                  onMouseDown={handleDragStart}
                  onTouchStart={handleDragStart}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.badgesContainer}>
                    {project.technologies && project.technologies.map((tech, techIndex) => (
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Super simple dots navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '20px 0',
          width: '100%'
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: getRealIndex(currentIndex) === index ? '#ea3c3c' : '#ccc',
                margin: '0 10px',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
