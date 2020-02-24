import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

// shows 4 sushis
const SushiContainer = ({ changePage, sushis, eatSushi, plates }) => {
  console.log(sushis)

  // should destructure sushi object and just pass back the id and price - better to destructure than pass around whole objects
  const renderSushis = (sushis) => {
    return (sushis.map(sushi => (
          <Sushi
            sushi={sushi}
            key={sushi.id}
            eatSushi={eatSushi}
            eaten={plates.includes(sushi) ? true : false}
          />
    ))
    )
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushis(sushis)}
        <MoreButton changePage={changePage} />
      </div>
    </Fragment>
  );
}

export default SushiContainer