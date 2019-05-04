import React from 'react';
import AddCity from './AddCity';
import CityList from './CityList';
import UnitSelector from './UnitSelector';

const WeatherApp = () => (
    <div className="weather-container">
        <AddCity />
        <UnitSelector />
        <CityList />
    </div>
);

export default WeatherApp;