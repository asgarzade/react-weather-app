export const addCity = (name, kelvin, celcius, fahrenheit) => ({
    type: 'ADD_CITY',
    city: {
        name,
        kelvin,
        celcius,
        fahrenheit
    }
});

export const removeCity = (cityName) => ({
    type: 'REMOVE_CITY',
    cityName
})