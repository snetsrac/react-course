import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onBodyClick = (event) => {
    if (dropdownRef.current?.contains(event.target)) return;
    
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', onBodyClick);
    return () => document.body.removeEventListener('click', onBodyClick);
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;

    const { label, value } = option;
    return <div key={value} className="item" value={value} onClick={() => onSelectedChange(option)}>{label}</div>;
  });

  return (
    <React.Fragment>
      <div className="ui form">
        <div className="field">
          <label>{label}</label>
          <div
            className={`ui selection dropdown${isOpen ? ' active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            ref={dropdownRef}
          >
            <i className="dropdown icon"></i>
            <div className={`${selected ? '' : ' default'}text`}>{selected.label || label}</div>
            <div className={`menu transition${isOpen ? ' visible' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
