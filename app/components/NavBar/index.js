/**
*
* NavBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { SmallIcon } from './styles';

import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

function NavBar(props) {
  const leftMenu = (
    <IconMenu
      iconButtonElement={
        <IconButton><NavigationMenu color={'#FFFFFF'}/></IconButton>}
    >
      <MenuItem
        primaryText={<FormattedMessage {...messages.finance} />}
        leftIcon={<EditorAttachMoney style={SmallIcon}/>}
        rightIcon={<ArrowDropRight/>}
        menuItems={[
          <MenuItem
            primaryText={<FormattedMessage {...messages.overallDebt} />}
            onClick={(event) => props.overallDebtRedirect()}
          />,
          <MenuItem
            primaryText={<FormattedMessage {...messages.addPurchase} />}
            onClick={(event) => props.addPurchaseRedirect()}
          />,
          <MenuItem
            primaryText={<FormattedMessage {...messages.monthlyPurchase} />}
            onClick={(event) => props.monthlyPurchaseRedirect()}
          />,
          <MenuItem
            primaryText={<FormattedMessage {...messages.bankDetails} />}
            onClick={(event) => props.bankDetailsRedirect()}
          />
        ]}
      />
    </IconMenu>
  );
  return (
    <div>
      <AppBar
        title={<FormattedMessage {...messages.title} />}
        iconElementLeft={leftMenu}
      />
    </div>
  );
}

NavBar.propTypes = {
  overallDebtRedirect: PropTypes.func,
  addPurchaseRedirect: PropTypes.func,
  bankDetailsRedirect: PropTypes.func
};

export default NavBar;
