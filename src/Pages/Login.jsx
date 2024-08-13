import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import landingImg from '../assets/1d73d0dcbbeb1c5daf1e6b8ea9e3f3c3.jpg';
import { Bars } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { RiCheckDoubleFill } from 'react-icons/ri';
import Success from '../Components/Success';
import Error from '../Components/Error';

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [isFailed, setIsFailed] = useState(false);

 const [form, setForm] = useState({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  gender: ''
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prevState) => ({
    ...prevState,
    [name]: value
  }));
};


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const response = await fetch('https://albishir-backend.onrender.com/api/auth/trainees/signUp', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    setIsLoading(false); 

    if (response.ok) {
      console.log('Success:', data.message);
      setIsSuccess(true); 
      setMessage(data.message)
    } else {
      console.error('Error:', data.message);
      setMessage(data.message);
      setIsFailed(true)
    }
  } catch (error) {
    setIsLoading(false); 
    console.error('Request error:', error.message);
    setIsFailed(true)
  }
};


const handleOverlayClick = () => {
  setIsFailed(false);
};


  return (
    <motion.div
      className="flex w-screen bg"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 1 }}
    >
    <div className='w-screen'>
      <div className='flex flex-col mt-4 md:flex-row lg:flex-row justify-center gap-10 bg-white items-center md:p-3 p-10 lg:p-3 rounded-lg h-fit shadow-xl w-screen lg:w-[80%] lg:mx-auto'>
        <div className='flex flex-col w-screen px-4 lg:w-[60%]'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-10 justify-center lg:px-10'  >
            <h2 className='text-2xl mx-auto font-medium text-center lg:mb-2'>Trainees Registeration</h2>

                    <fieldset className='flex flex-col gap-1'>
                        <input
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            className='border-gray-200 border p-3 rounded-xl'
                            type="text"
                            placeholder='Please Enter Your First Name'
                            required
                        />
                    </fieldset>

                    <fieldset className='flex flex-col gap-1'>
                        <input
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            className='border-gray-200 border p-3 rounded-xl'
                            type="text"
                            placeholder='Please enter your last name'
                            required
                        />
                    </fieldset>

                    <fieldset className='flex flex-col gap-1'>
                        <input
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            className='border-gray-200 border p-3 rounded-xl'
                            type="number"
                            placeholder='Please enter your phone Number'
                            maxLength={11}
                            required
                        />
                    </fieldset>

                    <span className='flex gap-5'>
                <fieldset className='flex items-center'>
                  <input
                    type="radio"
                    name='gender'
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={handleChange}
                  />
                  <h2>Male</h2>
                </fieldset>

                <fieldset className='flex items-center'>
                  <input
                    type="radio"
                    name='gender'
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={handleChange}
                  />
                  <h2>Female</h2>
                </fieldset>
              </span>

            <button 
              className='border mx-auto p-2 w-full lg:w-96 bg-[#252b63] text-white rounded-xl'
              type='submit'
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
         
                </form>
             </div>
      <div className='hidden lg:block md:block'>
          <img className='rounded-l-2xl h-[40rem]' src={landingImg} alt="Login" />
        </div>
      </div>

      <AnimatePresence>
          {isSuccess && (
            <>
              <div className="h-screen inset-0 fixed -top-14 opacity-80 bg-black" />
              <Success message={message} />
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isFailed && (
            <>
              <div className="h-screen inset-0 fixed -top-14 opacity-80 bg-black" />
              <Error message={message} close={handleOverlayClick} />
            </>
          )}
        </AnimatePresence>
{isLoading ? (
         <div style={{"height": '110vh', 'width': '100vw', 'backgroundColor': 'black', 'opacity': '0.92', position : 'absolute', top: '-4rem', display: "flex", justifyContent: 'center', alignItems:'center'}}>
    <Bars visible={true} height="80" width="80" color="white" radius="9" ariaLabel="bars-loading" wrapperStyle={{}}wrapperClass=""/>
    </div>     
    ) : ''}
    </div>

    </motion.div>
  );
};

export default Login;
