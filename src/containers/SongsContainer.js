import React, { Component } from 'react';


class SongsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    }

  }

  render() {
    return (
      <div>Hello from SongsContainer</div>
    )
  }
}

 export default SongsContainer;
