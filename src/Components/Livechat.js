import { useEffect, useState } from "react"
import Chatmsg from "./Chatmsg"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../Utils/store/chatSlice"
import { newQuote,generate } from "../Utils/helper"
const Livechat=()=>{
    const [liveMessage,setLiveMessage]=useState('')
const dispatch=useDispatch()
const messages=useSelector((store)=>store.chatReducer.messages)
useEffect(()=>{
const timer=setInterval(()=>{
dispatch(addMessage({
    name:generate(),message:newQuote()
}))
},1000)

return ()=>{
    clearTimeout(timer)
}

},[])

    return (<>
        <div className="w-full h-[550px] flex flex-col-reverse overflow-y-scroll ml-2 p-2 border border-black bg-slate-100 rounded-lg">
          {
            messages.map((m, index) => (
              <Chatmsg key={index} name={m.name} message={m.message}></Chatmsg>
            ))
          }
        </div>
        <form className="w-full flex flex-col sm:flex-row justify-between p-2 ml-2 border border-black" onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input className="flex-grow sm:w-80 border border-gray-400 mb-2 sm:mb-0" type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
          <button className="mx-2 bg-green-100" onClick={(e) => {
              dispatch(addMessage({
                name: "sahil",
                message: liveMessage
              }));
              setLiveMessage('');
            }}>send</button>
        </form>
      </>
    )
}
export default Livechat