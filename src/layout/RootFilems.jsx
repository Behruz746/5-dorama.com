import React from 'react'
import { Outlet } from 'react-router-dom'

function RootFilems() { 
  return (
    <div className='RootFilems w-full page'>
        <Outlet />
    </div>
  )
}

export default RootFilems