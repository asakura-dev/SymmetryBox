import React from 'react';
import { Link } from 'react-router-dom';
import SocialButtons from './SocialButtons';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
  return(
    <div className="footer">
      <SocialButtons/>
      <LanguageSelector/>
      <div className="footer-menu">
        <Link to='/'>TOP  </Link>
        <Link to='about'>ABOUT</Link>
        <Link to='Test'>Test</Link>
      </div>
    </div>
  );
}
export default Footer;