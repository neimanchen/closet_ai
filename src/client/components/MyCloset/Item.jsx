import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemModal from './ItemModal.jsx';

const Item = (props) => (
  <ItemModal trigger={
    <Card centered raised={true} onClick={() => props.toggle(props.item)} draggable={props.drag} onDragStart={e => e.dataTransfer.setData('id', props.item.id)}>
      <Image src={props.item.url} draggable="false" centered/>
      <Card.Content>
        <Card.Header>{props.item.name}</Card.Header>
        <Card.Meta>{props.item.category}</Card.Meta>
        <Card.Description>{props.item.brand}</Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  }
 item={props.modalItem} />
);

export default Item;
