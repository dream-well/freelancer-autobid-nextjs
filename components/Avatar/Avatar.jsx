import React from 'react'

function Avatar({ src }) {
  return (
    <div className='relative'>
      <img src={src} width={48} height={48} />
      <div className='absolute right-1 top-1 w-1 h-1 bg-green rounded-full'></div>
    </div>
  )
}

export default Avatar