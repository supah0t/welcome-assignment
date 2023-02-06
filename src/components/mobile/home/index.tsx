import { useState } from 'react';

import Menu from '../menu';
import Transfers from '../transfers';

import { ReactComponent as MenuIcon } from '../../../../assets/SVG/Menu.icon.svg';
import { ReactComponent as Search } from '../../../../assets/SVG/Search.svg';

import './style.css';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="mobile-layout">
      <div className="mobile-background">
        <Menu visible={showMenu} toggleMenu={toggleMenu} />
        <div
          className={`mobile-overlay ${
            showMenu ? 'show-overlay' : 'hide-overlay'
          }`}
        />
        <div className="mobile-top-bar">
          <MenuIcon
            width={24}
            height={20}
            onClick={toggleMenu}
            className="menu-button"
          />
          <span className="mobile-header">Transfer list</span>
          <Search width={20} height={20} />
        </div>
      </div>
      <div className="mobile-main-area">
        <Transfers />
      </div>
    </div>
  );
};

export default Home;
