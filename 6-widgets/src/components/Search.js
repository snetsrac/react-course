import React, { useEffect, useState } from 'react';
import wikipedia from '../api/wikipedia';

const SEARCH_DELAY_MS = 500;

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => search(term), SEARCH_DELAY_MS);
    return () => clearTimeout(timer);
  }, [term]);

  const search = async (term) => {
    if (term.length === 0) return setResults([]);

    const response = await wikipedia.get('/api.php', { params: { srsearch: term } });
    setResults(response.data.query.search);
  }


  const renderedResults = results.map((result) => {
    return (
      <a
        key={result.pageid}
        className="ui fluid link card"
        href={encodeURI(`https://en.wikipedia.org/wiki/${result.title.replace(/\s/g, '_')}`)}
      >
        <div className="content">
          <div className="header">{result.title}</div>
          <div className="description">{result.snippet.replace(/<[a-zA-Z0-9="/ ]+>/g, '') + '...'}</div>
        </div>
      </a>
    );
  });

  return (
    <React.Fragment>
      <h4>Search Wikipedia</h4>
      <div className="ui form" >
        <input type="text" value={term} onChange={(ev) => setTerm(ev.target.value)}/>
      </div>
      {renderedResults}
    </React.Fragment>
  );
};

export default Search;
