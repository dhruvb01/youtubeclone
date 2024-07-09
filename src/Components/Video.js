import React from 'react'

const Video = ({item}) => {
  const {snippet,statistics}=item
  const {channelTitle,title,thumbnails}=snippet
  return (
    <div className='p-2 m-2 w-72 h-80 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="" />
      <ul >
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}view</li>
      </ul>
    </div>
  )
}

export default Video