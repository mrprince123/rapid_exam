import React from 'react';
import './home.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import home from '../../assets/home.png' 

import { NavLink } from 'react-router-dom';


const Home = () => {
  const [text] = useTypewriter({
    words: ['Exam.', 'Job.', 'Passing.', 'Excel.'],
    loop: Infinity
  })

  return (
    <div className='rapid__header section__padding' id='home'>
      <div className='rapid__header-content'>
        <h1 className='gradient__text'>
          Learn for <span>{text}</span>

          <Cursor cursorColor='#023e8a' cursorSize='40px' />
        </h1>
        <h3 className='header_text'>Learn how to pass exam in<br /> now time.</h3>
        <div className='rapid_header_button'>
        <NavLink><button className='course_button'>View Courses </button></NavLink>
        <NavLink><button className='read_button' >Read More</button></NavLink>
        </div>
       

      </div>
      <div className=' rapid__header-image'>
        <img src={home} alt="" />
      </div>


    </div>
  )
}

export default Home