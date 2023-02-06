import logo from '../../../../assets/Logo.png';

import { ReactComponent as LiveView } from '../../../../assets/SVG/Live_view.svg';
import { ReactComponent as Settings } from '../../../../assets/SVG/Settings.svg';
import { ReactComponent as Statistics } from '../../../../assets/SVG/Statistics.svg';
import { ReactComponent as Scheduled } from '../../../../assets/SVG/Scheduled.svg';
import { ReactComponent as Revenue } from '../../../../assets/SVG/Revenue.svg';

import './style.css';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} alt="Logo" id="logo" />
      <div id="menu">
        <span>
          <LiveView width={40} height={40} className="icon" />
        </span>
        <span>
          <Scheduled width={40} height={40} className="icon" />
        </span>
        <span>
          <Statistics width={40} height={40} className="icon" />
        </span>
        <span>
          <Revenue width={40} height={40} className="icon" />
        </span>
        <span>
          <Settings width={40} height={40} className="icon" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
