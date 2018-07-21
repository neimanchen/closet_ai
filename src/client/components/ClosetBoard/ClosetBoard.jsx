import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Grid, Segment } from 'semantic-ui-react';
import Weather from './Weather.jsx';

export class ClosetBoard extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {
    return (
      <div>
        <Header as='h1'>Closet Board</Header>
        <Grid columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>Today's recommended outfit</Segment>
            </Grid.Column>
            <Grid.Column>
              <Weather/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>Recently added outfits</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Items you haven't worn in a while</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.closetBoard.weather
});

export default withRouter(connect(mapStateToProps)(ClosetBoard))
