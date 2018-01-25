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
import {
  CardStyle, RowColumnStyle,
  DebtHeaderStyle } from './styles';

function DebtsPanel(props) {
  return (
    <div>
      <center>
        <Paper style={CardStyle} zDepth={3} >
          <Table>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>
                  <FormattedMessage {...messages.name} />
                </TableHeaderColumn>
                <TableHeaderColumn style={DebtHeaderStyle}>
                  <FormattedMessage {...messages.debt} />
                </TableHeaderColumn>
                <TableHeaderColumn>
                  <FormattedMessage {...messages.paid} />
                </TableHeaderColumn>
                <TableHeaderColumn>
                  <FormattedMessage {...messages.received} />
                </TableHeaderColumn>
                <TableHeaderColumn>
                  <FormattedMessage {...messages.transfered} />
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {props.users.map((user, index) => (
                <TableRow hoverable key={index}>
                  <TableRowColumn style={RowColumnStyle}>
                    {user.user_name}
                  </TableRowColumn>
                  <TableRowColumn style={RowColumnStyle}>
                    {user.debt}
                  </TableRowColumn>
                  <TableRowColumn style={RowColumnStyle}>
                    {user.paid}
                  </TableRowColumn>
                  <TableRowColumn style={RowColumnStyle}>
                    {user.received}
                  </TableRowColumn>
                  <TableRowColumn style={RowColumnStyle}>
                    {user.transfered}
                  </TableRowColumn>
                </TableRow>
              ))}
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
    paid: PropTypes.string,
    debt: PropTypes.string,
    received: PropTypes.string,
    transfered: PropTypes.string,
  }))
};

DebtsPanel.defaultProps = {
  users: []
};

export default DebtsPanel;
