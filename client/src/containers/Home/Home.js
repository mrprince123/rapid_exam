import React from 'react';
import './home.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import home from '../../assets/home.png'
import { useSpring, animated } from '@react-spring/web'


const Home = () => {
  const [text] = useTypewriter({
    words: ['Exam.', 'Job.', 'Passing.', 'Excel.'],
    loop: Infinity
  })
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 80 },
  })
  return (
    <div className='rapid__header section__padding' id='home'>
      <animated.div style = {{...springs}}className='rapid__header-content'>
        <h1 className='gradient__text'>
          Learn for <span>{text}</span>

          <Cursor cursorColor='#023e8a' cursorSize='40px' />
        </h1>
        <h3 className='header_text'>Learn how to pass exam in<br /> now time.</h3>
        <div className='rapid__header-content__input'>

        </div>
        <div className='rapid__header-content__people'>

        </div>


      </animated.div>
      <div className='slide-top slide-bottom rapid__header-image'>
        <img src={home} alt="" />
      </div>


    </div>
  )
}

export default Home