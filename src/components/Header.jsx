import React from 'react'

const Header = ({children, className}) => {
  return (
    <>
    <div className={`flex ${className}`}>{children}</div>
    </>
  )
}

export default Header