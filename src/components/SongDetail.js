import React from 'react';


const SongDetail = ({song}) => {
  if (!song) {
    return null
  }



  return (
    <div className="item-details">
      <img src={song['im:image'][2].label} alt={song.name}/>
      <div>
        <h2><span className="song-key">Number </span>{song.index}</h2>
        <p><span className="song-key">Title: </span>{song['im:name'].label}</p>
        <p><span className="song-key">Artist: </span>{song['im:artist'].label}</p>
        <p><span className="song-key">Price: </span>{song['im:price'].label}</p>
        <p><span className="song-key">Release Date: </span>{song['im:releaseDate'].attributes.label}</p>
        <p><a href={song.link[0].attributes.href}>See in itunes</a></p>
      </div>
    </div>
  )

}
export default SongDetail;
