import React, { Component } from 'react';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        <li className="list-group-item"> {this.props.city.name}</li>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
