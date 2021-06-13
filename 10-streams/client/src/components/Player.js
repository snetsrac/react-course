import React from 'react';
import flvjs from 'flv.js';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    if (flvjs.isSupported()) {
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: this.props.url
      });

      this.flvPlayer.attachMediaElement(this.videoRef.current);
      this.flvPlayer.load();
    }
  }

  componentWillUnmount() {
    this.flvPlayer.destroy();
  }

  render() {
    return <video ref={this.videoRef} style={{ width: '100%' }} controls />;
  }
};

export default Player;
