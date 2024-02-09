import React from 'react';


import darkLogo from '../assets/img/logo-dark.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between items-center' >
        {/* logo */}
        <a href='/'>
        <img  src={darkLogo}  alt='' />
        </a> 
        Copyright &copy; 2024. All rights reserved.
      </div>
    </footer>
  )
};

export default Footer;
