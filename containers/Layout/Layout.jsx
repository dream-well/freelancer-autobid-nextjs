import Header from 'components/Header'
import React from 'react'

function Layout({ children }) {
  return (
    <div className='flex flex-col'>
      <Header />
      {
        children
      }
    </div>
  )
}

export default Layout
