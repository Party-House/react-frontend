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
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

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
        menuItems={
          props.finance_links.map((content, index) =>
            <MenuItem
              primaryText={content.message}
              onClick={(event) => content.link()}
            />
          )}
      />
      <MenuItem
        primaryText={<FormattedMessage {...messages.purchases} />}
        leftIcon={<ActionShoppingCart style={SmallIcon}/>}
        rightIcon={<ArrowDropRight/>}
        menuItems={
          props.purchase_links.map((content, index) =>
            <MenuItem
              primaryText={content.message}
              onClick={(event) => content.link()}
            />
          )}
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
