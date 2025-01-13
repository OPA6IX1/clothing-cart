// import React from 'react'
import { MdStarBorder } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import image from "../assets/images/cloth.jpg";
import image2 from "../assets/images/cloth 2.jpg";
import image3 from "../assets/images/cloth3.jpg";
import image4 from "../assets/images/cloth4.jpg";

const AppProduct = () => {
  return (
    
    <div className=" justify-center mx-auto bg-inherit flex flex-col items-center space-y-4 md:w-1/2">
      {/* Mega Menu Dropdown */}
    <div>
      <ul className="flex space-x-8">
        <li>
          <a href="#" className="hover:text-blue-700">
            HOME
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-700">
            SALES
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-700">
            HODDIE
          </a>
        </li>
      </ul>
    </div>
      <div className="flex flex-col md:flex-row gap-5">
        
        {/* Product Images */}
        <div>
          <img
            src={image}
            alt="image"
            className="w-[375px] h-[330px] rounded-lg"
          />
          <div className="flex mt-5 space-x-2 gap-11">
            <img
              src={image2}
              alt=""
              className="h-[80px] w-[90px] rounded-lg"
            />
            <img
              src={image3}
              alt=""
              className="h-[80px] w-[90px] rounded-lg"
            />
            <img
              src={image4}
              alt=""
              className="h-[80px] w-[90px] rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8">
          <h1 className="text-2xl font-semibold">Plaid Sleeve Kangaroo <br/>Pocket Drawstring Hoodie</h1>
          <p className="text-black font-bold ">BY <span className="text-blue-700 font-bold">COSMO FASHION</span></p>
          <p className="mt-2 text-blue-900">
            <span className="text-3xl bg-slate-400">$67</span> <span className="text-sm text-blue-700 mb-10 font-semibold px-5"> SAVE 25% <br/><span className="text-black font-semibold px-12 m-7">inclusive deal of the day</span></span>
          </p>
          <p className="mt-4 text-gray-600">
            It is a long established fact that a reader will be<br/> distracted by the readable content of a page when<br/>
            looking at its layout.
          </p>
          <div className="mt-4 flex items-center gap-5">
            <label htmlFor="quantity" className="mr-2">
              Qty:
            </label>
            <input
              id="quantity"
              type="number"
              defaultValue={1}
              className="w-16 rounded border px-2 py-1"
            />
            <button className=" w-80 rounded-lg bg-blue-700 px-2 py-2 text-white hover:bg-blue-700">
            Add to Cart
          </button>
          </div>
          <div className="flex mt-5 gap-3">
            <section>
            <GoPersonFill className="h-4 w-4 text-gray-500 inline font-bold"/>
            </section>
            <section>
                <h3 className="font-roboto text-[16px] font-semibold text-customGrey">Alex Morningstar</h3>
                <h4 className="font-roboto text-[14px] font-normal text-customGrey">Contrary to popular belief</h4>
                <p className="font-roboto text-[12px] font-thin text-customGrey w-[60%]">lorem ipsum is not simply random text.<br/> it has root in a piece of classical Latin</p>
            </section>
            <section className="flex">
            <MdOutlineStarPurple500   className="text-[#1565C0]  h-[25px] w-[30px]" />
            <MdOutlineStarPurple500   className="text-[#1565C0] h-[25px] w-[30px]"/>
            <MdOutlineStarPurple500   className="text-[#1565C0] h-[25px] w-[30px]"/>
            <MdOutlineStarPurple500   className="text-[#1565C0] h-[25px] w-[30px]"/>
            <MdStarBorder className="text-[#1565C0] h-[29px] w-[35px] border-blue-300"/>
           
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppProduct
