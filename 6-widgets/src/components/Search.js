import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm ] = useState('');
  const [results, setResults] = useState([]);

  const search = async (term) => {
    const response = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        srsearch: term,
        origin: '*'
      }
    });

    return response.data.query.search;
  }

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setResults(await search(term));
  };
  
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const renderedResults = results.map((result, i) => {
    return (
      <div key={i} className="ui segment">
        <h5>{result.title}</h5>
        <div>{result.snippet.replace(/<[a-zA-Z0-9="/ ]+>/g, '') + '...'}</div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <h4>Search</h4>
      <form className="ui form" onSubmit={onFormSubmit}>
        <input type="text" value={term} onChange={onInputChange}/>
      </form>
      {renderedResults}
    </React.Fragment>
  );
};

export default Search;
