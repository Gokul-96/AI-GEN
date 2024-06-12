import React from 'react';
import image2 from "../assets/image2.png"; 
import { motion } from "framer-motion";

const Page2 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-center p-8 w-full h-full">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center w-full h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <img
            src={image2}
            alt="image2"
            className="max-h-full order-1 md:order-2 mb-8 md:mb-0 w-full md:w-2/2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page2;