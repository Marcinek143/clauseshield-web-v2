"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CalculatorNavDropdown from "../calculator/CalculatorNavDropdown";

export default function ContainerHeader() {
  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;
  const isContainerLanding = pathname === "/container";

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/70 backdrop-blur-md shadow-xl shadow-[#000615]/5 h-20 flex justify-between items-center px-8">
      <div className="flex items-center gap-8">
        <Link
          className="text-2xl font-black text-[#0B1F3A] tracking-tighter font-headline"
          href="/container"
        >
          ClauseShield
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-['Manrope'] font-medium text-sm tracking-tight">
          <div className="flex items-center gap-6">
            <Link
              className={`${
                isContainerLanding
                  ? "text-[#006875] font-bold border-b-2 border-[#006875] pb-1"
                  : "text-[#44474d] hover:text-[#0B1F3A] transition-colors"
              }`}
              href="/container"
            >
              Container Intelligence
            </Link>
            <CalculatorNavDropdown
              activeClassName="text-[#006875] font-bold border-b-2 border-[#006875] pb-1 hover:text-[#006875] transition-colors"
              activeItemClassName=" !bg-[#0B1F3A] !text-white"
              inactiveClassName="text-[#44474d] hover:text-[#0B1F3A] transition-colors"
              itemClassName="block rounded-lg px-3 py-2 text-sm font-medium text-[#44474d] hover:bg-[#f2f4f6] hover:text-[#0B1F3A] transition-colors"
              menuClassName="absolute left-0 top-full z-50 min-w-[160px] rounded-xl border border-[rgba(196,198,206,0.25)] bg-white p-2 shadow-lg"
            />
            <Link
              className={`${
                isActiveLink("/dashboard")
                  ? "text-[#006875] font-bold border-b-2 border-[#006875] pb-1"
                  : "text-[#44474d] hover:text-[#0B1F3A] transition-colors"
              }`}
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className={`${
                isActiveLink("/tracking")
                  ? "text-[#006875] font-bold border-b-2 border-[#006875] pb-1"
                  : "text-[#44474d] hover:text-[#0B1F3A] transition-colors"
              }`}
              href="/tracking"
            >
              Tracking
            </Link>
          </div>
          <div className="h-6 w-px bg-[rgba(117,119,126,0.2)]" />
          <Link
            className="inline-flex items-center gap-2 text-[#0B1F3A] font-semibold hover:text-[#006875] transition-colors"
            href="/"
          >
            Contract AI
            <span className="rounded-full bg-[rgba(117,119,126,0.12)] px-2 py-0.5 text-xs font-semibold text-[#44474d]">
              Coming Soon
            </span>
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="bg-[#0B1F3A] text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 active:scale-95 transition-all"
          type="button"
        >
          Upgrade
        </button>
        <div className="flex gap-2">
          <span className="material-symbols-outlined p-2 text-[#44474d] hover:bg-[#f2f4f6]/50 rounded-lg cursor-pointer">
            notifications
          </span>
          <span className="material-symbols-outlined p-2 text-[#44474d] hover:bg-[#f2f4f6]/50 rounded-lg cursor-pointer">
            settings
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#E0E3E5] overflow-hidden ml-2">
          <Image
            alt="User profile"
            className="w-full h-full object-cover"
            height={40}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUxjKPiLrHIPzoN6JX-x5xuK4XpBDn7_ub_5O2uwxwSOIVD33D21u5Le6ybH6Dk7IwlX7HcWy91OaSPfNY4o1BpiANSAiV2EPZd2A8TKaiwId9jDX_MX454AM2U9GcneRHSxoYedDM2fJV8H7OEfqRrljxlSfjueyRgBE6795KZhp1rwXpm_upuXdIJPcYbghPCp70U8C6iD1Seis-5TgnJ_ysQ0WpUt9d5odcafyluKCEtBX9GhdRG05kQ6df4WiXJya9zx69YJg"
            width={40}
          />
        </div>
      </div>
    </header>
  );
}
