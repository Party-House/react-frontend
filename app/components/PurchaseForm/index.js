/**
*
* PurchaseForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import messages from './messages';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function PurchaseForm(props) {
  return (
    <div>
      <SelectField
          floatingLabelText="Comprador"
          onChange={(event, index, value)=>props.changeBuyer(value)}
          value={props.buyer}
        >
          {props.users.map((user) => (
            <MenuItem key={user.id} value={user.id} primaryText={user.name} />
          ))}
        </SelectField>
    </div>
  );
}

PurchaseForm.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })),
  buyer: PropTypes.number,
};

PurchaseForm.defaultProps = {
  users: []
};

export default PurchaseForm;
