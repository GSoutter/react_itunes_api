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
        {/* <p><span className="song-key">Release Date: </span>{song['im:collection']['im:name'].label}</p> */}
        <p><span className="song-key">Preview: </span>


            </p>
        <p><a href={song.link[0].attributes.href}>See in itunes</a></p>

        <audio className="audio-player"
             controls
             src={song.link[1].attributes.href}>
                 Your browser does not support the
                 <code>audio</code> element.

              <source src={song.link[1].attributes.href} type={song.link[1].attributes.type}/>
         </audio>

      </div>
    </div>
  )

}
export default SongDetail;
