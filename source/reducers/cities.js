// dummy data
// const defaultState = [
//     {
//         name: 'baku',
//         kelvin: 294,
//         celcius: 21,
//         fahrenheit: 65
//     },
//     {
//         name: 'paris',
//         kelvin: 292,
//         celcius: 19,
//         fahrenheit: 60
//     },
//     {
//         name: 'london',
//         kelvin: 288,
//         celcius: 15,
//         fahrenheit: 52
//     },
//     {
//         name: 'milan',
//         kelvin: 296,
//         celcius: 23,
//         fahrenheit: 70
//     },
// ]

const citiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CITY':
            let index = state.findIndex(city => city.name == action.city.name);
            if (index == -1) return [...state, action.city];
        case 'REMOVE_CITY':
            return state.filter((city) => city.name != action.cityName);
        default:
            return state;
    }
}

export default citiesReducer;