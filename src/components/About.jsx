import { motion } from 'framer-motion';
const About = () => {
  return (
    <section id="about" className="about">
      <div className="overlay"></div>
      {/* <div className="outlineDots"></div> */}
      <motion.div
        className="aboutTitle"
        initial={{ x: -200 }}
        /* animate={{ x: 0, translateY: 0 }} */
        transition={{ duration: 0.5 }}
        whileInView={{ x: 0 }}
      >
        <div className="aboutTitleText">ABOUT ME</div>
      </motion.div>
      {/* <div className="titleSVG">
        <svg viewBox="0 0 600 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              About Me
            </text>
          </symbol>

          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
        </svg>
      </div> */}
      <motion.div
        className="aboutText"
        initial={{ x: 200 }}
        /* animate={{ x: 0, translateY: 0 }} */
        transition={{ duration: 0.5 }}
        whileInView={{ x: 0 }}
      >
        I started my professional career in multimedia as a{' '}
        <span>Sound Designer</span> for animation. After experimenting with
        sound programming with Max Msp I fell in love with the possibilities
        coding had to offer, and so my new journey began. I learned all i could
        by myself, and after that i enrolled in the{' '}
        <a
          className="edisrupt"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.eddisrupt.com/"
        >
          EDISRUPT
        </a>{' '}
        frontend bootcamp to get my knowledge tested and incremented. Aside from
        my studies, I&apos;m a big <span> music lover</span> and an{' '}
        <span>A.I. enthusiast</span>.
        {/* I&apos;m a sound designer turned web developer, currently looking for a
        first opportunity as a frontend developer. */}
      </motion.div>
    </section>
  );
};

export default About;
