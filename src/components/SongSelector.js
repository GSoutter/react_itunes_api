import React from 'react';

const SongSelector = (props) => {
  if (!props.songs) {
    return null
  }
  const songOption = props.songs.map((song, index) => {
    return <div className="grid-card">
    <img src={song['im:image'][2].label} alt={song.name}/>
    <button value={index} key={index} onClick={handleChange}>{index+1}: {song.title.label}</button>
    </div>
  })

  function handleChange(ev) {
    props.onClick(ev.target.value);
  }

  return (
    <div className="grid-wrapper">
      {songOption}
    </div>
  )
}

export default SongSelector;
