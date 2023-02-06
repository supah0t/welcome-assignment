import { FC, Dispatch, SetStateAction } from 'react';

import MainInfo from './mainInfo';
import IconGroup from '../row/IconGroup';

import { ReactComponent as CloseButton } from '../../../../../assets/SVG/XButton.svg';

import transferDetailsList from '../../../../../mockData/transfers_details.json';

import type { TransferAfterFormat } from '../../../../utils/formatDatetime';

export type TransferDetails = typeof transferDetailsList[0];

import './style.css';

const HeadingAndText = ({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) => (
  <div className="details-group">
    <span className="group-heading">{heading}</span>
    <span className="group-text">{text}</span>
  </div>
);

const Modal: FC<{
  transfer: TransferAfterFormat;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ transfer, setShowModal }) => {
  const transferDetails = transferDetailsList.find(
    (trans) => trans.id === transfer.id
  );

  if (!transferDetails) return null;

  return (
    <div className="modal">
      <div className="content-layout">
        <div id="pic-name">
          <img src={`${transfer.traveler_photo}`} className="traveler-photo" />
          <div className="traveler-name">
            <span>{transfer.traveler_first_name}</span>
            <span>{transfer.traveler_last_name}</span>
          </div>
        </div>
        <div id="person-info">
          <HeadingAndText
            heading="Phone number"
            text={transferDetails.traveler['phone_number']}
          />
          <HeadingAndText
            heading="Email"
            text={transferDetails.traveler['email']}
          />
          <HeadingAndText
            heading="Coming from"
            text={transferDetails.traveler['country']}
          />
          <span className="opportunities-heading">Opportunities</span>
          <IconGroup transfer={transfer} withText={true} />
        </div>
        <div id="transfer-details">
          <div className="close-button" onClick={() => setShowModal(false)}>
            <CloseButton height={40} width={40} />
          </div>
          <MainInfo info={transferDetails} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
