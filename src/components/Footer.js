import React from 'react';
import phoneImage from '../assets/phone.png';
import emailImage from '../assets/email.png';
import githubImage from '../assets/github.png';

function Footer() {
    return (
        <footer className="footer flex flex-column justify-center"> 
            <ul>
                <li className="inline-block"><a href="tel:+61400300200"><img src={phoneImage} alt="phone number"/></a></li>
                <li className="inline-block"><a href="mailto:helenelee3@outlook.com"><img src={emailImage} alt="email address" /></a></li>
                <li className="inline-block"><a href="https://github.com/HelenELee"><img src={githubImage} alt="github" /></a></li>
            </ul>
        </footer>
    )
}

export default Footer;