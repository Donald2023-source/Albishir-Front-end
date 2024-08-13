import React from 'react'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import './App.css'

const App = () => {
  return (
    <Router>
      <nav>
        <ul className="flex justify-around mx-auto w-[80%] p-3 rounded-xl shadow-xl bg-[#252b63] text-white">
          <li>
            <motion.div
              whileHover={{ scale: 1.3, fontWeight: 600 }} 
              transition={{ type: 'spring', stiffness: 300 }} 
            >
              <Link to="/empowerment">Empowerment</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.3, fontWeight: 600 }} 
              transition={{ type: 'spring', stiffness: 300 }} 
            >
              <Link to="/trainees">Trainees</Link>
            </motion.div>
          </li>
        </ul>
      </nav>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/empowerment" element={<SignUp />} />
          <Route path="/trainees" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App
