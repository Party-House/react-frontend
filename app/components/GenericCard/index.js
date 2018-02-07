/**
*
* GenericCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
function GenericCard(props) {
  return (
    <div>
        <Paper zDepth={3} >
          {props.children}
        </Paper>
    </div>
  );
}

GenericCard.propTypes = {
  children: PropTypes.object
};

export default GenericCard;
