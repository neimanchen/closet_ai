import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Tab } from 'semantic-ui-react';
import UploadItem from './UploadItem.jsx';
import AddUrl from './AddUrl.jsx';
import { updateStyles } from '../../actions/addItemActions';
import SearchBarcode from './SearchBarcode.jsx';
import Axios from 'axios';

export class AddItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Axios.get('/uploaditeminfo')
    .then((response) => {
      this.props.actions.updateStyles(response.data);
    })
    .catch((err) => {
      this.props.actions.updateStyles(err);
    })
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
          <Tab.Pane>
            <SearchBarcode />
          </Tab.Pane> }
    ]

    return (
      <Tab panes={panes} />
    )
  }
}

const mapStateToProps = state => ({
  styles: state.addItem.styles
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateStyles }, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddItem));
