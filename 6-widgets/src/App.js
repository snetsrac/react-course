import { useEffect, useState } from 'react';
import TabLink from './components/TabLink';
import TabRoute from './components/TabRoute';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import items from './items.json';
import options from './options.json';

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setCurrentPath(window.location.pathname);
    });
  }, []);  

  return (
    <div className="app ui container">
      <div className="ui top attached tabular menu">
        <TabLink path="/" name="Accordion" onPathChange={setCurrentPath} />
        <TabLink path="/search" name="Search" onPathChange={setCurrentPath} />
        <TabLink path="/dropdown" name="Dropdown" onPathChange={setCurrentPath} />
        <TabLink path="/translate" name="Translate" onPathChange={setCurrentPath} />
      </div>
      <TabRoute path="/" currentPath={currentPath}>
        <Accordion items={items} />
      </TabRoute>
      <TabRoute path="/search" currentPath={currentPath}>
        <Search />
      </TabRoute>
      <TabRoute path="/dropdown" currentPath={currentPath}>
        <Dropdown
          label="Select color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <p style={{ color: selected.value, marginTop: '1rem' }}>The text is {selected.label}!</p>
      </TabRoute>
      <TabRoute path="/translate" currentPath={currentPath}>
        <Translate />
      </TabRoute>
    </div>
  );
};

export default App;
