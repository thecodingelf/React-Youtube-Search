import React, { Component } from 'react';

// Class based component.
class SearchBar extends Component {
    // To inilize state.
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    // Controlled component. Updating content according to input.
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Search..." />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

// --------Notes-------

// Function based component.
// const SearchBar = () => {
// return <input />
// };