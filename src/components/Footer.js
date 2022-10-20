import * as React from 'react';

const spanStyle = {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '5px'
}

const Footer = () => {
  return (
    <footer>
      <div className="link-wrapper">
        <span style={spanStyle}>By <a className="footer-link" href="https://sanna.ninja">Sanna Mäkinen</a></span>
        <a className="footer-link" href="https://a11y.sanna.ninja">My accessibility site</a>
      </div>
    </footer>
  );
};

export default Footer;
