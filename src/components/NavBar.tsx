import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import { motion } from "framer-motion";

const LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Members",
    link: "/members",
  },
  {
    name: "Strategic Development",
    link: "/strategic-development",
  },
  {
    name: "Stakeholders Mapping",
    link: "/stakeholders-mapping",
  },
  {
    name: "Environemental Scanning",
    link: "/environmental-scanning",
  },
];

export default function NavBar() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <motion.div className="flex items-center z-[70] bg-white h-max flex-row w-full justify-between lg:px-24 pt-8 pb-4 px-6">
      <motion.div className="">
        <Image src="/images/hr-logo.png" width={60} height={60} alt="" />
      </motion.div>
      <motion.div className="flex flex-col w-full items-end justify-center">
        <motion.ul
          className={`lg:flex hidden flex-col lg:flex-row gap-6 py-3 lg:py-0 lg:relative absolute pt-72 pb-10 lg:pb-0 lg:mt-0 w-full lg:w-max `}
        >
          {LINKS.map((link, index) => (
            <motion.li
              key={index}
            >
              <Link
                key={index}
                href={link.link}
                className="uppercase text-primary font-[600] text-[13px] hover:text-secondary"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        {showMenu && (
          <motion.ul
            initial={{
              opacity: 0,
              marginTop: "-1rem",
            }}
            animate={{
              opacity: 1,
              marginTop: "0rem",
              transition: {
                duration: 0.5,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={`lg:hidden absolute z-[70] flex flex-col lg:flex-row gap-3 py-3 left-0 lg:py-0 lg:relative lg:bg-transparent bg-white pt-72 pb-10 lg:pb-0 lg:mt-0 w-full lg:w-max ${
              showMenu ? "flex items-center" : "hidden"
            }`}
          >
            {LINKS.map((link, index) => (
              <motion.li key={index}>
                <Link
                  key={index}
                  href={link.link}
                  className="uppercase text-primary font-[600] text-[13px] hover:text-secondary"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>
      {/* <motion.div className="hidden lg:block w-max">
          <motion.button className="w-max bg-bizcon-secondary hover:bg-blue-600 text-black font-normal py-2 px-4 text-sm rounded">
            Join Waitlist
          </motion.button>
        </motion.div> */}
      <motion.div className="lg:hidden block z-[70]">
        {showMenu ? (
          <CloseSquare
            onClick={() => setShowMenu(!showMenu)}
            size={28}
            color="#000"
          />
        ) : (
          <HambergerMenu
            onClick={() => setShowMenu(!showMenu)}
            size={28}
            color="#000"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
