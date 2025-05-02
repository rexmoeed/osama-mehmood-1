// framer motion
import { motion } from 'framer-motion';

// variants
const transitionVariants = {
  initial: {
    x: '-100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: '100%',  // Use a single value instead of an array
    width: '100%',  // Use a single value instead of an array
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-30 w-screen bg-[#2e2257]"
        variants={transitionVariants} // Fixed the typo here
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      >
        
      </motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-20 w-screen bg-[#3b2d71]"
        variants={transitionVariants} // Fixed the typo here
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      >
        
      </motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-10 w-screen bg-[#4b3792]"
        variants={transitionVariants} // Fixed the typo here
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      >
        
      </motion.div>
      
    </>
  );
};

export default Transition;
