import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let currentValue = '';

class SearchBar extends Component {
    constructor(props ) {
        super(props);
        this.state = { term: '' }
    };

    render() {
        return (
            <div>
                <input onChange={ (event) => this.setState({ term: event.target.value}) }/>
                <br/>
                The current input value is: { JSON.stringify(this.state) }
            </div>
        );
    };

    // Event Handler
    // onInputChange(event) {
    //     currentValue = event.target.value;
    //     console.log(event);
    // }
}
export default SearchBar;