import React from 'react'
import { Header, Image, Modal, Icon } from 'semantic-ui-react'
import { bindActionCreators } from "redux";
import { updatedModalState } from "../../actions/myClosetActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.editItemName=this.editItemName.bind(this);
    this.editItemBrand=this.editItemBrand.bind(this);
    this.editItemDescription=this.editItemDescription.bind(this);
    this.editItemPrice=this.editItemPrice.bind(this);
    this.editItemPurchaseDate=this.editItemPurchaseDate.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.close=this.close.bind(this);
  }

  editItemName() {
    //make server call to edit the item
  }

  editItemBrand() {
    //make server call to edit the item
  }

  editItemDescription() {
    //make server call to edit the item
  }

  editItemPrice() {
    //make server call to edit the item
  }

  editItemPurchaseDate() {
    //make server call to edit the item
  }

  deleteItem() {
    //make server call to edit the item
  }

  close() {
    //save item on close?
  }

  render() {
    return (
      (this.props.item) ?
        <Modal
          closeIcon
          centered={false}
          closeOnEscape={true}
          closeOnDimmerClick={true}
          onClose={this.close}
          trigger={this.props.trigger}
        >
          <Modal.Header>View/Edit Item</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.item.url}/>
            <Modal.Description>
              <Header>{this.props.item.name} <Icon link name='edit outline' onClick={this.editItemName}/></Header>
              <p>Brand: {this.props.item.brand} <Icon link name='edit outline' onClick={this.editItemBrand} /></p>
              <p>Description: {this.props.item.description} <Icon link name='edit outline' onClick={this.editItemDescription} /></p>
              <p>Price: {this.props.item.price} <Icon link name='edit outline' onClick={this.editItemPrice} /></p>
              <p>Date purchased: {this.props.item.purchaseDate} <Icon link name='edit outline' onClick={this.editItemPurchaseDate} /></p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        : null
    );
  }
}


ItemModal.propTypes  = {
  isModalDisplayed: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isModalDisplayed: state.item.isModalDisplayed,
    currentModalItem: state.item.currentModalItem,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updatedModalState,
  }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemModal));


