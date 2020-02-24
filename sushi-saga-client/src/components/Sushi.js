import React, { Fragment } from 'react'

// shows one sushi
const Sushi = ( {sushi, eatSushi, plates} ) => {

    const { img_url, name, price } = sushi
    return (
      <div className="sushi">
        <div className="plate" onClick={ () => eatSushi(sushi)}>
          { plates.includes(sushi) ? null : <img src={img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )
  
}

export default Sushi