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
        <Link to='/'>Top  </Link>
        <Link to='about'>About</Link>
      </div>
    </div>
  );
}
export default Footer;