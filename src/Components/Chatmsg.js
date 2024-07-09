import React from 'react'
import { Usericon } from '../Utils/constants'
const Chatmsg = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
         <div className="col-span-1 inline-block">
          <img className="h-6 bg-slate-400 rounded-full" src={Usericon} alt="" />
          </div>
          <span className='font-bold px-2'>{name}</span>
          <span>{message}</span>
    </div>
  )
}

export default Chatmsg