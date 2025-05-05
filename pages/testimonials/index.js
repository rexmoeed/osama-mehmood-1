// components
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion 
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import TestimonialSlider from '../../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <div className='min-h-screen bg-primary/30 py-36 flex items-center relative z-10'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8 items-center xl:items-start'>
          {/* text */}
          <div className='text-center flex flex-col lg:text-left mb-8 xl:mb-0 xl:max-w-xl'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 xl:mt-5'
            >
              Hear What My Clients Say<span className='text-accent'>!</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-4 max-w-[300px] mx-auto lg:mx-0'
            >
              I’m grateful for amazing clients and their kind feedback.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='w-full xl:max-w-[60%]'
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Testimonials;
