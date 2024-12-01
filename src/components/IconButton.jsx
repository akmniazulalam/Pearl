import React from 'react'

function IconButton({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className={'bg-btnColor py-[13px] px-3 mr-[10px] ml-5 text-white font-rubik flex'}
      >
        {children}
      </button>
    );
  }

export default IconButton