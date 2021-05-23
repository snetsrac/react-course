import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }

  onSearchSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: { part: 'snippet', q: searchTerm, type: 'video' }
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.videos.length > 0 && 
          <div className="ui stackable grid">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
