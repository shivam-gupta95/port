import React, {useState, useRef} from 'react';
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { style } from '../style'; 
import { EarthCanvas } from './canvas';
import { staggerContainer } from '../utils/motion';
import { slideIn } from '../utils/motion';
import { meshBounds } from '@react-three/drei';

const Contact = () => {
 
  const formRef = useRef();
  const [loading, setLoading]= useState(false);

  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  })
//
//
//(Public Key)
  const handleChange = (e)=>{
     const {name, value}= e.target;
     setForm({...form, [name]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_qyol3p6','template_pdiq6t5',{
      from_name:form.name,
      to_name:'Surabhi',
      form_email:form.email,
      to_email:'surabhisci2201@gmail.com',
      message:form.message
    },'Ufs0XxIJwQ7wWKdCY').then(()=>{
      setLoading(false);
      alert('Thank you, I will get back to as early as possible')
      setForm({
         name:'',
         email:'',
         message:''
      })
    },(error)=>{
      setLoading(false);
      console.log(error);
      alert('Something went wrong');
    })
  }
  return (
    <>
    <motion.section
 variants={staggerContainer()}
 initial="hidden"
 whileInView="show"
 viewport={{ once: true, amount: 0.3 }}
 className={`${style.padding} max-w-7xl mx-auto z-0 relative`}
>
 <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden'>
   <motion.div  variants={slideIn('left','tween',0.2,1)} className='flex-[1] bg-black-100 p-8 rounded-3xl'>
  <p className={style.sectionSubText}>Get In Touch</p>
  <h3 className={style.sectionHeadText}>Contact</h3> 
  <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
     <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Name</span>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none '/>
     </label>
     <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Email</span>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your mail" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none '/>
     </label>
     <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Message</span>
        <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What you wanna say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none '/>
     </label>

     <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
          {loading? 'Sending....':'Send'}

     </button>
  </form>

   </motion.div>
   <motion.div variants={slideIn('right','tween',0.2,1)} className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'>
      <EarthCanvas/>
   </motion.div>
 </div>
</motion.section>
</>
  )
}

export default Contact