import React from 'react'

const Button = ({name}) => {
  return (
    <button className="px-5 py-2 m-2 sm:m-4 md:m-5 bg-gray-200 rounded-lg whitespace-nowrap">
      {name}
    </button>
  )
}


export default Button