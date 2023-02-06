import Row from './row';

import {
  completeGrouping,
  TransferAfterFormat,
} from '../../../utils/formatDatetime';

import './style.css';

import transfersList from '../../../../mockData/transfers_list.json';

const Transfers = () => {
  const arrayOfGroupedTransfers = completeGrouping(transfersList);

  return (
    <div>
      <h2 className="title">Transfers</h2>
      <div className="content-area">
        <div className="table-header row">
          <span>STATUS</span>
          <span>TRAVELLER</span>
          <span>ARRIVAL / DEPARTURE</span>
          <span>FROM / TO</span>
          <span>
            OPPORTUNITIES <span className="new-tag">New</span>
          </span>
        </div>
        {arrayOfGroupedTransfers.map(
          ({ key: groupTitle, value: transferArray }) => {
            return (
              <div key={groupTitle}>
                <div className="group-title">{groupTitle}</div>
                {transferArray.map((transfer: TransferAfterFormat) => (
                  <Row key={transfer.id} transfer={transfer} />
                ))}
              </div>
            );
          }
        )}
      </div>
      <div className="pagination"></div>
    </div>
  );
};

export default Transfers;
