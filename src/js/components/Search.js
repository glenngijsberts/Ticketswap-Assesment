// React deps
import React, { Component } from 'react';

// Assets
import searchLight from '../../assets/img/search.svg';
import searchDark from '../../assets/img/search_darker.svg';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchFocused: false
        }

        this.replaceIcon = this.replaceIcon.bind(this);
        this.submitSearch = this.submitSearch.bind(this);

    }

    // Toggle focus icon
    replaceIcon() {
        this.setState(prevState => ({
            searchFocused: !prevState.searchFocused
        }));
    }

    // Push the input to the parent component
    submitSearch(e) {
        e.preventDefault();

        const input = document.getElementById('search-input').value;

        input == '' ? alert('Make sure to fill in a name') : this.props.requestSearch(input);
    }

    render() {

        const focused = this.state.searchFocused;

        return(
            <form onSubmit={this.submitSearch}>
                <div className="group">
                    <img src={focused ? searchDark : searchLight} alt="Search.." className="search-icon" />
                    <input type="search" className="search-input" id="search-input" onFocus={this.replaceIcon} onBlur={this.replaceIcon} placeholder="Search tracks, artists and albums..." />
                </div>
                <button type="submit" className="button button-green">Search</button>
            </form>
        );

    }

}

export default Search