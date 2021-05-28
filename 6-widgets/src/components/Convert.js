import React, { useEffect, useState } from "react";
import googleTranslate from '../api/googleTranslate';

const TRANSLATE_DELAY_MS = 1000;

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedText(text), TRANSLATE_DELAY_MS);
    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    translate(debouncedText, language);
  }, [debouncedText, language]);

  const translate = async (text, language) => {
    if (text.length === 0 || !language) return setTranslated('');

    const { data } = await googleTranslate.post('', {
      q: text,
      target: language.value
    });

    setTranslated(data.data.translations[0].translatedText);
  };

  return (
    <div>
      <h5 className="ui header">Translated Text</h5>
      <p className="convert-text">{translated || '\u00A0'}</p>
    </div>
  );
};

export default Convert;
