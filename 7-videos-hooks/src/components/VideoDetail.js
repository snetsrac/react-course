import './VideoDetail.css';
import React from 'react';

const unescapeHTML = (text) => {
  const domparser = new DOMParser();
  return domparser.parseFromString(text, 'text/html').body.innerText;
}

const VideoDetail = ({ video }) => {
  const { title, description } = video.snippet;

  return (
    <div>
      <div className="video-detail-player">
        <iframe
          title="Video Player"
          type="text/html"
          src={`http://www.youtube.com/embed/${video.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h3>{unescapeHTML(title)}</h3>
        <p>{unescapeHTML(description)}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
