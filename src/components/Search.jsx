import React from 'react';

class Search extends React.Component {

    state = {
        search: ''
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.updateSearch(this.state.search);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        placeholder='search'
                        type='search'
                        className="validate"
                        value={this.state.search}
                        onChange={(event) => this.setState({ search: event.target.value })}
                        onKeyDown={this.handleKey}

                    />
                    <button className="btn search-btn" onClick={() => this.props.updateSearch(this.state.search)}>Search</button>
                </div>
            </div>
        );
    }

}


export default Search;