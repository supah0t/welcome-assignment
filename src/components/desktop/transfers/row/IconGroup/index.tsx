import { FC } from 'react';

import { ReactComponent as Baby } from '../../../../../../assets/SVG/baby.svg';
import { ReactComponent as Car } from '../../../../../../assets/SVG/transfer.svg';
import { ReactComponent as Sun } from '../../../../../../assets/SVG/early check in.svg';
import { ReactComponent as Moon } from '../../../../../../assets/SVG/late check out.svg';

import './style.css';

import type { TransferAfterFormat } from '../../../../../utils/formatDatetime';

const IconGroup: FC<{
  transfer: TransferAfterFormat;
  withText?: boolean;
}> = ({ transfer, withText = false }) => {
  return (
    <div className={`opportunities ${withText && 'column-direction'}`}>
      {transfer.babies && (
        <span className="flex">
          <Baby width={30} height={30} /> {withText && 'Babies'}
        </span>
      )}
      {transfer.return_transfer && (
        <span className="flex">
          <Car width={30} height={30} />
          {withText && 'Return transfer'}
        </span>
      )}
      {transfer.early_checkin && (
        <span className="flex">
          <Sun width={30} height={30} />
          {withText && 'Early check-in'}
        </span>
      )}
      {transfer.late_checkout && (
        <span className="flex">
          <Moon width={30} height={30} />
          {withText && 'Late check-out'}
        </span>
      )}
    </div>
  );
};

export default IconGroup;
