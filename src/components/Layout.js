import React from 'react';
import  {useDarkMode} from '../components/useDarkMode'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Toggle from '../components/Toggler';

const Layout = ({ children }) => {

  const [theme, themeToggler] = useDarkMode();

  return (
    <div>
      <header>
        <div className="link-wrapper">
          <a href="#skip-target" id="skip" className="py-1.5 border-solid	border-2 border-transparent">Skip to content</a>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div>
        <Header />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
