import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Loader from './components/Loader';

class App extends React.Component {
  state = { latitude: null, errorMessage: '' };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage.length > 0) {
      return (
        <div>Error: {this.state.errorMessage}</div>
      )
    }

    if (this.state.latitude != null) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    return (
      <Loader text="Waiting for your location..." />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
