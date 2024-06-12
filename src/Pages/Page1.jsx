import React from 'react';
import image1 from "../assets/image1.png";
import { motion } from "framer-motion";

const Page1 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-center p-8 w-full h-full">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center w-full h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <div className="order-2 md:order-1 md:mr-8 text-center md:text-left w-full md:w-1/2">
            <h1 className="text-4xl font-bold">IOTA polygon serum ipsum WAX terraUSD gala THETA.</h1>
            <p className="mt-4 text-lg">Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>
            <button className='bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-400 mt-4 transition-colors duration-300'>Get Started</button>
          </div>
          <img
            src={image1}
            alt="image1"
            className="max-h-full order-1 md:order-2 mb-8 md:mb-0 w-full md:w-1/2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page1;