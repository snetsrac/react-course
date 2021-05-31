import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchTerm);
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => void setSearchTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
