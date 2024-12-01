import React from 'react'

const Paragraph = ({ptext,className}) => {
  return (
    <p className={`${className}`}>{ptext}</p>
  )
}

export default Paragraph