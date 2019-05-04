const tempUnitReducer = (state = 'kelvin', action) => {
    switch (action.type) {
        case 'SET_KELVIN':
            return 'kelvin';
        case 'SET_CELCIUS':
            return 'celcius';
        case 'SET_FAHRENHEIT':
            return 'fahrenheit'
        default:
            return state;
    }
};

export default tempUnitReducer;