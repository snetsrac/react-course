import { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import items from './items.json';

const App = () => {
  const [activeTab, setActiveTab] = useState('first');

  const onTabClick = (event) => {
    setActiveTab(event.target.attributes['data-tab'].nodeValue);
  };

  const active = (dataTab) => {
    return dataTab === activeTab ? ' active' : '';
  };

  return (
    <div className="app ui container">
      <div className="ui top attached tabular menu">
        <div className={`item${active('first')}`} data-tab="first" onClick={onTabClick}>Accordion</div>
        <div className={`item${active('second')}`} data-tab="second" onClick={onTabClick}>Search</div>
      </div>
      <div className={`ui bottom attached tab segment${active('first')}`} data-tab="first">
        <Accordion items={items} />
      </div>
      <div className={`ui bottom attached tab segment${active('second')}`} data-tab="second">
        <Search />
      </div>
    </div>
  );
};

export default App;
