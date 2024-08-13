import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Success = ({ message }) => {
  return (
    <motion.div
      className='flex absolute right-0 left-0 top-52 flex-col items-center gap-4 bg-[#4d4d4d80] shadow-lg py-20 px-10 text-white w-[20rem] rounded-lg mx-auto'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <FaCheckCircle size={80} color='green' />
      <h2 className='font-medium'>{message}!</h2>
    </motion.div>
  );
};

export default Success;
