import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import UserIcon from '../assets/user.png'
import React,{ useRef, useState } from "react"
import { ChevronDownIcon } from '@heroicons/react/outline'
const DropDown=() =>{
  const {data:session}=useSession()
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null)
  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };
  const handleClickOutsideDropdown =(e:any)=>{
    if(open && !dropdownRef.current?.contains(e.target as Node)){
      setOpen(false)
      
    }
  }
  // window.addEventListener("click",handleClickOutsideDropdown)
  
  // console.log(open);

  return (
    
    
      <div className=' bg-black bg-cover opacity-90 hover:opacity-80 cursor-pointer rounded-full py-1 pl-1 pr-2' ref={dropdownRef}>
        <button onClick={(e) => handleDropDownFocus(open)}><Image
						src={session?.user?.image || UserIcon}
						alt='User Avatar' 
						height='40px'
						width='40px'
						className='rounded-full object-cover'
					/>
					<h2>{session?.user?.name}</h2>
					<ChevronDownIcon className='icon' /></button>
        {open && (
          <ul>
            <li><button>Private Session</button></li>
            <li><button>Account</button></li>
            <li><button>Settings</button></li>
            <li><button onClick={ () => {
    signOut()
}}>Sign out</button></li>
          </ul>
        )}
      </div>
    
  );
}
export default DropDown;