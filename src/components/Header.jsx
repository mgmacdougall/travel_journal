import React from 'react';
import './Header.css';
import {IconContext} from 'react-icons';
import {BsGlobe2} from 'react-icons/bs';
function Header() {
  return (
    <div className="header-component">
      <IconContext.Provider value={{color: 'white'}}>
        <BsGlobe2 />
      </IconContext.Provider>
      <p>my travel journal</p>
    </div>
  );
}

export default Header;
