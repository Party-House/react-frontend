/**
*
* GenericCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import { CardStyle } from './styles';
function GenericCard(props) {
  return (
    <div>
      <center>
        <Paper style={CardStyle} zDepth={3} >
          {props.children}
        </Paper>
      </center>
    </div>
  );
}

GenericCard.propTypes = {
  children: PropTypes.object
};

export default GenericCard;
