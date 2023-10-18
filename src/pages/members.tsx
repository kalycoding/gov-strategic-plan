import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'

export default function Members() {
  return (
    <div className='bg-gray-50 w-full min-h-screen'>
      <NavBar />
      
      <div className="px-24 py-16 flex flex-col gap-y-44 items-start">
        <div className="flex justify-start gap-6">
          <div className="relative w-72 h-56 bg-gray-300 rounded">
            <Image src="/images/tajudeen-abbas.webp" layout='fill' className="" alt={''} />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold text-gray-800">Hon. Abbas Tajudeen</h1>
              <p className="text-gray-500 capitalize">Speaker of the House of Representatives</p>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="pt-4">
                <p className="text-gray-800 text-sm w-6/12">
                Abbas was born on 1 October 1963 in Kwarbai, Zaria, Kaduna State, Nigeria. He holds bachelor's degree in business administration and master's degree both from Ahmadu Bello University, Zaria.[1] He later obtained his doctorate degree in business administration from Usmanu Danfodiyo University, Sokoto.
                </p>
              </div>
              <div className="flex justify-between w-8/12">
                <div className="">
                  <h6 className="text-gray-400 font-semibold">Contact</h6>
                  <div className="flex flex-col gap-1 text-gray-800 text-sm">
                    <p className="">+234 816 8355 552</p>
                  </div>
                </div>
                <div className="">
                  <h6 className="text-gray-400 font-semibold">Address</h6>
                  <div className="flex flex-col gap-1 text-gray-800 text-sm">
                    <p className="capitalize">no. 9b kaduna road by kofar kibo zaria, kaduna state</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-24 pt-24">
        <h1 className="text-4xl font-bold text-gray-800">Members</h1>
      </div>
      <div className="px-24 py-4 flex flex-col gap-y-44 items-start">
        <div className="flex justify-start gap-6">
          <div className="relative w-72 h-56 bg-gray-300 rounded">
            <Image src="/images/ahmed-munir.png" layout='fill' className="" alt={''} />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold text-gray-800">Hon. Ahmed Munir</h1>
              <p className="text-gray-500 capitalize">Chairman, House Committee On Commerce</p>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="pt-4">
                <p className="text-gray-800 text-sm w-6/12">
                  Hon. Ahmed Munir was born on thee 9th day of September, 1980 in Saminaka, Lere Federal Constituency, Kaduna State, Nigeria. He is married to Farida Munir who is a civil servant and a proud father of twin boys; Mohammed and Kameel Munir.
                </p>
              </div>
              <div className="flex justify-between w-8/12">
                <div className="">
                  <h6 className="text-gray-400 font-semibold">Contact</h6>
                  <div className="flex flex-col gap-1 text-gray-800 text-sm">
                    <p className="">+234 706 5633 727</p>
                  </div>
                </div>
                <div className="">
                  <h6 className="text-gray-400 font-semibold">Address</h6>
                  <div className="flex flex-col gap-1 text-gray-800 text-sm">
                    <p className="capitalize">ahmadu bello way, kaduna-jos road, saminaka, kaduna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
