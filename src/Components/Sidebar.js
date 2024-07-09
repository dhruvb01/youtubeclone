import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const toggle=useSelector((store)=>store.mainreducer.toggle)
  return toggle&&(
    <div className="p-5 shadow-lg w-48 md:w-1/2 lg:w-1/3 xl:w-1/4">
  <h1 className="font-bold">Subscriptions</h1>
  <ul>
    <li>Music</li>
    <li>Sports</li>
    <li>Gaming</li>
    <li>Movies</li>
  </ul>
</div>
  )
}

export default Sidebar