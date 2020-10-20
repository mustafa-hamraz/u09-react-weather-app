import React from 'react';
import './Styles.css';
import { AiFillHome, AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

function Footer() {
    return (
        <div className="footer_div">
            <div className="footer_section">
                <div><a href="http://hamraz.se/"><AiFillHome/></a></div>
                <div><a href="https://github.com/mustafa-hamraz/"><AiFillGithub /></a></div>
                <div><a href="https://www.linkedin.com/in/mustafa-hamraz-124b64194/"><AiFillLinkedin /></a></div>
                <div><a href="https://www.facebook.com/hamrazmustafa"><AiFillFacebook/></a></div>
                <div><a href="https://www.instagram.com/mustavhamraz/"><AiFillInstagram/></a></div>
                
            </div>
            <p>&copy; Copyrights MUSTAFA HAMRAZ</p>
        </div>

    );
}

export default Footer;