import './style.css';

import { ReactComponent as Profile } from '../../../../assets/SVG/profile.svg';
import { ReactComponent as PowerOff } from '../../../../assets/SVG/power_off.svg';

const Topbar = () => {
  return (
    <div id="topbar">
      <div className="content">
        <div className="icons">
          <Profile height={20} width={20} className="icon" />
          <PowerOff height={20} width={20} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
