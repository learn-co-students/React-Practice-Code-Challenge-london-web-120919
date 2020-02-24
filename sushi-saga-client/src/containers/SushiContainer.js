import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

// shows 4 sushis
const SushiContainer = ({ changePage, sushis, eatSushi, plates }) => {
  console.log(sushis)
  return (
    <Fragment>
      <div className="belt">
        {sushis.map((sushi) => < Sushi
          sushi={sushi} key={sushi.id}
          eatSushi={eatSushi}
          plates={plates}
        />)}
        <MoreButton
          changePage={changePage}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer