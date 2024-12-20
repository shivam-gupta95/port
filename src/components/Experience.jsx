import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import { experiences} from '../constants';
import {style} from '../style';
import { textVariant } from '../utils/motion';
import { staggerContainer } from '../utils/motion';
const ExperienceCard=({experience})=>{
  return  (<VerticalTimelineElement
     contentStyle={{background:"#1d1836", color:"#fff"}}
     contentArrowStyle={{borderRight:'7px solid #232631'}}
     date= {experience.date}
     iconStyle={{background:experience.iconBg}}
     icon={
      <div>
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
      </div>
     }
    >
        <div>
          <h3 className='text-white text-[24px] text-bold'>{experience.title}</h3>
        </div>
    </VerticalTimelineElement>)
}
const Experience = () => {
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
        <p className={style.sectionSubText}>My Journey So Far</p>
        <h2 className={style.sectionHeadText}>Teams and Hackathons </h2>
        </motion.div>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience,index)=>(
              <ExperienceCard key={index} experience={experience}/> 
            ))}
          </VerticalTimeline>
        </div>
       </motion.section>
       </>
     
  )
}

export default Experience