import React from 'react'
import Responsive1 from './Slider3'

const Brand = () => {
  return (
    <>
     <div className="w-[90%] mt-20 m-auto ">
                <div className=" w-full  flex items-center justify-between ">
                    <div className=" w-max">
                        <div className="bg-[#F9F9F9] w-[100px] h-1 relative">
                            <div className="bg-[#F07552] w-[40px] h-1 absolute line"></div>
                        </div>
                        <h1 className="text-[32px] font-medium bold">Brand For You</h1>
                        <p className="text-[20px] font-medium text-[#C9C9C9]">
                        Browse out top brands here to discover different food cuision.
                        </p>

                    </div>
                    
                </div>
                <div className=" w-[100%]  mt-5 border-red-300 m-auto flex">
                

                <Responsive1/>
                </div>
                
            </div>
    
    
    </>
  )
}

export default Brand