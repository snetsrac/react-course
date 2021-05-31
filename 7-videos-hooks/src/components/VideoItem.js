import React from 'react';

const unescapeHTML = (text) => {
  const domparser = new DOMParser();
  return domparser.parseFromString(text, 'text/html').body.innerText;
}

const VideoItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails } = video.snippet;

  return (
    <div className="item" style={{ cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
      <div className="ui tiny image">
        <img alt={video.snippet.title} src={thumbnails.default.url}  />
      </div>
      <div className="middle aligned content">
        <div
          className="header"
        >{unescapeHTML(title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
