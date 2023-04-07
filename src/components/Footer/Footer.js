import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
        &#169; {new Date().getFullYear()} TVmaze | All Rights Reserved
    </footer>
  );
}

export default Footer