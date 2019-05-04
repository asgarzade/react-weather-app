import React from 'react';
import { connect } from 'react-redux';
import { setCelcius, setFahrenheit, setKelvin } from '../actions/tempUnit';

const UnitSelector = (props) => (
    <div className="unit-selector">
        <form>
            <input
                checked={props.unit == 'kelvin' ? 'checked' : ''} 
                className="unit-selector__radio" 
                type="radio" 
                name="unit" 
                value="kelvin" 
                onChange={() => { props.dispatch(setKelvin()) }} 
            /> Kelvin <br />
            <input 
                className="unit-selector__radio" 
                type="radio" 
                name="unit" 
                value="celcius" 
                onChange={() => { props.dispatch(setCelcius()) }} 
            /> Celcius <br />
            <input 
                className="unit-selector__radio" 
                type="radio" 
                name="unit" 
                value="fahrenheit" 
                onChange={() => { props.dispatch(setFahrenheit()) }} 
            /> Fahrenheit
        </form>
    </div>
);

const mapStateToProps = (state) => ({
    unit: state.temperatureUnit
}); 

export default connect(mapStateToProps)(UnitSelector);