import React from 'react'

const loading = () => {
  return (
      <div className="absolute inset-0 flex items-center justify-center">
          <div className="spinner_status" role="status">
              <span className="spinner_loading">Loading...</span>
          </div>
      </div>
  )
}

export default loading