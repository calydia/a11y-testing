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
      <div className="link-wrapper mx-auto my-0">
        <span style={spanStyle}><a className="border-solid border-transparent border-b-2 border-t-2 block py-1.5 text-lg" href="https://sanna.ninja">Sanna Mäkinen</a></span>
        <a className="border-solid border-transparent border-b-2 border-t-2 block py-1.5 text-lg" href="https://a11y.sanna.ninja" aria-label="Learn more about accessibility on my accessibility site">My accessibility site</a>
      </div>
    </footer>
  );
};

export default Footer;
