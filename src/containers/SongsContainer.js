import React, { Component } from 'react';


class SongsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    }

  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url)
    .then(res => res.json())
    .then(jsonRes => this.setState({songs: jsonRes.feed.entry}))
  }

  render() {
    return (
      <div>Hello from SongsContainer</div>
    )
  }
}

 export default SongsContainer;
