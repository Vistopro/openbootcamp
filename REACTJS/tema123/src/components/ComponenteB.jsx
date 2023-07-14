import React, {useState} from 'react'
import PropTypes from 'prop-types'

function ComponenteB(state) {
    const [connected, setConnected] = useState(state);
    return (
        <div>
        <h3> {connected ? 'Contact online':'Contact disconnected'}</h3>
        <button onClick={() => setConnected(!connected)}>{connected === false ? 'Connect' : 'Disconnect'} </button>
        </div>
    )
}

ComponenteB.propTypes = {
    connected: PropTypes.bool.isRequired,
}


export default ComponenteB