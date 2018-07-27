import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Item = (props) => (
  <Card centered raised={true}>
    <Image src={props.image} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
);

export default Item;
