// import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";




const AppHeader = () => (
  <div className="w-full rounded-sm bg-white  shadow-sm">
    {/* Navigation Header */}
    <div className=" flex w-[70%] mt-5 px-6 py-2 items-center gap-80 justify-center mx-auto ">
    
        <span className="text-customBlue text-xl font-Mukta font-bold ">
          Cosmo
        </span>
      <div className=" text-center md:flex">
      <ul className="flex font-mukta space-x-7">
        <li>
          <a href="#" className="hover:text-blue-700">
            Sales
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-700">
           Hoddie 
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-700">
            Fashion
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-700">
            More
          </a>
        </li>
      </ul>
    </div>
    <div className="flex gap-6 ">
        <form className="flex items-center border border-gray-300 rounded-2xl px-1 py-0.5 h-[25px] w-[183px]">
          <IoSearchOutline className="h-4 w-4 text-gray-500 inline" />
            <span className="mr-1"></span>
          <input
              type="text"
              placeholder="Search..."
              className="border-none focus:ring-0  flex-1 text-xs text-customGray font-mukta font-light px-0"
         />
        </form>



          <article className="flex items-center border border-gray-300 rounded-lg h-[25px] w-[40] px-2 py-1">
            <IoBagHandle className="h-4 w-4 text-blue-400 inline"/>
            <span className="ml-1 font-mukta font-light text-sm text-customGray">0</span>
          </article>
          <div>
            <GoPersonFill className="h-4 w-4 text-gray-500 inline font-bold"/>
          </div>
          
        </div>

    </div>

   

    
  </div>
);

export default AppHeader;
