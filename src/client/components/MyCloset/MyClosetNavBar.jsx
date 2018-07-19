import { Menu, Label } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const MyClosetNavBar = (props) => (
    <Menu vertical id="myCloset">
      <Menu.Item  >
        <Menu.Header>My Closet</Menu.Header>
        <Menu.Menu>
          {props.closetCategories.map((closetCategory) => (
            <Menu.Item
              id="closetCategory"
              key={closetCategory}
              name={closetCategory}
              active={props.currentMenuItem === {closetCategory }}
              onClick={props.handleItemClick}
            >
              {/*<Label color='teal'>{itemCount}</Label>*/}
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>My Outfits</Menu.Header>
        <Menu.Menu>
          {props.outfitCategories.map((outfitCategory) => (
            <Menu.Item
              id="outfitCategory"
              key={outfitCategory}
              name={outfitCategory}
              active={props.currentMenuItem === {outfitCategory}}
              onClick={props.handleItemClick}
            >
              {/*<Label color='teal'>{itemCount}</Label>*/}
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );

MyClosetNavBar.propTypes = {
 activeItem: PropTypes.string,
  onClick: PropTypes.func,
  closetCategory: PropTypes.array,
  outfitCategories: PropTypes.array
};

export default withRouter(MyClosetNavBar);
