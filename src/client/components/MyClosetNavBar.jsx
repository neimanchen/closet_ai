import { Menu, Label } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

export const MyClosetNavBar = (props) => (
    <Menu vertical id="myCloset">
        <Menu.Header>My Closet</Menu.Header>
          {props.closetCategories.map((closetCategory) => (
            <Menu.Item
              id="closetCategory"
              as={Link} to='/mycloset'
              key={closetCategory}
              name={closetCategory}
              active={props.activeItem === {closetCategory}}
              onClick={props.handleItemClick}
            >
              <Label color='teal'>{closetCategory}</Label>
            </Menu.Item>
          ))}
        <Menu.Header>My Outfits</Menu.Header>
          {props.outfitCategories.map((outfitCategory) => (
            <Menu.Item
              id="outfitCategory"
              as={Link} to='/mycloset'
              key={outfitCategory}
              name={outfitCategory}
              active={props.activeItem === {outfitCategory}}
              onClick={props.handleItemClick}
            >
              <Label color='teal'>{outfitCategory}</Label>
            </Menu.Item>
          ))}
    </Menu>
  );

MyClosetNavBar.propTypes = {
 activeItem: PropTypes.string,
  onClick: PropTypes.func,
  closetCategories: PropTypes.array,
  outfitCategories: PropTypes.array
};

export default withRouter(MyClosetNavBar);

