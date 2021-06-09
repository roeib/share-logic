import React from "react";

class RPWindowSizeChildren extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }
  getWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { width, height };
  }

  componentDidMount() {
    this.setState(this.getWindowSize());
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.setState(this.getWindowSize());
  };



  render() {
    const { width, height } = this.state;
    return this.props.children(width, height);
  }

  
}

export default RPWindowSizeChildren;
