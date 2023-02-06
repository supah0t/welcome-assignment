import MainPassengerInfo from '../../../../common/MainPassengerInfo';

import type { TransferDetails } from '..';

import './style.css';

const MainInfo = ({ info }: { info: TransferDetails }) => {
  return (
    <div className="main-info-area">
      <h2>Transfers</h2>
      <MainPassengerInfo info={info} />
    </div>
  );
};

export default MainInfo;
