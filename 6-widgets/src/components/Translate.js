import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import './Translate.css';
import googleTranslate from '../api/googleTranslate';

const SOURCE_LANGUAGE = { label: 'English', value: 'en' };
const INITIAL_LANGUAGE = { label: 'Russian', value: 'ru' };

const Translate = () => {
  const [language, setLanguage] = useState(INITIAL_LANGUAGE);
  const [options, setOptions] = useState([SOURCE_LANGUAGE, INITIAL_LANGUAGE]);
  const [text, setText] = useState('');

  useEffect(() => {
    getLanguages();
  }, []);

  const getLanguages = async () => {
    const { data } = await googleTranslate.get('/languages', {
      params: { target: SOURCE_LANGUAGE.value }
    });

    setOptions(data.data.languages.map((obj) => ({ label: obj.name, value: obj.language })))
  };

  return (
    <div className="translate">
      <div className="ui form">
        <div className="field">
          <label>Enter {SOURCE_LANGUAGE.label} Text</label>
          <input type="text" value={text} onChange={(ev) => setText(ev.target.value)} />
        </div>
      </div>
      <Dropdown label="Select Language" options={options} selected={language} onSelectedChange={setLanguage}
      />
      <div className="ui divider" />
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
