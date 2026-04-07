import Link from "next/link";

import { footerColumns } from "./trackingData";

export default function TrackingFooter() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 w-full py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
        <div className="col-span-1">
          <span className="font-['Manrope'] font-bold text-lg text-slate-900 dark:text-white">
            ClauseShield
          </span>
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-['Inter'] text-sm leading-relaxed">
            Elevating global container logistics through architectural precision
            and real-time intelligence.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title} className="col-span-1 flex flex-col gap-3">
            <h5 className="font-bold text-slate-900 dark:text-white text-sm">
              {column.title}
            </h5>
            {column.links.map((link) => (
              <Link
                key={link}
                className="text-slate-500 dark:text-slate-400 font-['Inter'] text-sm hover:text-slate-700 dark:hover:text-slate-200 transition-opacity opacity-80 hover:opacity-100"
                href="#"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 font-['Inter'] text-xs">
          © 2024 ClauseShield Container Intelligence. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer text-xl">
            language
          </span>
          <span className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer text-xl">
            security
          </span>
        </div>
      </div>
    </footer>
  );
}
