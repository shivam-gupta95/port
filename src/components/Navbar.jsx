import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {style} from "../style"
import {navLinks} from "../constants"
import {logo, menu, close} from "../assets/assets"
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
   <nav className={`${style.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
     <div className='w-full flex justify-between items-center max-w-7xl  mx-auto '>
         <Link to="/" className='flex items-center gap-2' onClick={()=>{
          setActive("");
          window.scrollTo(0,0); /* It will take the user to top */
         }}><img src={logo} alt="logo" className='w-9 h-9 object-contain'></img> <p className='text-[18px] font-bold cursor-pointer'>Surabhi </p></Link>
         <ul className="list-none hidden sm:flex flex-row gap-10">
           {navLinks.map((link)=>(
             <li key={link.id} className={active===link.title? "text-white": "text-secondary hover:text-white hover:text-[18px]"  } onClick={()=>{
              setActive(link.title)
             }}>
               <a href={`#${link.id}`}>{link.title}</a>
             </li>
           ))}
         </ul>
         <div className='flex justify-end sm:hidden flex-col items-center'>
            <img src={toggle?close:menu} alt="menu" className='h-[29px] w-[29px] object-contain cursor-pointer right-0' onClick={()=>{setToggle(!toggle)}}/>
            <div className={`${!toggle?'hidden':'flex'} p-6 black-gradient  right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}>
            <ul className="list-none flex justify-end flex-col">
           {navLinks.map((link)=>(
             <li key={link.id} className={active===link.title? "text-white": "text-secondary hover:text-white hover:text-[18px] font-poppins font-medium cursor-pointer text-[16px]"  } onClick={()=>{
              setActive(link.title)
              setToggle(!toggle);
             }}>
               <a href={`#${link.id}`}>{link.title}</a>
             </li>
           ))}
         </ul>
            </div>
         </div>
     </div>
   </nav>
  )
}

export default Navbar