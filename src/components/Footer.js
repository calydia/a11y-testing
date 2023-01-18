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
        <span style={spanStyle}><a className="footer-link" href="https://sanna.ninja">Sanna Mäkinen</a></span>
        <a className="footer-link" href="https://a11y.sanna.ninja" aria-label="Learn more about accessibility on my accessibility site">My accessibility site</a>
      </div>
    </footer>
  );
};

export default Footer;
