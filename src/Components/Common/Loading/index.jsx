import React from 'react'
import './style.css'
import LoadingGif from '../../../../Resources/loading.gif'
const Loading = () => {
  return (
    <div className='loading'>
        <div className="gif-wrapper">
            <img src={LoadingGif} />
            <p>Loading some awesome Images...</p>
        </div>
    </div>
  )
}

export default Loading;