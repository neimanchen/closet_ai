import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Item from './Item.jsx';
import Slider from "react-slick";
import './styles/carousel.css';


export class MyItems extends React.Component {
  constructor(props) {
    super(props);
    this.filteredView = this.filteredView.bind(this);
    this.notFilteredView = this.notFilteredView.bind(this);
  }

  filteredView() {
    return (
      <Grid.Row verticalAlign="middle" centered>
        {this.props.items.map((item) => (
          <Grid.Column key={item.id} mobile={16} computer={5} tablet={8} widescreen={5} largeScreen={5}>
            <Item key={item.id} url={item.url} name={item.name} category={item.category} brand={item.brand}/>
          </Grid.Column>
        ))}
      </Grid.Row>
    )
  }

  notFilteredView() {
    const carouselSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      arrows: true,
      centerMode: false,
      centerPadding: "50px",
      className: 'slides',
    };
    return (
      this.props.categories.map((category) => (
        (this.props.items[category.text]) ?
          <Grid.Row key={`category row ${category.key}`} verticalAlign="middle" centered>
            <Grid.Column width={16}>
              <h2>{category.text}s</h2>
            </Grid.Column>
            <Grid.Column width={16}>
              <Slider {...carouselSettings}>
                  {this.props.items[category.text].map(item  => (
                    <div key={`div ${item.id}`}>
                      <Item url={item.url} name={item.name} category={item.category} brand={item.brand}/>
                    </div>
                  ))}
              </Slider>
            </Grid.Column>
          </Grid.Row>
          :  null
      ))
    );
  }

  render() {
    return (
      <Grid padded divided='vertically'>
        {(this.props.items) ?
          ((Array.isArray(this.props.items)) ? this.filteredView() : this.notFilteredView())
          : (<div>{"Loading..."}</div>)
        }
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  selectedSeasons: state.filter.selectedSeasons,
  selectedColors: state.filter.selectedItemColors,
  selectedBrands: state.filter.selectedItemBrands,
  selectedCategories: state.filter.selectedItemCategories,
  isFiltered: state.closet.isFiltered,
  categories: state.filter.itemCategories || [],
});

MyItems.propTypes  = {
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  categories: PropTypes.array
};

export default withRouter(connect(mapStateToProps)(MyItems));
