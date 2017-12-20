/**
*
* DebtsPanel
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { CardStyle } from './styles';

function DebtsPanel(props) {
  return (
    <div>
      <center>
        <Paper style={CardStyle} zDepth={3} >
          <Table>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Nome</TableHeaderColumn>
                <TableHeaderColumn>Pago</TableHeaderColumn>
                <TableHeaderColumn>A pagar</TableHeaderColumn>
                <TableHeaderColumn>Recebido</TableHeaderColumn>
                <TableHeaderColumn>Transferido</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {props.users.map((user) => {
                 <TableRow>
                  <TableRowColumn>{user.name}</TableRowColumn>
                  <TableRowColumn>{user.paid}</TableRowColumn>
                  <TableRowColumn>{user.debt}</TableRowColumn>
                  <TableRowColumn>{user.received}</TableRowColumn>
                  <TableRowColumn>{user.transfered}</TableRowColumn>
                </TableRow>
              })}
            </TableBody>
          </Table>
        </Paper>
      </center>
    </div>
  );
}

DebtsPanel.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    paid: PropTypes.number,
    debt: PropTypes.number,
    received: PropTypes.number,
    transfered: PropTypes.number,
  }))
};

DebtsPanel.defaultProps = {
  users: []
};

export default DebtsPanel;
