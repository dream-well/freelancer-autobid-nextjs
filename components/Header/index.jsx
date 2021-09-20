import Avatar from 'components/Avatar/Avatar'
import React from 'react'

function Header() {
  return (
    <div className='h-32 w-full flex flex-row pt-12 pr-8 '>
      <div className='text-4xl pl-12'>
        Freelancer.com
      </div>
      <div className='pl-8 flex-grow flex flex-row'>
        <input className='flex-grow'/>
      </div>
      <Avatar />
    </div>
  )
}

export default Header
