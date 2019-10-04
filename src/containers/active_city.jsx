import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ActiveCity extends Component {



  render() {

      const image = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;

    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={image} width="100%"/>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
