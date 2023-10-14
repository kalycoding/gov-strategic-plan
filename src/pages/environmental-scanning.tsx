import EmailSubs from "@/components/EmailSubs";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const FACTORS = [
  {
    title: "Political",
    items: [
      "Large size of government (Federal, State & LG)",
      "Nigeria is a member of many International Organizations, including parliamentary structures, e.g., AU, ECOWAS, UN, MINT, etc",
      "Widespread corruption at all levels.",
      "Interference by the other arms of government.",
      "Dynamism and ever-changing political landscape.",
      "Interest by other stakeholders to forge partnerships, linkages, and collaborations with NASS.",
      "Persistent political crisis, vote-rigging, violence, national insecurity, and tribalism have slowed down the growth of the nation's economy",
      "High turnover of Technocrats joining the political race for NASS membership.",
      "Weak ideological positions by parliamentary parties.",
      "Complex tax administration system and widespread tax evasion.",
    ]
  },
  {
    title: "Economic",
    items: [
      "Consistently increase in inflation rate.",
      "Overwhelming national debt.",
      "Reduction in Internally Generated Revenue (IGR).",
      "Increase in economic crimes and corruption.",
      "Willingness by Donor Agencies and corporate organisations to sponsor legislation.",
      "Room for the expansive deployment of e-commerce, e-trade, and e-payment platforms across the board.",
      "Astrategically prepared National Assembly for a pragmatic and practical budget-making process.",
      "Regular changes in foreign exchange rates.",
      "High unemployment rate for Nigeria's growing population.",
      "Rapid growth in some significant sectors, e.g., education, retail trade, entertainment, and solid minerals.",
      "One of the largest producers of oil in the world.",
      "A country with abundant, cheap labour and a huge domestic consumer market.",
      "Relatively low corporate income tax rates (CIT).",
      "Nigeria has several investment opportunities across various sectors.",
    ]
  },
  {
    title: "Social",
    items: [
      "Largest population of black nation globally with a mostly youthful population (over 60% under 25).",
      "Nigeria faces massive social challenges, poverty, inequality, high unemployment, poor literacy, high child mortality rates, crime, urban housing problems, and a weak education system.",
      "A religious nation with gender roles deeply ingrained in the culture",
      "Wide gap in wealth distribution among the populace",
      "High population growth rate and increasing youth unemployment.",
      "Urbanization programme.",
      "Threats of insecurity and terrorism.",
    ]
  },
  {
    title: "Technological",
    items: [
      "Advancement in technological-driven business concept.",
      "High level of technological uptake.",
      "Increased technological innovation.",
      "The world is now a global village.",
      "Lack of skilled workers in the Tech Industry to champion the automation process.",
      "Over-regulated environment for technological advancement in Nigeria in data protection and privacy law.",
    ]
  }
]

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
        className="h-screen px-24 hero-tint bg-green-300 flex flex-col justify-center"
      >
        <h1 className="text-5xl text-white font-[700] leading-[1.40] uppercase w-[65%]">
          Environmental Scanning
        </h1>
        <p className="text-white font-[400] text-[18px] leading-[1.40] w-[65%] pt-10">
        Environmental scanning is a process that systematically surveys and interprets relevant data to identify external opportunities and threats that could influence future decisions. PESTLE and SWOT Analysis are the two major techniques use in Environmental scanning process. In the process of developing this strategic plan for the House Committee on Commerce, PESTLE and SWOT analysis tools were applied.  
        </p>
      </div>
      <div className="flex pt-24">
        <div className="text-center uppercase bg-[#12486B] w-full py-5">
          PESTLE
        </div>
        <div className="text-center uppercase bg-[#29719F] w-full py-5">
          SWOT
        </div>
      </div>
      <div className="py-24 px-24">
        <div className="flex flex-col relative justify-center items-center lg:w-7/12 mx-auto">
          <span className="bg-secondary w-20 h-0.5" />
          <h1 className="text-2xl text-primary font-[700] leading-[1.40] uppercase pt-4">
            PESLTE Factors
          </h1>
          <p className="text-center text-[#434546] pt-6">
          The following is an analysis of the Political, Economic, Social, Technological, Legal and Environmental issues impacting the Strategic Plan. These are issues that may arise during the Strategic Plan implementation period. They have been analyzed according to the issue and its effect, in general terms, both positive and negative.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-b px-24">
      {
          FACTORS.map((factor, index) => (
            <div className="border border-[#F1EFEF]">
          <div className="bg-[#12486B] px-5 py-6">
            <span className="absolute bg-secondary w-20 h-0.5"></span>
            <p className="text-[16px] first-letter:text-2xl pt-3 first-letter:text-secondary font-[700] text-white">
              {factor.title}
            </p>
          </div>
          <div className="px-5 pb-4">
            <div className="flex py-4 gap-3 text-[10px] text-black">
              <span className="px-4 py-2 rounded-full bg-[#C9EAFF]">Issues</span>
              <span className="px-4 py-2 rounded-full bg-transparent">Effects</span>
            </div>
            <ul className="text-[14px] pl-6 list-disc font-[400] text-[#434546] leading-[1.40]">
              {
                factor.items.map((member, index) => (
                  <li key={index} className="py-2">{member}</li>
                ))
              }
            </ul>
          </div>
        </div>
          ))
        }
      </div>
      <EmailSubs />
      <Footer />
    </div>
  );
}
