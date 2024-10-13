import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className=' bg-gray-200 px-4 py-1 m-2 rounded-md'>{name}</button>
    </div>
  )
}

export default Button