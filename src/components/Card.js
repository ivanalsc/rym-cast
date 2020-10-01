import React from 'react'

const Card= ({name, type, img}) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <img alt={name} src={img}/>
            <p>Specie: {type} </p>

            
        </div>
    )
}

export default Card