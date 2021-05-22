import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={(event) => this.setState({ searchTerm: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
