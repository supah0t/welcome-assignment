import { useState } from 'react';

import MobileRow from './row';

import {
  completeGrouping,
  TransferAfterFormat,
} from '../../../utils/formatDatetime';

import transfersList from '../../../../mockData/transfers_list.json';

import { ReactComponent as Calendar } from '../../../../assets/SVG/calendar.svg';

import './style.css';

const Transfers = () => {
  const [modalNumber, setModalNumber] = useState(0);
  const arrayOfGroupedTransfers = completeGrouping(transfersList);

  console.log(modalNumber);

  return (
    <div className="mobile-transfer-list">
      <div
        className={`mobile-overlay ${
          modalNumber !== 0 ? 'show-overlay' : 'hide-overlay'
        }`}
      />
      {arrayOfGroupedTransfers.map(
        ({ key: groupTitle, value: transferArray }) => {
          return (
            <div key={groupTitle}>
              <div className="mobile-group-title">
                <Calendar height={16} width={16} />
                {groupTitle}
              </div>
              {transferArray.map((transfer: TransferAfterFormat) => (
                <MobileRow
                  key={transfer.id}
                  transfer={transfer}
                  showModal={modalNumber === transfer.id}
                  setModalNumber={setModalNumber}
                />
              ))}
            </div>
          );
        }
      )}
    </div>
  );
};

export default Transfers;
