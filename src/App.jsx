import {BrowserRouter, Routes} from "react-router-dom"
import { About, Contact ,Experience, Hero,Navbar, Tech, Works, StarsCanvas} from "./components"
import { motion } from 'framer-motion';
import { style } from './style';
import { staggerContainer } from './utils/motion';
import { SectionWrapper } from "./hoc"
function App() {
  

  return (
<BrowserRouter>
 
 <div className="relative z-0 bg-primary">
   <div className="bg-hero-pattern bg-cover bg-no-repeat">
      <Navbar/>
      <Hero/>
   </div>
   <div>
   <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={`${style.padding} max-w-7xl mx-auto z-0 relative`}
      >
      
        <About/>
      </motion.section>
     <Experience/>
     <Tech/>
     <Works/>
   </div>
   <div className="relative z-0">
    <Contact/>
    <StarsCanvas/>
   </div>
 </div>
</BrowserRouter>
  )
}

export default App
