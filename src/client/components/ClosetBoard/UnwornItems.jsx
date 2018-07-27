import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'semantic-ui-react';
import { updateUnwornItems } from '../../actions/closetBoardActions';
import Item from './Item.jsx';
import unwornItems from '../../../database/unworn_data';
import PropTypes from 'prop-types';

class UnwornItems extends React.Component {
  constructor(props) {
    super(props);
    this.getUnwornItems = this.getUnwornItems.bind(this);
  }
  componentWillMount() {
    this.getUnwornItems();
  }

  getUnwornItems() {
    // mock data
    this.props.actions.updateUnwornItems(unwornItems);
  }

  render() {
    return (
      <Card.Group itemsPerRow={2}>
        {this.props.unwornItems.map((item) => (
            <Item key={item.id} name={item.name} image={item.url}/>
          )
        )}
      </Card.Group>
    );
  }
}
const mapStateToProps = state => ({
  unwornItems: state.closetBoard.unwornItems
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateUnwornItems }, dispatch)
});

unwornItems.propTypes  = {
  items: PropTypes.array.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UnwornItems));
