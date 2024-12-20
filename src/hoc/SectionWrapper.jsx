import React from 'react';
import { motion } from 'framer-motion';
import { style } from '../style';
import { staggerContainer } from '../utils/motion';

 const SectionWrapper = ({Component, idName}) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={`${style.padding} max-w-7xl mx-auto z-0 relative`}
      >
      
        <Component />
      </motion.section>
    );
  }

  
};

export default SectionWrapper


