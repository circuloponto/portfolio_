import { useScramble } from 'use-scramble';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
const Home = () => {
  const { ref, replay } = useScramble({
    text: 'Frontend Developer',
    range: [65, 125],
    speed: 0.7,
    tick: 1,
    step: 1,
    scramble: 15,
    seed: 0,
    chance: 1,
    overdrive: false,
    overflow: true,
  });

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 400;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  const listVariants = {
    initial: {
      x: -15,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: 'linear',
      },
    },
  };
  return (
    <section id="home" className="home">
      {width < breakpoint ? (
        <motion.div className="progress-bar" style={{ scaleX }} />
      ) : (
        <div className="home"></div>
      )}
      <div className="homeInfo">
        <motion.div className="title">
          <span></span>
          <div
            onMouseOver={replay}
            onFocus={replay}
            ref={ref}
            className="textScramble"
          >
            Frontend Developer
          </div>
        </motion.div>
        <motion.div
          className="presentation"
          initial={{ x: -150, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: 'tween' }}
        >
          Hi, my name is <span>Nuno Cortez</span>
        </motion.div>
        <motion.div
          className="introduction"
          initial={{ x: 250, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2, type: 'tween' }}
        >
          I&apos;m a sound designer turned web developer, currently looking for
          a first opportunity at a frontend position.
        </motion.div>
        <motion.a
          href="#contact"
          className="button-52"
          initial={{ x: 150, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6, type: 'tween' }}
        >
          Contact Me
        </motion.a>
      </div>
      <motion.div
        className="picture"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 2, type: 'tween' }}
      >
        <div className="innerPicture">
          {/* <div className="border"></div> */}
          <div className="photo"></div>
          <div className="photoGlitch"></div>
          <div className="points">
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
