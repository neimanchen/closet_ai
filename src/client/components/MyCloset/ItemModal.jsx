import React from 'react';
import { Header, Image, Modal, Icon, Input } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { updatedModalState } from '../../actions/myClosetActions';
import {
  toggleItemNameField,
  toggleItemBrandField,
  toggleItemDescriptionField,
  toggleItemPriceField,
  toggleItemPurchaseDateField,
  toggleItemColorField,
  toggleItemCategoryField,
} from '../../actions/modalActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggleItemName=this.toggleItemName.bind(this);
    this.toggleItemBrand=this.toggleItemBrand.bind(this);
    this.toggleItemDescription=this.toggleItemDescription.bind(this);
    this.toggleItemPrice=this.toggleItemPrice.bind(this);
    this.toggleItemPurchaseDate=this.toggleItemPurchaseDate.bind(this);
    this.toggleItemColor=this.toggleItemColor.bind(this);
    this.toggleItemCategory=this.toggleItemCategory.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.close=this.close.bind(this);
  }

  toggleItemName() {
    this.props.actions.toggleItemNameField(!this.props.nameToggle);
    //make server call to edit the item
  }

  toggleItemBrand() {
    this.props.actions.toggleItemBrandField(!this.props.brandToggle);
    //make server call to edit the item
  }

  toggleItemDescription() {
    this.props.actions.toggleItemDescriptionField(!this.props.descriptionToggle);
    //make server call to edit the item
  }

  toggleItemPrice() {
    this.props.actions.toggleItemPriceField(!this.props.priceToggle);
    //make server call to edit the item
  }

  toggleItemColor() {
    this.props.actions.toggleItemColorField(!this.props.colorToggle);
    //make server call to edit the item
  }

  toggleItemCategory() {
    this.props.actions.toggleItemCategoryField(!this.props.categoryToggle);
    //make server call to edit the item
  }

  toggleItemPurchaseDate() {
    this.props.actions.toggleItemPurchaseDateField(!this.props.purchaseDateToggle);
    //make server call to edit the item
  }

  deleteItem() {
    //make server call to edit the item
  }

  close() {
    this.props.actions.toggleItemNameField(false);
    this.props.actions.toggleItemBrandField(false);
    //save item on close?
  }


  render() {
      const inlineStyle = {
        modal: {
          margin: '0',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    return (
      (this.props.item) ?
        <Modal
          closeIcon
          centered={false}
          closeOnEscape={true}
          closeOnDimmerClick={true}
          onClose={this.close}
          trigger={this.props.trigger}
          style={inlineStyle.modal}
        >
          <Modal.Header>View/Edit Item</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.item.url}/>
            <Modal.Description>
              <Header> {(this.props.nameToggle) ?
                <div>Name: <Input icon={<Icon name='checkmark' link onClick={this.toggleItemName}/>} defaultValue={this.props.item.name} size='mini'/></div> :
                <div>Name: {this.props.item.name} <Icon link name='edit outline' onClick={this.toggleItemName} size='small'/> </div>}
              </Header>
              <div>{(this.props.brandToggle) ?
                <div>Brand: <Input icon={<Icon name='checkmark' link onClick={this.toggleItemBrand}/>} defaultValue={this.props.item.brand} size='mini'/></div> :
                <div>Brand: {this.props.item.brand} <Icon link name='edit outline' onClick={this.toggleItemBrand} size='small'/> </div>}
              </div>
              <div>{(this.props.colorToggle) ?
                <div>Color: <Input icon={<Icon name='checkmark' link onClick={this.toggleItemColor}/>} defaultValue={this.props.item.color} size='mini'/></div> :
                <div>Color: {this.props.item.color} <Icon link name='edit outline' onClick={this.toggleItemColor} size='small'/> </div>}
              </div>
              <div>{(this.props.categoryToggle) ?
                <div>Category: <Input icon={<Icon name='checkmark' link onClick={this.toggleItemCategory}/>} defaultValue={this.props.item.category} size='mini'/></div> :
                <div>Category: {this.props.item.category} <Icon link name='edit outline' onClick={this.toggleItemCategory} size='small'/> </div>}
              </div>
              <div>{(this.props.descriptionToggle) ?
                <div>Description: <Input icon={<Icon name='checkmark' link onClick={this.toggleItemDescription}/>} defaultValue={this.props.item.description} size='mini'/></div> :
                <div>Description: {this.props.item.description} <Icon link name='edit outline' onClick={this.toggleItemDescription} size='small'/> </div>}
              </div>
              <div>{(this.props.priceToggle) ?
                <div>Price: <Input icon={<Icon name='checkmark' link onClick={this.toggleItemPrice}/>} defaultValue={this.props.item.price} size='mini'/></div> :
                <div>Price: {this.props.item.price} <Icon link name='edit outline' onClick={this.toggleItemPrice} size='small'/> </div>}
              </div>
              <div>{(this.props.purchaseDateToggle) ?
                <div>Date purchased: <Input icon={<Icon name='checkmark' link onClick={this.toggleItemPurchaseDate}/>} defaultValue={this.props.item.purchaseDate} size='mini'/></div> :
                <div>Date purchased: {this.props.item.purchaseDate} <Icon link name='edit outline' onClick={this.toggleItemPurchaseDate} size='small'/> </div>}
              </div>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        : null
    );
  }
}


ItemModal.propTypes  = {
  isModalDisplayed: PropTypes.bool.isRequired,
  nameToggle: PropTypes.bool.isRequired,
  brandToggle: PropTypes.bool.isRequired,
  descriptionToggle: PropTypes.bool.isRequired,
  priceToggle: PropTypes.bool.isRequired,
  purchaseDateToggle: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isModalDisplayed: state.item.isModalDisplayed,
    currentModalItem: state.item.currentModalItem,
    nameToggle: state.item.nameToggle,
    brandToggle: state.item.brandToggle,
    descriptionToggle: state.item.descriptionToggle,
    priceToggle: state.item.priceToggle,
    purchaseDateToggle: state.item.purchaseDateToggle,
    categoryToggle: state.item.categoryToggle,
    colorToggle: state.item.colorToggle,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updatedModalState,
    toggleItemNameField,
    toggleItemBrandField,
    toggleItemDescriptionField,
    toggleItemPriceField,
    toggleItemPurchaseDateField,
    toggleItemColorField,
    toggleItemCategoryField,
  }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemModal));


