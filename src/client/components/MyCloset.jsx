import React from 'react';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem} from '../actions/addItem'

export class MyCloset extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <h1>My Closet</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.addItem.items
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({addItem}, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyCloset))
