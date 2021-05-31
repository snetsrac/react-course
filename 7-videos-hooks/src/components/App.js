import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [videos, onSearchSubmit] = useVideos();
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: '1rem' }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      {videos.length > 0 && selectedVideo != null && 
        <div className="ui stackable grid">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
