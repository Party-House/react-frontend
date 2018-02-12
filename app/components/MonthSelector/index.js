/**
*
* MonthSelector
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function MonthSelector(props) {
  return (
    <div>
      <center>
        <SelectField
          floatingLabelText="Mês"
          onChange={(event, index, value)=>console.log(value)}
          value={Number(props.month)}
        >
          {props.monthsList.map((month, index) => (
            <MenuItem key={index} value={index + 1} primaryText={month} />
          ))}
        </SelectField>
        <SelectField
          floatingLabelText="Ano"
          onChange={(event, index, value)=>props.changeYear(value)}
          value={props.year}
        >
          {props.yearList.map((year) => (
            <MenuItem key={year} value={year} primaryText={year} />
          ))}
        </SelectField>
      </center>
    </div>
  );
}

MonthSelector.propTypes = {
  monthsList: PropTypes.arrayOf(PropTypes.string),
  yearList: PropTypes.arrayOf(PropTypes.string),
  months: PropTypes.string,
  year: PropTypes.string,
};

MonthSelector.defaultProps = {
  monthsList: [],
  yearList: []
};

export default MonthSelector;
