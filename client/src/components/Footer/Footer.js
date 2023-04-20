import React from 'react'
import './footer.css';
import logo from '../../assets/myLogo.png'

const Footer = () => {
    return (
        <div className="rapid__footer section__padding">
       

            <div className="rapid__footer-links">
                <div className="rapid__footer-links_logo">
                    <img src={logo} alt="rapid_logo" />
                    <p> The Ultimate Guide to <br />Pass in the Exam  </p>
                </div>
                <div className='footer-childs '>
                <div className="rapid__footer-links_div">
                    <h4>MENU</h4>
                    <p>About US</p>
                    <p>Courses</p>
                    <p>Contact</p>
                </div>
                <div className="rapid__footer-links_div vertical_line">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    
                </div>
                <div className="rapid__footer-links_div  get_in_touch  ">
                    <h4>Get in touch</h4>
                    <p>pareshtripathy071@gmail.com</p>
                </div>
            </div>
            </div>
            <hr/>

            <div className="rapid__footer-copyright">
                <p>@paresh the </p>
            </div>
        </div>
    )
}

export default Footer
