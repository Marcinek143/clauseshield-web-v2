import Link from "next/link";

import { footerIcons, footerLinks } from "./calculatorCompactData";

export default function CalculatorCompactFooter() {
  return (
    <footer className="bg-surface-container-lowest text-on-surface-variant w-full py-12 px-8 border-t border-outline-variant/10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 font-['Inter'] text-xs tracking-widest">
        <div className="flex flex-col gap-2">
          <span className="font-headline font-bold text-[#0B1F3A] text-lg tracking-tighter">
            ClauseShield
          </span>
          <p className="uppercase opacity-60">
            © 2024 ClauseShield Logistics Intelligence. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center gap-8 uppercase font-bold">
          {footerLinks.map((link) => (
            <Link key={link} className="hover:text-primary transition-colors" href="#">
              {link}
            </Link>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          {footerIcons.map((icon) => (
            <div
              key={icon}
              className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
