/**
*
* DebtsPanel
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {
  Card, CardHeader, CardText
} from 'material-ui/Card';
import {
  CardStyle, RowColumnStyle,
  DebtHeaderStyle } from './styles';

function DebtsPanel(props) {
  return (
    <div>
      {props.users.map((user, index) => (
        <Card key={index}>
          <CardHeader
            title={props.users[index].user_name}
            subtitle={<FormattedMessage
              {...messages.debtValue}
              values={{debt: props.users[index].debt}}
            />}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <b><FormattedMessage {...messages.paid} /></b> {props.users[index].paid}<br/>
            <b><FormattedMessage {...messages.received} /></b> {props.users[index].received}<br/>
            <b><FormattedMessage {...messages.transfered} /></b> {props.users[index].transfered}<br/>
          </CardText>
        </Card>
      ))}
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
