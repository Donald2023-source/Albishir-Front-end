import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import landingImg from '../assets/Windows 11 Wallpapers Re-Imagined.jfif';

const LandingPage = () => {
  return (
    <div>
        <div className='bg-black h-screen relative -top-12 opacity-70'/>

        <div className='absolute top-[40%] flex flex-col items-center gap-10 left-0 right-0 inset-0 z-50'>
          <motion.h2 
            className='lg:text-5xl md:text-3xl text-2xl leading-[4rem] font-semibold text-white text-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Welcome to the Albishir Registration Page
          </motion.h2>

          <Link to={'/empowerment'}>
          <motion.button 
            className='border text-white p-4'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
          </Link>
        </div>
    </div>
  );
};

export default LandingPage;
