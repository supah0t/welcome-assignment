import { FC, Dispatch, SetStateAction } from 'react';

import MobileModal from '../details';
import IconGroup from '../../../desktop/transfers/row/IconGroup';

import type { TransferAfterFormat } from '../../../../utils/formatDatetime';

import transferDetailsList from '../../../../../mockData/transfers_details.json';

import { ReactComponent as Arriving } from '../../../../../assets/Status/Arriving.svg';
import { ReactComponent as Departing } from '../../../../../assets/Status/Departing.svg';
import { ReactComponent as InCity } from '../../../../../assets/Status/Transfer.svg';

import './style.css';

const MobileRow: FC<{
  transfer: TransferAfterFormat;
  showModal: boolean;
  setModalNumber: Dispatch<SetStateAction<number>>;
}> = ({ transfer, showModal, setModalNumber }) => {
  const transferDetails = transferDetailsList.find(
    (trans) => trans.id === transfer.id
  );

  if (!transferDetails) return null;

  return (
    <div
      className="mobile-transfer-row"
      onClick={() => setModalNumber(transfer.id)}
    >
      {showModal && (
        <MobileModal
          transfer={transfer}
          transferDetails={transferDetails}
          setModalNumber={setModalNumber}
        />
      )}
      <div className="mobile-person-info">
        <div className="mobile-traveler-state">
          <span
            className={`traveler-tag  ${
              transfer.category === 'Arrival'
                ? 'blue'
                : transfer.category === 'Departure'
                ? 'red'
                : 'purple'
            }`}
          >
            {transfer.category === 'Arrival' ? (
              <Arriving height={20} width={20} />
            ) : transfer.category === 'Departure' ? (
              <Departing height={20} width={20} />
            ) : (
              <InCity height={20} width={20} />
            )}
            {transfer.category}
          </span>
        </div>
        <div className="mobile-traveler-name">
          {transfer.traveler_first_name} {transfer.traveler_last_name}
        </div>
        <div className="mobile-traveler-image">
          <img
            className="mobile-photo"
            src={`${transfer['traveler_photo']}`}
            alt="traveler_photo"
          />
        </div>
      </div>
      <div className="mobile-person-row">
        <span className="mobile-row-title">PROPERTY</span>
        <span>{transferDetails.to_location_title}</span>
      </div>
      <div className="mobile-person-row">
        <span className="mobile-row-title">ARRIVAL TIME</span>
        <span>{transfer.rowText}</span>
      </div>
      <div className="mobile-person-row">
        <span className="mobile-row-title">FROM</span>
        <span>{transferDetails.from_location_title}</span>
      </div>
      <div className="mobile-oportunities-row">
        <span className="mobile-row-title">OPPORTUNITIES</span>
        <IconGroup transfer={transfer} />
      </div>
    </div>
  );
};

export default MobileRow;
