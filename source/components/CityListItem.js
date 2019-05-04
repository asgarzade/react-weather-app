import React from 'react';
import { connect } from 'react-redux';
import { removeCity } from '../actions/cities';

const CityListItem = ({ city, temperature, dispatch, unitSymbol }) => (
    <div className="city-list-item">
        <button className="city-list-item__remove" onClick={() => { dispatch(removeCity(city)) }}> - </button>
        <span className="city-list-item__info">{city}: {temperature}{unitSymbol}</span>
    </div>
); 

export default connect()(CityListItem);