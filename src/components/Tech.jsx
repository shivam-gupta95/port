import React from 'react'

import {motion} from 'framer-motion';

import {  technologies} from '../constants';
import {style} from '../style';
import { textVariant } from '../utils/motion';
import { staggerContainer } from '../utils/motion';
import { BallCanvas } from './canvas';
const Tech = () => {
  return (
    <>
    <motion.section
 variants={staggerContainer()}
 initial="hidden"
 whileInView="show"
 viewport={{ once: true, amount: 0.3 }}
 className={`${style.padding} max-w-7xl mx-auto z-0 relative`}
>
 <motion.div variants={textVariant()}>
 <p className={style.sectionSubText}>Coding Languages</p>
 <h2 className={style.sectionHeadText}>So Far What I Have Learnt</h2>
 </motion.div>
 <div className='flex flex-wrap flex-row gap-10 justify-center'>
    {technologies.map((technology)=>(
       <div className='w-30 h-30' key={technology.name}>
        <BallCanvas icon={technology.icon}/>
       </div>
    ))}
 </div>
</motion.section>
</>
  )
}

export default Tech