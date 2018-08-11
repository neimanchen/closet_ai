import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Tab } from 'semantic-ui-react';
import UploadItem from './UploadItem.jsx';
import AddUrl from './AddUrl.jsx';
import SearchBarcode from './SearchBarcode.jsx';
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
          <Tab.Pane>
            <SearchBarcode />
          </Tab.Pane> }
    ]

    return (
      <Tab panes={panes} />
    )
  }
}

export default withRouter(AddItem)
