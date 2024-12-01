import React from 'react'
import './Single.css'

const Single = ({item}) => {
    const{img,title}=item || {}
  return (
    <div>
      <div className='single overflow-hidden relative '>
        <div className="title text-1xl font-bold">
            {title || "Loading"}
        </div>
       <div className='item-img transition duration-500 mx-auto'>
       <img src={img} alt=""  className='w-[350px] h-[164px]'/>
       </div>
       <div className='link flex justify-center bg-[#00CA52] w-[40%] py-3 hover:text-white hover:bg-[#002140] mx-auto'>
        <a href="" className='transition duration-500'>View more</a>
       </div>
      </div>
    </div>
  )
}

export default Single
