import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {style} from '../style'
import {github} from '../assets/assets'
import {projects} from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { staggerContainer } from '../utils/motion'
const ProjectCard = ({index,name, description , source_code_link,image, tags })=>{
  return (
    <motion.div variants={fadeIn("up","spring",index*0.5, 0.7)}>
       <Tilt options={{
        max:45,
        speed:350,
        scale:1
       }} className='bg-tertiary p-5 rounded-2xl sm:w-[300px]  w-full '>
        <div className='relative w-full h-[240px] '>
          <img src={image} alt={name} className='h-full w-full object-cover rounded-3xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={()=>{
              window.open(source_code_link,"_blank")
            }} className='black-gradient rounded-full h-10 w-10 flex justify-center items-center cursor-pointer'>
              <img src={github} alt='github' className='h-1/2 w-1/2 object-contain'/>
            </div>
          </div>
        </div>
        <div className='mt-5'>
             <h3 className='text-[24px] font-bold text-white'>{name}</h3>
             <p className='text-[14px] text-secondary'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-10'>
           {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>{tag.name}</p>
           ))}
        </div>
       </Tilt>
    </motion.div>
  )
}
const Works = () => {
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
 <p className={style.sectionSubText}>My Works</p>
 <h2 className={style.sectionHeadText}>Projects </h2>
 </motion.div>
<div className='w-full flex'>
  <motion.p variants={fadeIn("","",0.1,0.1)} className='mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]'>
     Following projects showcase my skills and experience real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it.
  </motion.p>
</div>
<div className='mt-20  flex flex-wrap gap-10'>
   {projects.map((project, index)=>(
      <ProjectCard key={`project-${index}`} index={index} {...project}/>
   ))}
</div>
</motion.section>
</>
  )
}

export default Works