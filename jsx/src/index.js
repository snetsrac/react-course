import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">Enter name: </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
