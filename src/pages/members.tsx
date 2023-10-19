import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import { members } from "../data/members"
import Link from "next/link";

export default function Members() {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <NavBar />

      <div className="px-4 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col gap-y-6 sm:gap-y-8 items-start">
        <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6">
          <div className="relative w-52 md:w-80 h-48 md:h-56 bg-gray-300 rounded">
            <Image
              src="/images/tajudeen-abbas.webp"
              layout="fill"
              className=""
              alt={""}
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Hon. Abbas Tajudeen
              </h1>
              <p className="text-gray-500 capitalize">
                Speaker of the House of Representatives
              </p>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-800 text-sm sm:text-base w-full sm:w-6/12">
                  Abbas was born on 1 October 1963 in Kwarbai, Zaria, Kaduna
                  State, Nigeria. He holds a bachelor&apos;s degree in business
                  administration and a master&apos;s degree both from Ahmadu Bello
                  University, Zaria. He later obtained his doctorate degree in
                  business administration from Usmanu Danfodiyo University,
                  Sokoto.
                </p>
              </div>
              {/* <div className="flex flex-col sm:flex-row justify-between w-full sm:w-8/12">
                <div className="">
                  <h6 className="text-gray-400 font-semibold">Contact</h6>
                  <div className="flex flex-col gap-1 text-gray-800 text-sm">
                    <p className="">+234 816 8355 552</p>
                  </div>
                </div>
                <div className="">
                  <h6 className="text-gray-400 font-semibold">Address</h6>
                  <div className="flex flex-col gap-1 text-gray-800 text-sm">
                    <p className="capitalize">
                      no. 9b kaduna road by kofar kibo zaria, kaduna state
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 py-4 sm:py-6 flex flex-col gap-y-6 sm:gap-y-8 items-start">
        <h1 className="text-2xl text-gray-900 font-[700] leading-[1.40] uppercase pt-5">
          Members House Committee on Commerce
        </h1>
      </div>
      {members?.map(e =>
        <div key={e?.name} className="px-4 sm:px-8 md:px-12 lg:px-24 py-4 sm:py-6 flex flex-col gap-y-6 sm:gap-y-8 items-start">
        <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6">
          <div className="relative w-48 md:w-72 h-48 md:h-56 bg-gray-300 rounded">
            <Image
              src={e?.imgUrl}
              layout="fill"
              className=""
              alt={""}
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {e?.name}
              </h1>
              <p className="text-gray-500 capitalize">
                {e?.title}
              </p>
            </div>
            <div className="flex flex-col w-full gap-3">
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-800 text-sm sm:text-base w-full sm:w-6/12">
                  {e?.bio}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between w-full sm:w-8/12">
                <div className="">
                  <h6 className="text-gray-400 font-semibold">Contact</h6>
                  <div className="flex flex-col gap-1 text-gray-800 text-sm">
                    <p className="">{e?.phone ?? 'Not available'}</p>
                  </div>
                </div>
                {(e?.fb || e?.twitter) && (
                  <div className="">
                    <h6 className="text-gray-400 font-semibold">Socials</h6>
                    <div className="flex flex-col gap-1 text-gray-800 text-sm">
                      {e?.fb && (
                        <div className="">
                          <Link href={e?.fb}>
                            <h6 className="text-gray-900 font-semibold">Facebook</h6>
                          </Link>
                        </div>
                      )}
                      {e?.twitter && (
                        <div className="">
                          <Link href={e?.twitter}>
                            <h6 className="text-gray-900 font-semibold">X</h6>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {/* <div className="">
                  <h6 className="text-gray-400 font-semibold">Address</h6>
                  <div className="flex flex-col gap-1 text-gray-800 text-sm">
                    <p className="capitalize">
                      {e?.address ?? 'Not available'}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      <Footer />
    </div>
  );
}
