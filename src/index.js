import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = "AIzaSyCDWLGbQWn_yabIQKPXKTQFyjy7GBoBIEs";

// > this is our first component
// > it will spit out some HTML

// > take the component's generated HTML
// > populate the DOM with the given snippet
const App = () => {
    return (
        <div id="search_bar">
            <p>> Search:</p>
            <SearchBar />
        </div>);
}

// > render the HTML
ReactDOM.render(<App />, document.querySelector('.first-component'));