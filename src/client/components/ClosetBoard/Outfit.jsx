import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Outfit = (props) => (
  <Card centered>
    <Image src={props.image}/>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
    </Card.Content>
  </Card>
);

export default Outfit;
