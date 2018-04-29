/**
*
* PurchaseCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PurchaseCard(props) {
  return (
    <SwipeableViews enableMouseEvents>
      {props.list.map((purchase, i) => (
        <div key={i}>
          {purchase.items.map((item, j) =>(<div key={`${i}-${j}`}>{item}</div>))}
        </div>
      ))}
    </SwipeableViews>
  );
}

PurchaseCard.propTypes = {
  list: PropTypes.array,
  listIndex: PropTypes.number,
  updateIndex: PropTypes.func,
};

export default PurchaseCard;
