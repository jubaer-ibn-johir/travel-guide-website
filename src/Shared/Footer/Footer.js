import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p sticky='bottom' className='text-center mt-5' ><small >Copyright ©{new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;