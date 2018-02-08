/**
*
* DebtsPanel
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import {
  Card, CardHeader, CardText
} from 'material-ui/Card';
import {
  CardStyle, RowColumnStyle,
  DebtHeaderStyle } from './styles';

function DebtsPanel(props) {
  return (
    <div>
      {props.infoList.map((message, index) => (
        <Card key={index}>
          <CardHeader
            title={message.title}
            subtitle={message.subtitle}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {message.details.map((content, con_index) =>
              <div key={`${index}-${con_index}`}>{content}</div>
            )}
          </CardText>
        </Card>
      ))}
    </div>
  );
}

DebtsPanel.propTypes = {
  infoList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node,
    subtitle: PropTypes.node,
    details: PropTypes.arrayOf(PropTypes.node)
  }))
};

DebtsPanel.defaultProps = {
  infoList: []
};

export default DebtsPanel;
