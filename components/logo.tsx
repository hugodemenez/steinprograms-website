'use client';

import Link from "next/link";

export default function SteinProgramsLogo() {
  return (
    <Link href="/">
        <svg className="stroke-black dark:stroke-white" width="32" height="32" viewBox="0 0 150 150" fill="none">
            <line id="firstBar" x1="61.2705" y1="-10.2658" x2="-1.62191" y2="52.6266"  strokeWidth="22.1699" strokeLinecap="square"/>
            <path id="secondBar" d="M106.998 75.3418L43.6856 75.3418" strokeWidth="22.1699" strokeLinecap="square"/>
            <line id="thirdBar" x1="176.036" y1="74.1244" x2="84.8937" y2="165.266" strokeWidth="22.1699" strokeLinecap="square"/>
        </svg>
    </Link>
  )
}
