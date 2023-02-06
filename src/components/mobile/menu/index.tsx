import { ReactComponent as CloseButton } from '../../../../assets/SVG/XButton.svg';
import { ReactComponent as Logo } from '../../../../assets/SVG/Logo.svg';
import { ReactComponent as LiveView } from '../../../../assets/SVG/Live_view.svg';
import { ReactComponent as Settings } from '../../../../assets/SVG/Settings.svg';
import { ReactComponent as Statistics } from '../../../../assets/SVG/Statistics.svg';
import { ReactComponent as Scheduled } from '../../../../assets/SVG/Scheduled.svg';
import { ReactComponent as Revenue } from '../../../../assets/SVG/Revenue.svg';

import './style.css';

const Menu = ({
  visible,
  toggleMenu,
}: {
  visible: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div className={`sliding-menu ${visible ? 'show' : 'hide'}`}>
      <div className="sliding-menu-header">
        <Logo width={215} height={63} />
        <div className="sliding-menu-close-button" onClick={toggleMenu}>
          <CloseButton height={50} width={50} />
        </div>
      </div>
      <div className="sliding-menu-options">
        <span className="menu-entry">
          <LiveView width={45} height={45} />
          <span className="menu-entry-text">Live View</span>
        </span>
        <span className="menu-entry">
          <Scheduled width={45} height={45} />
          <span className="menu-entry-text">Scheduled</span>
        </span>
        <span className="menu-entry">
          <Statistics width={45} height={45} />
          <span className="menu-entry-text">Statistics</span>
        </span>
        <span className="menu-entry">
          <Revenue width={45} height={45} />
          <span className="menu-entry-text">Revenue</span>
        </span>
        <span className="menu-entry">
          <Settings width={45} height={45} />
          <span className="menu-entry-text">Settings</span>
        </span>
      </div>
      <div className="logout-button">Log out</div>
    </div>
  );
};

export default Menu;
