import { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import items from './items.json';
import options from './options.json';

const App = () => {
  const [activeTab, setActiveTab] = useState('first');

  const onTabClick = (event) => {
    setActiveTab(event.target.attributes['data-tab'].nodeValue);
  };

  const active = (dataTab) => {
    return dataTab === activeTab ? ' active' : '';
  };
  
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="app ui container">
      <div className="ui top attached tabular menu">
        <div className={`item${active('first')}`} data-tab="first" onClick={onTabClick}>Accordion</div>
        <div className={`item${active('second')}`} data-tab="second" onClick={onTabClick}>Search</div>
        <div className={`item${active('third')}`} data-tab="third" onClick={onTabClick}>Dropdown</div>
        <div className={`item${active('fourth')}`} data-tab="fourth" onClick={onTabClick}>Translate</div>
      </div>
      <div className={`ui bottom attached tab segment${active('first')}`} data-tab="first">
        <Accordion items={items} />
      </div>
      <div className={`ui bottom attached tab segment${active('second')}`} data-tab="second">
        <Search />
      </div>
      <div className={`ui bottom attached tab segment${active('third')}`} data-tab="third">
        <Dropdown
          label="Select Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <p style={{ color: selected.value, marginTop: '1rem' }}>The text is {selected.label}!</p>
      </div>
      <div className={`ui bottom attached tab segment${active('fourth')}`} data-tab="fourth">
        <Translate />
      </div>
    </div>
  );
};

export default App;
