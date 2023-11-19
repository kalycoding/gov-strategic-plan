import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between lg:pt-32 pt-24 lg:pb-24 pb-16 px-6 lg:px-24">
      <div className="w-full ">
        <Image src={"/svgs/hr-logo.svg"} alt="" width={100} height={100} />
      </div>
      <div className="flex flex-col lg:gap-0 gap-6 lg:pt-0 pt-16 md:flex-row w-full justify-between">
        <div className="">
            <h5 className="text-sm text-secondary font-[700] uppercase">Office</h5>
            <div className="flex flex-col text-[#434546] text-xs pt-3 gap-2">
                <Link href={"#"}>Three Arms Zone Abuja, Federal Capital Territory</Link>
                <Link href={"/terms"}>Terms of Use</Link>
                <Link href={"/privacypolicy"}>Privacy Policy</Link>
            </div>
        </div>
        <div className="mx-2">
            <h5 className="text-sm text-secondary font-[700] uppercase">Socials</h5>
            <div className="flex flex-col text-[#434546] font-semibold text-xs pt-3 gap-2">
                <Link href={"https://twitter.com/commercecom_hor"}>X</Link>
                {/* <Link href={"https://facebook.com/comercecomHOR"}>Facebook</Link> */}
                {/* <Link href={"https://instagram.com/commercecom_hor"}>Instagram</Link> */}
            </div>
        </div>
        <div className="">
            <h5 className="text-sm text-secondary font-[700] uppercase">Contact</h5>
            <div className="flex flex-col text-[#434546] text-xs pt-3 gap-2">
                {/* <Link href={"tel:+2347065633727"}>Main: +234 706 5633 727</Link>
                <Link href={"tel:+2347065633727"}>Press: +234 706 5633 727</Link> */}
                <Link href={"mailto:contact@commercecom.ng"}>Email: contact@commercecom.ng</Link>
            </div>
        </div>
        {/* <div className=" ">
            <h5 className="text-sm text-secondary font-[700] uppercase">Download</h5>
            <div className="flex flex-col text-[#434546] text-xs pt-3 gap-2">
               
                <a href="file://./strategy.pdf" download>Strategic Plan 2023 - 2027</a>
            </div>
        </div> */}
      </div>
    </div>
  );
}
