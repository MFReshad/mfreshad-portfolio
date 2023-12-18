import React from 'react';

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex flex-col sm:flex-row justify-between items-center'>
        <span className='mb-2 sm:mb-0'>m_f_reshad</span>
        <p className='text-slate-600 sm:ml-4'>
          Copyright © 2023 by Muhtasim Ferdous Reshad
        </p>
      </div>
    </footer>
  );
};

export default Footer;
