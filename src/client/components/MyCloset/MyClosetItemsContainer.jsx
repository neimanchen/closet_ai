import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
// import MyClosetItems from './MyClosetItems';
import { withRouter } from 'react-router-dom';
import MyClosetFilters from './MyClosetFilters.jsx';


export const MyClosetItemsContainer = (props) => {
  return (
    <div>
      <MyClosetFilters />
      {/*<MyClosetItems />*/}
    </div>
  );
}

const mapStateToProps = state => ({
  currentMenuItem: state.closet.currentMenuItem
});

const mapDispatchToProps = dispatch => ({
  actions: '',
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyClosetItemsContainer))
