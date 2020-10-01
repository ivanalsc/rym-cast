import React from 'react'

const Card= ({name, type, img, status}) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <img alt={name} src={img}/>
            <p>Specie: {type} </p>
            <p className={status === 'Alive' ? 'alive' : status === 'Dead' ? 'dead' : 'unknown'}>{status}</p>

            
        </div>
    )
}

export default Card