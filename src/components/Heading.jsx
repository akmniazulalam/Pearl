import React from 'react'

const Heading = ({  h1Text, h1Class, h2Text, h2Class, h3Text, h3Class, h4Text, h4Class, h5Text, h5Class, h6Text, h6Class }) => {
  return (
    <>
      <div>
        {h1Text && <h1 className={h1Class}>{h1Text}</h1>}
        {h2Text && <h2 className={h2Class}>{h2Text}</h2>}
        {h3Text && <h3 className={h3Class}>{h3Text}</h3>}
        {h4Text && <h4 className={h4Class}>{h4Text}</h4>}
        {h5Text && <h5 className={h5Class}>{h5Text}</h5>}
        {h6Text && <h6 className={h6Class}>{h6Text}</h6>}
      </div>
      
    </>

  )
}

export default Heading