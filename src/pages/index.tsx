import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";

import TeamWork from "../../public/svgs/team-work.svg";
import Law from "../../public/svgs/law.svg";
import Idea from "../../public/svgs/idea.svg";
import People from "../../public/svgs/people.svg";
import EmailSubs from "@/components/EmailSubs";
import Footer from "@/components/Footer";

const CORE_VALUES = [
  {
    icon: TeamWork,
    title: "Stakeholder Inclusiveness",
  },
  {
    icon: Law,
    title: "Professionalism with Integrity",
  },
  {
    icon: Idea,
    title: "Innovation",
  },
  {
    icon: People,
    title: "Teamwork",
  },
];

export default function Index() {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <div
        style={{
            backgroundSize: "fit",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundImage: `url('/images/hero-bg.png')`,
        }}
        className="px-6 lg:px-24 w-full lg:h-[calc(100vh-5rem)] h-[calc(100vh-15rem)] tint flex flex-col justify-center"
      >
        <h1 className="text-4xl lg:text-5xl text-white font-[700] leading-[1.40] uppercase lg:w-[65%]">
          Welcome to the House Committee ON COMMERCE
        </h1>
        <p className="text-white font-[400] text-[18px] leading-[1.40] lg:w-[65%] pt-4 lg:pt-10">
          The House Committee on Commerce is a Standing Committee created to
          support the House of Representative in fulfilling its mandate principally in
          Commerce. The Committee engenders an ecosystem where ease of doing
          business is critical and simplifed, and foreign direct investment is
          encouraged.
        </p>
      </div>
      <div className="py-6 flex pt-16">
        <div className="text-center uppercase bg-[#12486B] w-full py-5">
          Our Vision
        </div>
        <div className="text-center uppercase bg-[#29719F] w-full py-5">
          Our Mission
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:px-24 items-center gap-[50px] py-16 relative">
        <div className="w-full">
          <Image
            src="/images/idea.png"
            alt=""
            sizes="100%"
            style={{
              width: "auto",
              height: "450px",
            }}
            width={500}
            height={300}
          />
        </div>
        <div className="w-full relative lg:px-0 px-6">
          <span className="absolute bg-secondary w-20 h-1"></span>
          <h1 className="text-2xl text-primary font-[700] leading-[1.40] uppercase pt-5">
            Vision Statement
          </h1>
          <p className="text-[#434546] font-[400] text-[16px] leading-[1.40] pt-4">
            &quot;To be a model for effective and efficient legislative
            platform, driving a robust, climate-resilient commerce and
            sustainably developed Nigerian economy&quot;
          </p>
        </div>
      </div>
      <div className="lg:px-24 py-16 relative px-6">
        <div className="relative pb-16">
          <span className="absolute bg-secondary w-20 h-1"></span>
          <h1 className="text-2xl text-primary font-[700] leading-[1.40] uppercase pt-5">
            Our Core Values
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {CORE_VALUES.map((value, index) => (
            <div 
            key={"value-" + index}
            className="border text-primary transition-all duration-300 hover:bg-primary hover:text-white px-6 py-8 w-full flex flex-col items-center justify-center">
              {value.icon && (
                <Image src={value.icon} width={50} height={50} alt="" />
              )}
              <h1 className="text-sm font-[700] pt-2 leading-[1.40]">
                {value.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary py-16 lg:px-24 px-6 flex flex-col gap-5">
        <div className="mx-auto flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center text-white font-[700] leading-[1.40] uppercase">
            Breakdown of The Strategic Plan
          </h1>
          <p className="text-white font-[700] text-lg leading-[1.40] pt-4 text-center">
            (2023 - 2027)
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full pt-16">
          <div className="flex flex-col order-2 lg:order-1 relative lg:w-7/12 pt-24 lg:pr-12">
            <span className="absolute left-0 bg-secondary w-20 h-1"></span>
            <h1 className="text-2xl text-white font-[700] leading-[1.40] uppercase pt-5">
              Strategic Development
            </h1>
            <p className="pt-5 w-full">
              The House Committee on Commerce 2023 - 2027 Strategic Plan was
              developed on the platform of setting up a team made up of the
              Consultants/Resource persons, Committee members, the Legislative
              Assistant to the Chairman, and the Clerk of the Committee
              coordinated by the Chairman, House Committee on Commerce Rt. Hon
              (Engr) Ahmed Munir, who facilitated the whole process.
            </p>
            <button className="bg-white w-max text-primary font-[500] text-sm leading-[1.40] uppercase py-2 px-4 mt-10">
                Learn More
            </button>
          </div>
          <div className="lg:w-5/12 lg:px-8 order-1 lg:order-2">
            <Image
              src="/svgs/strategy-plan.svg"
              width={500}
              height={300}
              alt=""
            />
          </div>
        </div>
      </div>
      <EmailSubs />
      <Footer />
    </div>
  );
}
