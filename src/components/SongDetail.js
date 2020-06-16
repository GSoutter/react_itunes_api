import React from 'react';


const SongDetail = ({song}) => {
  if (!song) {
    return null
  }



  return (
    <div>
      <h2>Song Detail</h2>
      <img src={song['im:image'][2].label} alt={song.name}/>
      <p>Number: {song.index}</p>
      <p>Title: {song['im:name'].label}</p>
      <p>Artist: {song['im:artist'].label}</p>
      <p>Price: {song['im:price'].label}</p>
      <p>Release Date: {song['im:releaseDate'].attributes.label}</p>
      <p><a href={song.link[0].attributes.href}>Link</a></p>


    </div>
  )

}
export default SongDetail;
