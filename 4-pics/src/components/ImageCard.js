import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = { spans: null };
  }

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
    
    // const observer = new ResizeObserver(this.setSpans);

    // this.imgRef.current.addEventListener('load', () => {
    //   observer.observe(this.imgRef.current);
    // });
  };

  setSpans = () => {
    const height =  this.imgRef.current.clientHeight;
    const rem = Number(getComputedStyle(document.querySelector('html')).fontSize.match(/\d+/).join());
    const spans = Math.ceil(height + rem);
    this.setState({ spans });
  }

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.regular} alt={alt_description} ref={this.imgRef} />
      </div>
    );
  }
};

export default ImageCard;
