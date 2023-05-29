import React from 'react'
import { useLocation,useNavigate } from 'react-router';

export default function Header() {
    const location = useLocation();
    const Navigate= useNavigate();
    function pathMatchRoute(route){
        if(route===location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center
        px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='curser-pointer h-5 cursor-pointer' onClick={()=>(Navigate("/"))}/>

            </div>
            <div>
                <ul className=' flex space-x-10'>
                    <li className={ ` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/")  && "border-b-red-500 text-black"}`} onClick={()=>Navigate("/")}>Home</li>
                    <li className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers")  && "border-b-red-500 text-black"}`}onClick={()=>Navigate("/offers")}
                    >Offers</li>
                    <li className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in")  && "border-b-red-500 text-black"}`}onClick={()=>Navigate("/sign-in")}>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
 
}
