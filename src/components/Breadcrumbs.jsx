import React from 'react';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ totalSlides, activeIndex }) => {
  return (
    <div className={styles.breadcrumbs}>
      {[...Array(totalSlides)].map((_, index) => (
        <div
          key={index}
          className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};

export default Breadcrumbs;
