/* eslint-disable react/no-unescaped-entities */
//components 
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';

//icons 
import { BsArrowRight } from 'react-icons/bs';

//framer motion 
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>

          {/* text */}
          <motion.h2 variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" className='h2 text-center mb-12'>
            Let's <span className='text-accent'>Connect!</span>
          </motion.h2>

          <motion.form variants={fadeIn('down', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='Name' className='input' />
              <input type='text' placeholder='Email' className='input' />
            </div>
            <input type='text' placeholder='Subject' className='input' />
            <textarea placeholder='Message' className='textarea'></textarea>
            
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 
            transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's Talk
              </span>
              <BsArrowRight className='absolute text-[22px] translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300' />
            </button>
          </motion.form>
          

        </div>
      </div>
      
    </div>
  );
};

export default Contact;
