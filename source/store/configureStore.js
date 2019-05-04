import { createStore, combineReducers } from 'redux';
import citiesReducer from '../reducers/cities';
import tempUnitReducer from '../reducers/tempUnit';

export default () => {
    const store = createStore(
        combineReducers({
            cities: citiesReducer,
            temperatureUnit: tempUnitReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}