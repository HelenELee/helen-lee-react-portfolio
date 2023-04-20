import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header-color h-200 p-10 m-0 flex flex-row flex-end flex-nowrap items-end">

    <p className="text-white about-me text-4xl">Helen Lee</p>
    <ul className="ml-auto list-none">
      <li className="mr-10 inline-block">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="mr-10 inline-block">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="mr-10 inline-block">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="mr-10 inline-block">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </header>
  );
}

export default NavTabs;
