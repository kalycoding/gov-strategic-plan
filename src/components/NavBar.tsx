import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// home, members, strategic development, stakeholders mapping, environemental scanning
const LINKS = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Members',
        href: '/members'
    },
    {
        name: 'Strategic Development',
        href: '/strategic-development'
    },
    {
        name: 'Stakeholders Mapping',
        href: '/stakeholders-mapping'
    },
    {
        name: 'Environemental Scanning',
        href: '/environmental-scanning'
    }
]

export default function NavBar() {
  return (
    <div className='flex justify-between items-center bg-white pt-5 py-2 px-24'>
        <Image src='/images/hr-logo.png' width={60} height={60} alt="" />
        <div className="flex gap-8">
            {
                LINKS.map((link, index) => (
                    <Link key={index} href={link.href} className='uppercase text-primary font-[600] text-[13px] hover:text-secondary'>{link.name}</Link >
                ))
            }
        </div>
    </div>
  )
}
