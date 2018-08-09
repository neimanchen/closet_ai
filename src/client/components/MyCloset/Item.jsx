import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemModal from './ItemModal.jsx';

const Item = (props) => (
  <Card centered raised={true} onClick={() => props.toggle(props.item)}>
    <ItemModal isModalDisplayed={(props.isModalDisplayed)} item={props.modalItem} />
    <Image src={props.item.url} />
    <Card.Content>
      <Card.Header>{props.item.name}</Card.Header>
      <Card.Meta>{props.item.category}</Card.Meta>
      <Card.Description>{props.item.brand}</Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
);

export default Item;
