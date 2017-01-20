import React from 'react';

if (process.env.BROWSER) {
  require('../../stylesheets/modules/Header.scss');
}

const Header = () => {
  return (
    <header className='header--main'>
      <h1>BausCode</h1>
    </header>
  );
};

export default Header;
