import React from 'react'

function Loader() {
  return (
    <>
        <div className='container-fluid justify-content-center'>
            <div className="text-center spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
      </>
  )
}

export default Loader