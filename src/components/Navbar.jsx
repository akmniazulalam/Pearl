import React from 'react'

const Navbar = ({children, className}) => {
    return (
      <>
      <div className={`flex ${className}`}>{children}</div>
      </>
    )
  }

export default Navbar