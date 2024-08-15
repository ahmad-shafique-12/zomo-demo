import React from "react";

import data from "./Data";
import Silder from "./Silder";

const Categories = () => {
  

    return (
        <>
            <div className="w-[90%] mt-20 m-auto">
                <div className=" w-full  flex items-center justify-between ">
                    <div className=" md:w-[600px]">
                        <div className="bg-[#F9F9F9] w-[100px] h-1 relative">
                            <div className="bg-[#F07552] w-[40px] h-1 absolute line"></div>
                        </div>
                        <h1 className="text-[32px] font-medium bold">Categories</h1>
                        <p className="text-[20px] font-medium text-[#C9C9C9]">
                            Browse out top categories here to discover different food cuisine.
                        </p>

                    </div>
                    
                </div>
                <div className=" w-full mt-5 border-red-300 m-auto flex">
                

                <Silder/>
                </div>
                
            </div>
        </>
    );
};

export default Categories;
