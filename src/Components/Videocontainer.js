import React from 'react'
import usePopularVideos from '../custom hooks/usePopularVideos'
import Video from './Video'
import { Link } from 'react-router-dom'
const Videocontainer = () => {
  const videos=usePopularVideos()
  return (
    <div className='flex flex-wrap w-full'>
    {
      videos.map((item,index)=>{
        return <Link  key={index} to={'/video?v='+item.id}><Video item={item}></Video></Link>
      })
    }
  </div>

  )
}

export default Videocontainer