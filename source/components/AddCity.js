import React from 'react';
import { connect } from 'react-redux';
import { addCity } from '../actions/cities';

class AddCity extends React.Component {
    state = {
        error: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const city = e.target.elements[0].value.trim().toLowerCase();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16596fe956171a7376f2ba91213e3499`;
        
        fetch(url) 
        .then((response) => {
            if (response.ok) {
                this.setState(() => ({ error: "" }));
                return response.json();
            } else {
                this.setState(() => ({ error: "City not found, please try again!" }));
            }
        })
        .then((data) => {
            const kelvin = Math.round(data.main.temp);
            const celcius = kelvin - 273;
            const fahrenheit = Math.round(celcius * 1.8 + 32);
            this.props.dispatch(addCity(city, kelvin, celcius, fahrenheit));
        })
        .catch((error) => {
            
        });
        
        // if (!this.state.error) 
        e.target.elements[0].value = '';
    }
    
    render() {
        return (
            <div className="add-city">
                <form className="" onSubmit={this.handleSubmit}>
                    <input className="add-city__input" type="text" placeholder="Type your city" />
                </form>
                {this.state.error && <p className="add-city__error">{this.state.error}</p>}
            </div>
        )
    }
}

export default connect()(AddCity);