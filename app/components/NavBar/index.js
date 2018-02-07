/**
*
* NavBar
*
*/

import React from 'react';
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

};

export default NavBar;
