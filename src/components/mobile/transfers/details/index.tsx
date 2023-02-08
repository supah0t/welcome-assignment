import { FC, useEffect, useRef, Dispatch, SetStateAction } from 'react';

import MainPassengerInfo from '../../../common/MainPassengerInfo';

import type { TransferAfterFormat } from '../../../../utils/formatDatetime';
import type { TransferDetails } from '../../../desktop/transfers/modal';

import { ReactComponent as Baby } from '../../../../../assets/SVG/baby.svg';
import { ReactComponent as Car } from '../../../../../assets/SVG/transfer.svg';
import { ReactComponent as Sun } from '../../../../../assets/SVG/early check in.svg';
import { ReactComponent as Moon } from '../../../../../assets/SVG/late check out.svg';
import { ReactComponent as Chat } from '../../../../../assets/SVG/chat.svg';
import { ReactComponent as Call } from '../../../../../assets/SVG/Phone.Icon.20.svg';

import { ReactComponent as CloseButton } from '../../../../../assets/SVG/XButton.svg';

import './style.css';

const MobileModal: FC<{
  transfer: TransferAfterFormat;
  transferDetails: TransferDetails;
  setModalNumber: Dispatch<SetStateAction<number>>;
}> = ({ transfer, transferDetails, setModalNumber }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setOpacity = () => {
      if (ref.current) ref.current.style.top = '2vh';
    };
    const timeout = setTimeout(setOpacity, 10);
    return () => {
      clearTimeout(timeout);
      if (ref.current) ref.current.style.top = '100vh';
    };
  }, []);

  const closeModal = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setTimeout(() => setModalNumber(0), 500);
    if (ref.current) ref.current.style.top = '100vh';
  };

  return (
    <div ref={ref} className="mobile-modal">
      <div className="mobile-modal-title">
        {transfer.traveler_first_name}&apos;s trip
        <CloseButton
          height={40}
          width={40}
          className="mobile-modal-close-button"
          onClick={(e) => closeModal(e)}
        />
      </div>
      <div className="mobile-modal-main-area">
        <MainPassengerInfo info={transferDetails} isMobile={true} />
        <div className="mobile-modal-guest-info">
          <h3>Your guest</h3>
          <div className="mobile-modal-image-area">
            <img
              className="mobile-modal-photo"
              src={`${transfer['traveler_photo']}`}
              alt="traveler_photo"
            />
            <div className="mobile-modal-name-area">
              <span className="mobile-modal-traveler-name">
                {transfer.traveler_first_name} {transfer.traveler_last_name}
              </span>
              <span className="mobile-modal-traveler-phone">
                {transferDetails.traveler.phone_number}
              </span>
              <span className="mobile-modal-traveler-country">
                From {transferDetails.traveler.country}
              </span>
            </div>
          </div>
          <div className="mobile-modal-opportunities-area">
            <div />
            <span className="mobile-modal-opportunities-title">
              Opportunities
            </span>
            {transfer.early_checkin && (
              <>
                <Sun
                  className="mobile-opportunities-icon"
                  height={30}
                  width={30}
                />
                <span className="opportunities-name">Early check-in</span>
              </>
            )}
            {transfer.late_checkout && (
              <>
                <Moon
                  className="mobile-opportunities-icon"
                  height={30}
                  width={30}
                />
                <span className="opportunities-name">Late check-out</span>
              </>
            )}
            {transfer.return_transfer && (
              <>
                <Car
                  className="mobile-opportunities-icon"
                  height={30}
                  width={30}
                />
                <span className="opportunities-name">Return transfer</span>
              </>
            )}
            {transfer.babies && (
              <>
                <Baby
                  className="mobile-opportunities-icon"
                  height={30}
                  width={30}
                />
                <span className="opportunities-name">Babies</span>
              </>
            )}
          </div>
        </div>
        <div className="mobile-modal-button-group">
          <div className="mobile-modal-button">
            <Call className="mobile-modal-button-icon" />
            Call
          </div>
          <div className="mobile-modal-button">
            <Chat className="mobile-modal-button-icon" />
            Message
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
