import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onTitleClick = (i) => {
    setActiveItem(i !== activeItem ? i : null);
  };

  const renderedItems = items.map(({ title, content }, i) => {
    const active = i === activeItem ? ' active' : '';
    const paragraphs = content.split(/\n|\r\n/).map((text, i) => {
      return <p key={i}>{text}</p>;
    });

    return (
      <React.Fragment key={i}>
        <div className={`title${active}`} onClick={() => onTitleClick(i)}>
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className={`content${active}`}>
          {paragraphs}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
