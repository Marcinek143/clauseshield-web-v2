import Link from "next/link";

const footerColumns = [
  {
    title: "Platform",
    links: ["Global Network", "Pricing", "API Documentation"],
  },
  {
    title: "Support",
    links: ["Contact Support", "Help Center", "Security"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function DashboardFooter() {
  return (
    <footer className="w-full py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-screen-2xl mx-auto font-['Inter'] text-sm">
        <div className="col-span-1 md:col-span-1">
          <span className="font-['Manrope'] font-bold text-lg text-slate-900 dark:text-white block mb-4">
            ClauseShield
          </span>
          <p className="text-slate-500 max-w-xs">
            Precision logistics intelligence for modern global supply chains.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h5 className="font-bold text-slate-900 mb-4">{column.title}</h5>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <Link
                    className="text-slate-500 hover:text-slate-700 transition-opacity opacity-80 hover:opacity-100"
                    href="#"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-screen-2xl mx-auto mt-12 pt-8 border-t border-slate-200/50">
        <p className="text-slate-400 text-xs text-center">
          © 2024 ClauseShield Container Intelligence. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
