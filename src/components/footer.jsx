import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='over_flower'>
                <span>Let's do it! —
                </span>
                <button className='btn'>
                    Learn More
                </button>
            </div>
            <div>
                <img src="footer_img.png" alt="Billboard Ad" />
            </div>
            <div>
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Book Your Stay</a></li>
                    <li><a href="#">Become A Host</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div>
                <h3>Support</h3>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Safety Information</a></li>
                    <li><a href="#">Cancellation Options</a></li>
                    <li><a href="#">Our COVID-19 Response</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            <div className="subscribe">
                <div className="social-icons">
                    <h3>Let's do it!</h3>
                    <div className='s-icons'>
                        <a href="#"><img src="icon-1.png" alt="" /></a>
                        <a href="#"><img src="icon-2.png" alt="" /></a>
                        <a href="#"><img src="icon-3.png" alt="" /></a>
                        <a href="#"><img src="icon-4.png" alt="" /></a>
                        <a href="#"><img src="icon-5.png" alt="" /></a>
                        <a href="#"><img src="social.png" alt="" /></a>
                    </div>
                </div>
                <h3 >Subscribe</h3>
                <p className='pera'>Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
                <form action="#">
                    <input type="email" placeholder="Enter your email address" />
                    <input className='subs' type="submit" value="Subscribe" />
                </form>
            </div>
            <div className="bottom-links">
                <div className='links_ft'>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Sales and Refunds</a>
                    <a href="#">Legal</a>
                    <a href="#">Site Map</a>
                </div>
                <div className="copyright">
                    &copy; 2021 All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;