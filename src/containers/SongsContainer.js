import React, { Component } from 'react';
import SongSelector from '../components/SongSelector.js'
import SongDetail from '../components/SongDetail.js'

class SongsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: null,
      selectedSong: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url)
    .then(res => res.json())
    .then(jsonRes => this.setState({songs: jsonRes.feed.entry}))
    .catch(err => console.error)
  }

  handleChange(songIndex){
    const songSelected = this.state.songs[songIndex]
    songSelected.index = parseInt(songIndex) +1
    this.setState({selectedSong: songSelected})
  }

  render() {
    return (
      <div>
      <h2>Songs Container</h2>
      <SongSelector songs ={this.state.songs} onSelect={this.handleChange}/>
      <SongDetail song={this.state.selectedSong} />
      </div>

    )
  }
}

 export default SongsContainer;
