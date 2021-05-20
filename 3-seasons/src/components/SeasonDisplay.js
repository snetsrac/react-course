import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Brr, it\'s chilly!',
    iconName: 'snowflake'
  }
}

const getSeason = (latitude) => {
  const month = new Date().getMonth();

  if (month >= 3 && month <= 8) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude < 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
