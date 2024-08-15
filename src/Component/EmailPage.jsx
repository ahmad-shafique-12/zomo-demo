import React from "react";

const EmailPage = () => {
  return (
    <>
      <div className="bg-[#2B2B2B] lg:w-full flex-wrap gap-5 flex justify-around items-center da px-2">
        <div className="">
          <p className="text-[#C3C3C3] text-[18px] font-medium ">
            Don't pass up our fantastic discounts. email offers from all <br />{" "}
            of our best eateries
          </p>
        </div>

        <div>
          
            <form class="relative mx-auto flex sm:w-[500px] w-[100%]    items-center justify-between rounded-md border shadow-lg">
             
              <input
                type="name"
                name="search"
                class=" p-3 w-full rounded-md  bg-[#393A3C] text-[18px] p-2 outline-none focus:ring-2"
                placeholder="Enter Your Email :"
              />
              <button
                type="submit"
                class="absolute right-0 mr-1 inline-flex p-2 items-center justify-center rounded-lg bg-[#F1854C] px-1 font-medium text-white focus:ring-4 hover:bg-gray-700"
              >
               Subscribe Now
              </button>
            </form>
          </div>
        </div>
      
    </>
  );
};

export default EmailPage;
