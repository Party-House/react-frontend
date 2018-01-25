/**
*
* PurchaseForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PurchaseForm() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PurchaseForm.propTypes = {

};

export default PurchaseForm;
