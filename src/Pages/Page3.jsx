import React from 'react';
import image3 from "../assets/image3.png"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Page3 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3 }
      }));
    }
  }, [controls, inView]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-left p-8 w-full h-full">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center w-full h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image3}
            alt="image3"
            className="max-h-full order-1 md:order-2 mb-8 md:mb-0 w-full md:w-2/2"
            style={{ width: '300px', height: '300px', marginRight: '800px' }}
          />
        </motion.div>

        <div ref={ref} className="order-2 md:order-1 md:mr-8 text-center md:text-left w-full md:w-1/2">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            custom={0}
          >
            How it works
          </motion.h1>
          <motion.p
            className={`mt-4 text-lg ${inView ? 'text-blue-500' : 'text-white'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            custom={1}
          >
            Select an avatar
          </motion.p>
          <motion.p
            className={`mt-4 text-lg ${inView ? 'text-blue-500' : 'text-white'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            custom={2}
          >
            Create or Generate Script
          </motion.p>
          <motion.p
            className={`mt-4 text-lg ${inView ? 'text-blue-500' : 'text-white'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            custom={3}
          >
            Select AI Voices
          </motion.p>
          <motion.p
            className={`mt-4 text-lg ${inView ? 'text-blue-500' : 'text-white'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            custom={4}
          >
            Publish
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Page3;