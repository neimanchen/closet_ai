import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'semantic-ui-react';
import { updateUnwornItems } from '../../actions/closetBoardActions';
import Item from './Item.jsx';

class UnwornItems extends React.Component {
  constructor(props) {
    super(props);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UnwornItems));
