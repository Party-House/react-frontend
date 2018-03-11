/**
*
* TransferForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

function TransferForm(props) {
  return (
    <div>
      <center>
        <div>
          <SelectField
            floatingLabelText={<FormattedMessage {...messages.from} />}
            onChange={(event, index, value)=>props.changePayer(value)}
            value={props.transferInfo.payer_id}
          >
            {props.users.map((user) => (
              <MenuItem key={user.id} value={user.id} primaryText={user.name} />
            ))}
          </SelectField>
        </div>
        <div>
          <SelectField
            floatingLabelText={<FormattedMessage {...messages.to} />}
            onChange={(event, index, value)=>props.changeReceiver(value)}
            value={props.transferInfo.receiver_id}
          >
            {props.users.map((user) => (
              <MenuItem key={user.id} value={user.id} primaryText={user.name} />
            ))}
          </SelectField>
        </div>
        <br />
        <div>
          <TextField
            hintText={<FormattedMessage {...messages.value} />}
            type="number"
            onChange={(event)=> props.changeValue(event.target.value)}
          />
        </div>
      </center>
    </div>
  );
}

TransferForm.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })),
  transferInfo: PropTypes.object,
  changeValue: PropTypes.func,
  changeReceiver: PropTypes.func,
  changePayer: PropTypes.func,
};

TransferForm.defaultProps = {
  users: []
};

export default TransferForm;
