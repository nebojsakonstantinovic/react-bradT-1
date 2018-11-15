import React from 'react';
import propTypes from 'prop-types';

const Header = ({ branding }) => {
  return (
    <nav className="navbar navbar-rxpand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App',
};

Header.propTypes = {
  branding: propTypes.string.isRequired,
};

// const headingStyle = {
//   color: 'blue',
//   gontSize: '30px',
// };

export default Header;
