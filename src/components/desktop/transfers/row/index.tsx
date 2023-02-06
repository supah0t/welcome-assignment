import { FC, useEffect, useState, MouseEvent } from 'react';
import { Tooltip } from 'react-tooltip';

import Modal from '../modal';

import IconGroup from './IconGroup';

import { ReactComponent as Arriving } from '../../../../../assets/Status/Arriving.svg';
import { ReactComponent as Departing } from '../../../../../assets/Status/Departing.svg';
import { ReactComponent as InCity } from '../../../../../assets/Status/Transfer.svg';

import type { TransferAfterFormat } from '../../../../utils/formatDatetime';

import './style.css';

const isOverflowing = (e: HTMLElement) => {
  return e.offsetWidth < e.scrollWidth;
};

const Row: FC<{ transfer: TransferAfterFormat }> = ({ transfer }) => {
  const [showNameTooltip, setShowNameTooltip] = useState(false);
  const [showLocationTooltip, setShowLocationTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };

    if (showModal) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [showModal]);

  useEffect(() => {
    const nameElement = document.getElementById(`traveler${transfer.id}`);
    const locationElement = document.getElementById(`location${transfer.id}`);
    if (nameElement && isOverflowing(nameElement)) {
      setShowNameTooltip(true);
    } else setShowNameTooltip(false);

    if (locationElement && isOverflowing(locationElement)) {
      setShowLocationTooltip(true);
    } else setShowLocationTooltip(false);
  }, [transfer]);

  const handleRowClick = () => {
    if (!showModal) setShowModal(true);
  };

  const handleOverlayClick = (e: MouseEvent) => {
    if (showModal) {
      e.stopPropagation();
      setShowModal(false);
    }
  };

  return (
    <div
      className="row"
      onClick={() => {
        handleRowClick();
      }}
    >
      <span>
        {transfer.category === 'Arrival' ? (
          <Arriving />
        ) : transfer.category === 'Departure' ? (
          <Departing />
        ) : (
          <InCity />
        )}
      </span>
      <span>
        <img
          className="photo"
          src={`${transfer['traveler_photo']}`}
          alt="traveler_photo"
        />
        <span
          className="name"
          id={`traveler${transfer.id}`}
          data-tooltip-content={`${transfer.traveler_first_name} ${transfer.traveler_last_name}`}
        >
          {transfer.traveler_first_name} {transfer.traveler_last_name}
        </span>
        {showNameTooltip && (
          <Tooltip
            anchorId={`traveler${transfer.id}`}
            style={{ borderRadius: '5px' }}
          />
        )}
      </span>
      <span>{transfer.rowText}</span>
      <span>
        <span
          className="location"
          id={`location${transfer.id}`}
          data-tooltip-content={`${transfer.location_title}`}
        >
          {transfer.location_title}
        </span>
        {showLocationTooltip && (
          <Tooltip
            anchorId={`location${transfer.id}`}
            style={{ borderRadius: '5px' }}
          />
        )}
      </span>
      <span>
        <IconGroup transfer={transfer} />
        {showModal && (
          <span>
            <div
              className="overlay"
              onClick={(e) => handleOverlayClick(e)}
            ></div>
            <Modal transfer={transfer} setShowModal={setShowModal} />
          </span>
        )}
      </span>
    </div>
  );
};

export default Row;
