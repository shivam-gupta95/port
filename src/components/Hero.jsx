import React from 'react'
import {motion} from "framer-motion"

import {style} from "../style"
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full  h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[100px] flex flex-row max-w-7xl mx-auto items-start gap-5` }>
         <div className='flex flex-col justify-center items-center mt-5'>
           <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
           <div className='w-1 sm:h-[80px] h-[50px] violet-gradient'/>
         </div>
         <div>
            <h1 className={`${style.heroHeadText} text-white`}>Hii I'm <span className='text-[#915eff]'>Surabhi</span> </h1>
            <p className={`${style.heroSubText} text-white mt-2`}>I am web developer ,<br className='sm:block hidden'/>passionate about coding and developing web applications</p>
         </div>

        
      </div>
      <ComputersCanvas/>
      <div className='absolute xs-bottom-10 bottom-12 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[40px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{y:[0,24,0]}} transition={{duration:1.5, repeat:Infinity , repeatType:'loop'}} className="w-3 h-4 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero