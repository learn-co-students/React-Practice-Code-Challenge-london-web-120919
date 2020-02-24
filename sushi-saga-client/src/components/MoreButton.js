import React from 'react'

// shows next 4 plates
const MoreButton = ({ changePage }) => {
    return <button onClick={changePage}>
            More sushi!
          </button>
}

export default MoreButton