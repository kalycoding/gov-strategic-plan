import EmailSubs from "@/components/EmailSubs";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const MAPPING_PLANS = [
  {
    title: "High Power and High Influence in the successful delivery of the mandate.",
    levelOfImportance: "High",
    source: "Committee Members",
    internal: "Internal",
    members: [
      "Hold monthly meetings (in-person or virtual) to keep members abreast of the implementation process and elicit buy-in.",
      "Keep all the communication lines consistently open for feedback and enquiries.",
      "Hold bi-annual retreats.",
    ],
  },
  {
    title: "Low Power and High Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "Committee Secrectariat",
    internal: "Internal",
    members: [
      "Ensure timely communication with the Clerk and the staff on the activities",
      "Keep all the communication lines consistently open for feedback and enquiries."
    ],
  },
  {
    title: "High Power and High Influence in the successful delivery of the mandate.",
    levelOfImportance: "High",
    source: "Speaker of the House of Assembly",
    internal: "Internal",
    members: [
      "Ensure timely communication with the Clerk and the staff on the activities",
      "Keep all the communication lines consistently open for feedback and enquiries.",
      "Send the Committee report within the time frame stipulated in the House of Representatives Standing Order."
    ],
  },
  {
    title: "High Power and High Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "Federal Ministry of Industry, Trade and Investment",
    internal: "External",
    members: [
      "Hold quarterly contact meetings with the Ministry and agencies to identify and address conflict areas, legal framework, and policy challenges.",
      "Keep all the communication lines consistently open for feedback and enquiries.",
    ],
  },
  {
    title: "High Power and Medium Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "THE NIGERIAN INVESTMENT PROMOTION COUNCIL (NIPC), THE CORPORATE AFFAIRS COMMISSION (CAC), THE NIGERIAN EXPORT PROMOTION COUNCIL (NEPC)",
    internal: "External",
    members: [
      "Hold quarterly contact meetings with the Ministry and agencies to identify and address conflict areas, legal framework, and policy challenges.",
      "Work on new legislation to maximise opportunities for the Export Expansion Grant of NEPC to Exporters who meet the requirement.",
    ],
  },
  {
    title: "High Power and Medium Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "THE NIGERIAN EXPORT PROCESSING ZONE AUTHORITY (NEPA), OIL AND GAS FREE ZONES AUTHORITY, LAGOS INTERNATIONAL TRADE FAIR MANAGEMENT BOARD",
    internal: "External",
    members: [
      "Hold quarterly contact meetings with the Ministry and agencies to identify and address conflict areas, legal framework, and policy challenges.",
      "Deploy e-tracking software for all our Warehouses Nationwide.",
    ],
  },
  {
    title: "High Power and Medium Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "TAFAWA BALEWA SQUARE MANAGEMENT BOARD, FINANCIAL REPORTING COUNCIL, NIGERIA OFFICE FOR TRADE NEGOTIATIONS",
    internal: "External",
    members: [
      "Hold quarterly contact meetings with the Ministry and agencies to identify and address conflict areas, legal framework, and policy challenges.",
    ],
  },
  {
    title: "High Power and Medium Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "THE FEDERAL COMPETITION AND CONSUMER PROTECTION COMMISSION TRIBUNAL",
    internal: "External",
    members: [
      "Hold quarterly contact meetings with the Ministry and agencies to identify and address conflict areas, legal framework, and policy challenges.",
    ],
  },
  {
    title: "Medium Power and Medium Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "CHAMBER OF COMMERCE (LOCAL AND INTERNATIONAL)",
    internal: "External",
    members: [
      "Hold quarterly contact meetings with the Ministry and agencies to identify and address conflict areas, legal framework, and policy challenges.",
      "Partner with NACCIMA to organise meetings, Conferences, Workshops and Trade fairs with Chambers of Commerce."
    ],
  },
  {
    title: "Low Power and Medium Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "THE MINISTRY OF COMMUNICATION, INNOVATION AND DIGITAL ECONOMY, THE MINISTRY OF ART, CULTURE AND THE CREATIVE ECONOMY, THE MINISTRY OF ENVIRONMENT AND ECOLOGICAL MANAGEMENT",
    internal: "External",
    members: [
      "Include all stakeholders’ meetings",
      "Keep all the communication lines consistently open for feedback and enquiries."
    ],
  },
  {
    title: "Low Power and Medium Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "COMMERCIAL ATTACHE",
    internal: "External",
    members: [
      "Identify the relevant Embassies/High Commissions",
      "Include in all stakeholders' meetings..",
      "Keep all communication lines consistently open for feedback and enquiries",
      "Review all Trade Agreements Nigeria has with International Communities and relevant institutions.",
      "Organize annual Trade fair with individual Embassies to showcase Trade opportunities with Nigeria",
    ],
  },
  {
    title: "Low Power and High Influence in the successful delivery of the mandate.",
    levelOfImportance: "High",
    source: "MEDIA",
    internal: "External",
    members: [
      "Press conferences.",
      "Include the media in all activities.",
      "Create social media handles to showcase the Committee's activities and success stories.",
    ],
  },
  {
    title: "Low Power and Medium Influence in the successful delivery of the mandate.",
    levelOfImportance: "Low",
    source: "NIGERIAN MASSES",
    internal: "External",
    members: [
      "Keep all communication lines consistently open for feedback and enquiries.",
    ],
  },
  {
    title: "Low Power and Medium Influence in the successful delivery of the mandate.",
    levelOfImportance: "High",
    source: "SOFTWARE SOLUTIONS AND PAYMENT PROVIDERS",
    internal: "External",
    members: [
      "Work with the Committee to promote e-commerce, m-commerce, e-trading, e-collections, e-payments systems, and overall Business process automation in the sector",
    ],
  },

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
        className="px-6 lg:px-24 w-full lg:h-[calc(100vh-5rem)] h-[calc(100vh-15rem)] tint flex flex-col justify-center"
      >
        <h1 className="text-4xl lg:text-5xl text-white font-[700] leading-[1.40] uppercase lg:w-[65%]">
          Stakeholder Mapping
        </h1>
        <p className="text-white font-[400] text-[18px] leading-[1.40] lg:w-[65%] pt-4 lg:pt-10">
          Stakeholder mapping is the process of identifying and categorizing key
          stakeholders involved in achieving the policy objectives and goals of
          the House Committee on Commerce. It entails developing a stakeholder's
          map, build the list of relevant stakeholders from this map,
          determining the level of involvement of each stakeholder, their
          purpose, area of interest and goals and building an engagement plan
          for their smooth contribution to the achievement of the statutory
          mandate.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 py-16 lg:py-32 px-6 lg:px-24">
        {
          MAPPING_PLANS.map((plan, index) => (
            <div 
            key={"plan-" + index}
            className="border border-[#F1EFEF]">
          <div className="bg-[#12486B] px-5 py-6">
            <span className="absolute bg-secondary w-20 h-0.5"></span>
            <p className="text-secondary font-[700] text-xs py-2 uppercase">
              Level of Importance / Influence
            </p>
            <p className="text-[16px] font-[700] text-white">
              {plan.title}
            </p>
          </div>
          <div className="px-5 pb-6">
            <div className="flex py-4 gap-3 text-[10px] text-black">
              <span className="px-4 py-2 rounded-full bg-[#C9EAFF]">{plan.levelOfImportance}</span>
              <span className="px-4 py-2 rounded-full bg-[#FEE0D7]">{
                plan.internal
              }</span>
            </div>
            <h6 className="text-sm font-[700] uppercase text-primary">{
              plan.source
            }</h6>
            <ul className="text-[14px] pl-6 pt-4 list-disc font-[400] text-[#434546] leading-[1.40]">
              {
                plan.members.map((member, index) => (
                  <li key={"member-" + index} className="py-2">{member}</li>
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
