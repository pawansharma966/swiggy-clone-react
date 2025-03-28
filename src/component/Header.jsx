import React, { useState } from "react";

import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
function Header() {

    const [toggle, setToggle] = useState(false);

    const showSideMenu = ()=>{
        setToggle(true);
    }
    const hideSideMenu = ()=>{
        setToggle(false);
    }
    const links = [
        {
         icon: <CiSearch />,
         name:"Search"
    },
    {
        icon: <CiDiscount1 />,
        name:"offers",
        sup: "New"
   },
   {
    icon:"",
    name:"Help"
},
{
    icon: "",
    name:"Sign In"
},
{
    icon: "",
    name:"Cart",
    sup: "(2)"
},
]
  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
    }}> 
       
        <div onClick={(e) => {
            e.stopPropagation();
        }}
         className='w-[500px] bg-white h-full absolute duration-[400ms]'
        style={{left: toggle ? '0%' : '-100%'}}></div>
    </div>
    <header className="p-[15px] shadow text-[#686b78]">
     
        <div className="max-w-[1200px] mx-auto  flex items-center">
     <div className='w-[100px] '>
        <img src="images/Swiggy-logo.png" className="w-full"  alt="img" />
     </div>
     <div className="">
        <span className="font-bold border-b-[3px] border-[black]"> Ratanada </span> Jodhpur, Rajasthan, India <RxCaretDown fontSize={25} className='inline  text-[#fc8019] cursor-pointer' onClick={showSideMenu}/>
        </div>
        <nav className="flex list-none gap-5  ml-auto text-[18px] font-semibold">
         
          {
            links.map(
                (link, index) => {
                    return <li key={index} className="flex hover:text-[#fc8019] items-center gap-2">
                        {link.icon}
                        {link.name}
                       <sup>  {link.sup} </sup>
                    </li>
                }
            )
          }
            
        </nav>
       
        </div>



    
    
      

    </header>
    </>
  )
}

export default Header
