import React from 'react'

const Error = ({ error }) => {
  return (
    <div className='error'>
      <h2>There was an Error!</h2>
      <div>{error.message}</div>
      <button onClick={() => window.location.reload(false)}>Refresh the Page!</button>
    </div>
  )
}

export default Error