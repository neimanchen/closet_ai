import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateItem } from '../../actions/addItemActions';
import { Form, Tab } from 'semantic-ui-react';
import UploadItem from './UploadItem.jsx';
import AddUrl from './AddUrl.jsx';
import Axios from 'axios';

export class AddItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const panes = [
      { menuItem: 'Upload Item', render: () =>
          <Tab.Pane>
            <UploadItem />
          </Tab.Pane> },
      { menuItem: 'Add via URL', render: () =>
          <Tab.Pane>
            <AddUrl />
          </Tab.Pane> },
      { menuItem: 'Scan Barcode', render: () =>
          <Tab.Pane>Scan Barcode</Tab.Pane> }
    ]

    return (
      <Tab panes={panes} />
    )
  }
}

const mapStateToProps = state => ({
  item: state.closetBoard.item
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateItem }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddItem))
