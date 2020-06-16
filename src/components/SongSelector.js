import React from 'react';

const SongSelector = (props) => {
  if (!props.songs) {
    return null
  }
  const songOption = props.songs.map((song, index) => {
    return <option value={index} key={index} >{song.title.label}</option>
  })

  function handleChange(ev) {
    props.onSelect(ev.target.value);
  }

  return (
    <select id="grid-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Song...</option>
      {songOption}
    </select>
  )
}

export default SongSelector;
