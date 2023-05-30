import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="bg-black h-200 p-10 m-0 flex flex-row flex-nowrap justify-stretch items-end">
     {/* <header className="header-color h-200 p-10 m-0 flex flex-row flex-end flex-nowrap items-end"> */}
    <p className="text-white about-me text-4xl pr-5"><a href="#about" onClick={() => handlePageChange('About')}>Helen Lee</a></p>
    <section className="ml-auto flex flex-row justify-end items-end sm:flex-col mr-0">

    
    <ul className="ml-auto list-none">
      <li className="mr-10 md:inline-block sm:block">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "About"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="mr-10 md:inline-block sm:block">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="mr-10 md:inline-block sm:block">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="mr-10 md:inline-block sm:block">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      
    </ul>
    </section>
    </header>
  );
}

export default NavTabs;
