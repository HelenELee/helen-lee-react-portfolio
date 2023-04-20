import React from 'react';
import phoneImage from '../assets/phone.png';
import emailImage from '../assets/email.png';
import githubImage from '../assets/github_40.png';
import linkedinImage from '../assets/linkedin.png';
import twitterImage from '../assets/twitter.png';

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
<FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} />
<li className="inline-block"><a href="tel:+61400300200"><img src={phoneImage} alt="phone number"/></a></li>
                <li className="inline-block"><a href="mailto:helenelee3@outlook.com"><img src={emailImage} alt="email address" /></a></li>*/

function Footer() {
    return (
        <footer className="footer flex flex-column justify-center"> 
            <ul>
                
                <li className="inline-block"><a href="https://github.com/HelenELee"><img src={githubImage} alt="github" /></a></li>
                <li className="inline-block"><a href="https://www.linkedin.com/in/helen-e-lee/"><img src={linkedinImage} alt="linkedin" /></a></li>
                <li className="inline-block"><a href="https://twitter.com/HLee59108793/"><img src={twitterImage} alt="twitter" /></a></li>
            </ul>
        </footer>
    )
}

export default Footer;