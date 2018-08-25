import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Image, Grid } from 'semantic-ui-react';

class Outfit extends React.Component {
  getItemFromId(id) {
    let items = this.props.allItemsArray;
    for (let i = 0; i < items.length; i++) {
      if (id === items[i].id) {
        return items[i];
      }
    }
    return {};
  }

  render() {
    let items = (
      <Grid>
        {this.props.itemids.map(id => {
          if (id === null) return '';
          let item = this.getItemFromId(id);
          return (
            <Grid.Column key={`outfit${this.props.id}item${id}`} width={2} >
              <Image src={item.url} alt={item.name} />
            </Grid.Column>
          );
        })}
      </Grid>
    );

    return <Card header={this.props.name} extra={items} fluid />;
  }
}

const mapStateToProps = state => {
  return {
    allItemsArray: state.closet.allItemsArray
  };
};

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Outfit));
