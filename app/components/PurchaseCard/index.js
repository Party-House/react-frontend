/**
*
* PurchaseCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PurchaseCard(props) {
  return (
    <center>
        <ActionInfoOutline />
        <FormattedMessage {...messages.tutorial} />
      <Divider/>
      <SwipeableViews
        enableMouseEvents
        index={props.currentIndex}
        onChangeIndex={(index) => props.updateIndex(index)}
      >
        {props.list.map((purchase, i) => (
          <div key={i}>
            {purchase.items.map((item, j) =>(<div key={`${i}-${j}`}>{item}</div>))}
          </div>
        ))}
      </SwipeableViews>
      <Divider/>
      <br/>
      <div>
        <RaisedButton
          label={<FormattedMessage {...messages.send}/>}
          primary={true}
          onClick={(event)=>props.submit(
            props.list[props.currentIndex].id, props.currentIndex, props.list.length)}/>
      </div>
      <br/>
    </center>
  );
}

PurchaseCard.propTypes = {
  list: PropTypes.array,
  currentIndex: PropTypes.number,
  updateIndex: PropTypes.func,
};

export default PurchaseCard;
