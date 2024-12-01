import React from 'react'
const Logo = ({logoImg, src, alt, className}) => {
  return (
    <img src={src} alt={alt} className={`${className}`}>{logoImg}</img>
  )
}

export default Logo