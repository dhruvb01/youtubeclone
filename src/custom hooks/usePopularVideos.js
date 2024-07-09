import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Utils/constants'

const usePopularVideos = () => {
  const[videos,setVideos]=useState([])
const getdata=async()=>{

    const data=await fetch(YOUTUBE_API+process.env.REACT_APP_API_KEY)
    const json=await data.json()
  setVideos(json.items)
}



  useEffect(()=>{
    getdata()
    },[])

    return videos
}

export default usePopularVideos