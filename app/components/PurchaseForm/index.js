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
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

function PurchaseForm(props) {
  return (
    <div>
      <center>
        <div>
          <TextField
            hintText="Titulo"
            multiLine={true}
            onChange={(event)=> props.changeTitle(event.target.value)}
          />
        </div>
        <div>
          <TextField
            hintText="Descrição"
            multiLine={true}
            onChange={(event)=> props.changeDescription(event.target.value)}
          />
        </div>
        <div>
          <TextField
            hintText="Valor"
            onChange={(event)=> props.changeValue(event.target.value)}
          />
        </div>
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
        <div>
          <DatePicker
            hintText="Data da Compra"
            onChange={(event, date)=>props.changeDate(date)}
            autoOk/>
        </div>
        <div>
          <RaisedButton label={"Enviar"} primary={true} onClick={(event)=>props.submit()}/>
        </div>
        <br/>
      </center>
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
