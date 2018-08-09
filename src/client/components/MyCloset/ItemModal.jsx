import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const ItemModal = (props) => (
  (props.item) ?
    <Modal open={props.isModalDisplayed}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.item.url} />
      <Modal.Description>
        <Header>{props.item.name}</Header>
        <p>Brand: {props.item.brand}</p>
        <p>Description: {props.item.description}</p>
        <p>Price: {props.item.price}</p>
        <p>Date purchased: {props.item.purchaseDate}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
    : null
);

export default ItemModal;
