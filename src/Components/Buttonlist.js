import React from 'react'
import Button from './Button'
const Buttonlist = () => {
  const buttonNames = [
    "All", "Gaming", "Songs", "Live", "Soccer", 
    "Cricket", "Cooking", "Valentine","All", "Gaming", "Songs", "Live", "Soccer", 
    "Cricket", "Cooking", "Valentine"
  ];
  
  return (
    <div className='flex w-[93%] overflow-x-auto scrollbar-hidden'>
    {buttonNames.map((name, index) => (
      <div key={index} className='flex'>
        <Button name={name} className="inline-block"></Button>
      </div>
    ))}
  </div>
  );
  
}

export default Buttonlist