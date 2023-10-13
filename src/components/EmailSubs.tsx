import React from 'react'

export default function EmailSubs() {
  return (
    <div 
      style={{
        backgroundImage: `url('/images/landing-recent.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
      className="flex flex-col justify-start py-32  px-24 ">
            <span className="absolute bg-secondary w-20 h-1" />
            <h1 className="text-2xl text-white font-[700] leading-[1.40] uppercase pt-5">
              Recent News 
            </h1>
            <p className="pt-5 w-full lg:w-5/12 text-white">
                Subscribe to our newsletter to get the latest trending updates on the House Committee on Commerce
            </p>
            <div className="flex border border-white lg:w-5/12 mt-10">
                <input type="text" placeholder="Enter your email address" className="bg-transparent text-sm text-white font-[400] text-[16px] leading-[1.40] py-2 px-4 w-full" />
                <button className="bg-white text-primary font-[500] text-sm leading-[1.40] py-3 px-4">Subscribe</button>
            </div>
      </div>
  )
}
