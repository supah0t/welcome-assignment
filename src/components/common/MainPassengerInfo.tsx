import { FC } from 'react';

import { formatDatetime } from '../../utils/formatDatetime';

import type { TransferDetails } from '../desktop/transfers/modal';

import { ReactComponent as Passengers } from '../../../assets/SVG/people.svg';
import { ReactComponent as Clock } from '../../../assets/SVG/Time_Icon.svg';
import { ReactComponent as Plane } from '../../../assets/SVG/plane.svg';
import { ReactComponent as HandLuggage } from '../../../assets/SVG/Hand luggage.svg';
import { ReactComponent as Luggage } from '../../../assets/SVG/Luggage.Icon.svg';
import { ReactComponent as BabySeat } from '../../../assets/SVG/Seat.svg';

import './MainPassengerInfo.css';

const MainPassengerInfo: FC<{ info: TransferDetails; isMobile?: boolean }> = ({
  info,
  isMobile,
}) => {
  const sanitizedTimedate = info.from_datetime.replace('T0', 'T');
  const dateObject = new Date(sanitizedTimedate);
  const { rowText } = formatDatetime(dateObject);
  const monthAndDay = rowText.split(',')[1].trim();

  const fromTime = dateObject.toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const toDatetime = new Date(info.to_datetime.replace('T0', 'T'));
  const toTime = toDatetime.toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={`main-info-content ${isMobile && 'mobile'}`}>
      <h2 className="month-day">{monthAndDay}</h2>
      <div className={`location-info ${isMobile && 'mobile'}`}>
        <div className="circle-and-arrow">
          <span className="circle" />
          <span className="circle" />
        </div>
        <div className="locations">
          <div className="from-locations">
            <div className="first-row">
              <span className="location-title">{info.from_location_title}</span>
              <span className="location-datetime">{fromTime}</span>
            </div>
            <span className="location-address">
              {info.from_location_address}
            </span>
          </div>
          <div className="to-locations">
            <div className="first-row">
              <span className="location-title">{info.to_location_title}</span>
              <span className="location-datetime">{toTime}</span>
            </div>
            <span className="location-address">{info.to_location_address}</span>
          </div>
        </div>
      </div>
      <div className="flight-info">
        <div className={`flight-first-row ${isMobile && 'mobile'}`}>
          <span className="icon-and-text">
            <Passengers />
            {info.passengers}
          </span>
          <span className="icon-and-text">
            <BabySeat />
            {info.babyseats}
          </span>
          <span className="icon-and-text">
            <Luggage />
            {info.luggage}
          </span>
          <span className="icon-and-text">
            <HandLuggage />
            {info.hand_luggage}
          </span>
        </div>
        {info.flight_status && (
          <div className={`flight-second-row ${isMobile && 'mobile'}`}>
            <span className="icon-and-text">
              <Plane />
              {info.flight_status.flight_number}
            </span>
            <span className="separator" />
            <span className="icon-and-text">
              <Clock />
              {info.flight_status.flight_time}
            </span>
            <span className="separator" />
            <span
              className={
                info.flight_status.flight_status === 'On time'
                  ? 'on-time'
                  : 'not-on-time'
              }
            >
              {info.flight_status.flight_status}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPassengerInfo;
