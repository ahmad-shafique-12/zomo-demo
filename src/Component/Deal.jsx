import React from 'react'
import Responsive from './Slider2'

const Deal = () => {
    return (
        <>
        <div className="w-full mt-20 m-auto deal bg-[#F9F9F9] pt-10 pb-10 ">
                <div className=" w-[90%] pl-[5%]  flex items-center justify-between ">
                    <div className=" w-max">
                        <div className="bg-[#F9F9F9] w-[100px] h-1 relative">
                            <div className="bg-[#F07552] w-[40px] h-1 absolute line"></div>
                        </div>
                        <h1 className="text-[32px] font-medium bold">Today’s Deal</h1>
                        <p className="text-[20px] font-medium text-[#C9C9C9]">
                        Take a benefit from our latest offers.
                        </p>

                    </div>
                    
                </div>
                <div className=" w-[90%]  mt-5 border-red-300 m-auto flex">
                

                <Responsive/>
                </div>
                
            </div>
            
        </>
    )
}

export default Deal
