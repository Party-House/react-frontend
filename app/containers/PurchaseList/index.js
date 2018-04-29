/**
 *
 * PurchaseList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectPurchaseList from './selectors';
import reducer from './reducer';
import { getPurchaseList } from './actions';
import messages from './messages';
import PurchaseCard from '../../components/PurchaseCard';
import GenericCard from '../../components/GenericCard';

export class PurchaseList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    return this.props.dispatch(getPurchaseList());
  }

  render() {
    return (
      <div>
        <GenericCard>
          <PurchaseCard
            list={this.props.purchaselist.list}
            listIndex={this.props.purchaselist.currentIndex}
            updateIndex={()=>updateIndex(
              this.props.purchaselist.list.length,
              this.props.purchaselist.currentIndex)}
          />
        </GenericCard>
      </div>
    );
  }
}

PurchaseList.propTypes = {
  purchaselist: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  purchaselist: makeSelectPurchaseList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'purchaseList', reducer });

export default compose(
  withReducer,
  withConnect,
)(PurchaseList);
