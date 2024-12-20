import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {style} from '../style'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import  {SectionWrapper}  from '../hoc'
const ServiceCard=({index,title, icon})=>{
 console.log(icon);
 return (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div variants={fadeIn("left","spring",0.5*index, 0.8)} className='w-full green-pink-gradient p-[1px] rounded-[25px] shadow-card'>
      <div options={{max:45, speed:450, scale:1}} className='bg-tertiary min-h-[250px] py-5 px-12 rounded-[25px] flex flex-col justify-evenly items-center'>
       <img src={icon} alt={title} className='h-[75px] w-[75px] object-contain'/>
       <h3 className='text-white text-center font-bold text-[20px]'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
 )
}
const About = () => {
  return (
   <>
     <motion.div variants={textVariant()}>
       <p className={style.sectionSubText}>Introduction</p>
       <h2 className={style.sectionHeadText}>OverView</h2>
     </motion.div>
     <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px ]'>
     I am a passionate web developer currently pursuing my second year of Electronics and Communication Engineering (ECE) at NIT Trichy. I began coding in my first year of college, and it has been an exciting journey of continuous learning and growth. With a keen interest in building projects, I have developed various mini applications that reflect my skills and creativity. Being a quick learner, I enjoy exploring new technologies and enhancing my expertise in web development.Let's work together and bring your ideas to life!
     </motion.p>
     <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} icon={service.icon} title={service.title} />

        ))}
     </div>
   </>
  )
}

export default About;