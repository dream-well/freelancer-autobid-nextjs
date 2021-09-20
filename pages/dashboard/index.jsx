import Mainboard from 'containers/Mainboard/Mainboard'
import Settings from 'containers/Settings/Settings'
import React from 'react'

export default function Dashboard(){
  return (
    <div className='flex flex-row'>
      <Settings />
      <Mainboard />
    </div>
  )
}