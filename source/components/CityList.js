import React from 'react';
import { connect } from 'react-redux';
import CityListItem from './CityListItem';

const CityList = (props) => (
    <div className="city-list">
        {
            props.cities.map(city => (
                <CityListItem 
                    key={city.name}
                    city={city.name}
                    temperature={city[props.unit]}
                    unitSymbol={props.unit[0].toUpperCase()}
                />
            ))
        }
    </div>
);

const mapStateToProps = (state) => ({
    cities: state.cities,
    unit: state.temperatureUnit
});

export default connect(mapStateToProps)(CityList);