import EmailSubs from "@/components/EmailSubs";
import NavBar from "@/components/NavBar";
import React from "react";

const DEVELOPMENT_PLANS = [
  {
    image: "development-1.jpeg",
    title: "Legislative and Oversight Functions",
    subtitle:
      "Delivery of effective and efficient MDAs whose operations promote",
    description:
      "This strategic pillar focuses on the effectiveness of Committee members of the House Standing Committee on Commerce to be able to discharge their constitutional mandate with legislative awareness and professional competence in the area of legislative drafting, budgetary formulation, investigative hearing and successful implementation of the budget in line with the constitution of the Federal Republic of Nigeria and other relevant Acts of the National Assembly that has to do with the activities of the Ministry or Agency in question.",
  },
  {
    image: "development-2.jpeg",
    title: "Business Process Automation",
    subtitle:
      "Increase efficiency in Nigeria's commerce sector and enhance global participation",
    description:
      "This Strategic pillar focuses on transforming the Business process of the ministries and the Agencies under the committee's purview to become fully automated. It is a careful and systematic approach to enhance automation and digitalisation of the systems and processes fundamental to developing commerce, trade, and investment in Nigeria. This aligns with the global adjustment to e-trading, e-commerce, m-commerce, e-payment, and e-collection business approach.",
  },
  {
    image: "development-3.jpeg",
    title: "Excellence in Service Delivery",
    subtitle:
      "Institutionalization of Performance management system in the MDAs",
    description:
      "This pillar focuses on how the House Committee on Commerce can successfully work with the ministries and agencies under her jurisdiction to deliver their statutory responsibilities without compromise and ensure that Nigerians and trading partners within and outside the country always enjoy excellent service.",
  },
  {
    image: "development-4.jpeg",
    title: "Public Trust for Enhanced Stakeholders’ Management",
    subtitle:
      "Enhanced Stakeholders’ engagement in legislative business for better performance.",
    description:
      "This pillar focuses on the strategies the House Committee on Commerce can adopt to change the country's negative public perception of political institutions and ofceholders and improve stakeholders' engagement and participation in legislative business.",
  },
  {
    image: "development-5.jpeg",
    title: "Capacity Strengthening",
    subtitle:
      "Building capacity for consistent improvement in productivity and overall performance.",
    description:
      "This pillar focuses on the need to strengthen the capacity and the capability of the members of the committee, secretariat staff, management, and staff of all the MDAs under the jurisdiction of the Committee through regular training, retreats, and conferences within and outside the country for them to be able to undertake their statutory task and deliver on the assigned goals and objectives.",
  },
  {
    image: "development-6.jpeg",
    title: "Promoting Climate Resilience Commerce (CRC)",
    subtitle:
      "Mainstream Climate Action, mitigation, and adaptation strategies in supporting commerce and sustainable economic growth",
    description:
      "In line with the African Union Agenda 2063 and the United Nations Sustainable Development Goals, this pillar focuses on the best approach to combating the effects of climate change on commerce and trade through collaborative efforts with the Government, private sector, and donor partners, fostering commercial industry that is climate-resilient, meets the needs of the present generation without destroying the ability of the future generation to enjoy same.",
  },
];

export default function development() {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <div
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
          backgroundSize: "fit",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
        className="px-6 lg:px-24 w-full lg:h-[calc(100vh-5rem)] h-[calc(100vh-15rem)] tint flex flex-col justify-center"
      >
        <h1 className="text-4xl lg:text-5xl text-white font-[700] leading-[1.40] uppercase lg:w-[65%]">
          Strategic Development
        </h1>
        <p className="text-white font-[400] text-[18px] leading-[1.40] lg:w-[65%] pt-4 lg:pt-10">
          The House Committee on Commerce 2023 - 2027 Strategic Plan was
          developed on the platform of setting up a team made up of the
          Consultants/Resource persons, Committee members, the Legislative
          Assistant to the Chairman, and the Clerk of the Committee coordinated
          by the Chairman, House Committee on Commerce Rt. Hon (Engr) Ahmed
          Munir, who facilitated the whole process.
        </p>
      </div>
      <div className="lg:px-24 px-6 py-24">
        <span className="absolute bg-secondary w-20 h-1"></span>
        <h1 className="text-2xl text-primary font-[700] leading-[1.40] uppercase pt-5">
          Strategic Plan
        </h1>
        <p className="text-primary lg:w-8/12 pt-6">
          This Strategic Plan is prepared for the House Committee on Commerce in
          the discharge of its legislative and oversight functions and will
          begin to run from the Year 2023 – 2027.
        </p>
      </div>
      <div className="flex">
        <div className="text-center uppercase bg-[#12486B] w-full py-5">
          Pillars
        </div>
        <div className="text-center uppercase bg-[#29719F] w-full py-5">
          Components
        </div>
      </div>
      <div className="py-24 lg:px-24 px-6">
        <div className="flex flex-col relative justify-center items-center lg:w-7/12 mx-auto">
          <span className="bg-secondary w-20 h-0.5" />
          <h1 className="text-2xl text-primary text-center font-[700] leading-[1.40] uppercase pt-4">
            Strategic Pillars, Objectives, And Outcomes
          </h1>
          <p className="text-center text-[#434546] pt-6">
            The strategic plan is framed around six (6) pillars: legislative and
            oversight functions, business process automation, excellence in
            service delivery, public trust and enhanced stakeholders&apos;
            management, capacity strengthening, and promoting climate resilience
            commerce.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 text-[#434546] pt-24">
          {DEVELOPMENT_PLANS.map((plan, index) => (
            <div 
            key={"plan-" + index}
            className="flex flex-col gap-4 border pb-6">
              <div
                style={{
                  backgroundImage: `url('/images/${plan.image}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                }}
                className="flex tint items-center h-32 justify-center w-full px-6 py-10"
              >
                <p className="text-white">“{plan.subtitle}”</p>
              </div>
              <div className="px-4 flex flex-col h-full justify-start gap-2">
                <h4 className="text-md text-primary uppercase">{plan.title}</h4>
                <p className="text-sm py-5">{plan.description}</p>
              <button className="text-secondary mt-auto border uppercase border-secondary w-full font-[500] text-sm leading-[1.40] py-3 px-4">
                View Objectives
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EmailSubs />
    </div>
  );
}
