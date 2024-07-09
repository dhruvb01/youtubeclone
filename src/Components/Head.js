import React, { useEffect, useRef, useState } from "react";
import { Hamm, LOGO, Usericon} from "../Utils/constants";
import { useDispatch ,useSelector} from "react-redux";
import { change } from "../Utils/store/Mainslice";
import { add } from "../Utils/store/searchSlice";
import { Link, useNavigate } from "react-router-dom";
const Head = () => {
  const [sugg,chnagesugg]=useState([])

  const [query,changein]=useState('')
  const input=useRef()

  const search=useSelector((store)=>store.searchReducer.cache)

  const toggle=useSelector((store)=>store.mainreducer.toggle)
  const dispatch=useDispatch()

useEffect(()=>{

  if(query===''){
    chnagesugg([])
  }

const timer=setTimeout(() => {
  call(query)
}, 200);

return ()=>{
  clearTimeout(timer)
}

},[query])


  function handleclick(){
    dispatch(change())
  }

  function handleclick2(q){
changein(q)

  }

  async function call(query){
    if(search[query]){
      chnagesugg(search[query])
      console.log("from cache")
    }
    else{
      const res=await fetch(`http://localhost:4000/api/search/${query}`)
      const json =await res.json()
      chnagesugg(json[1])
      dispatch(add({[query]:json[1]}))
      console.log(search)
      console.log("from new")
    }
    console.log(sugg)
  }

function handlechange(){
  if(input.current.value==''){
    chnagesugg([])
  }
changein(input.current.value)
}

  return (<div className="grid grid-flow-col p-2 m-2 shadow-lg">
    <div className="flex col-span-1 m-2">
    <img onClick={handleclick} className="h-8 cursor-pointer" src={Hamm} alt="" />
        <Link to='/'><img className="mx-4 h-8" src={LOGO} alt="" /></Link>  
          </div>    
          <div className="col-span-10 mx-60 ">
            <input onChange={handlechange} ref={input} className="w-2/4 p-1 rounded-full border hover:bg-gray-100 border-gray-400" type="text" placeholder="   search..." />
            <button className=" p-1">
              <img className="h-6 pt-2 mx-2"
                src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                alt=""
              />
            </button>
           {sugg&&<div className="rounded-md w-80 absolute z-30 shadow-lg px-5 bg-gray-100">{
            sugg.map((q)=>(
              <p onClick={()=>handleclick2(q)} className="hover:bg-gray-200 my-2 "><img className="h-6 inline-block pt-2 mx-2"
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
              alt=""
            /> {q}</p>
            ))
          }
            </div>} 
            </div>
         <div className="col-span-1">
            <img className="h-8" src={Usericon} alt="" />
            </div>
          </div>
  
  );
};

export default Head;
