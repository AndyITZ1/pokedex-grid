import React from 'react'

function PokeCard(props:any) {
    const name = props.name;
    const pictureURL = props.url;

  return (
    <div className="poke-card">
        <img src={pictureURL} alt={name} />
        <h4>{name}</h4>
    </div>
  )
}

export default PokeCard