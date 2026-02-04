import React from 'react'

function Container({className, children}) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
